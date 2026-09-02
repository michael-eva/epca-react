const SITE_INFO_LABELS = {
  electricityCostPerMWh: 'Cost of Electricity per MWh',
  dieselCostPerLitre: 'Cost of Diesel per Litre',
  dieselDryHireRate: 'Current Diesel Dry Hire Rate & Inclusions',
  carbonTaxCredits: 'Cost of Carbon Tax/Credits',
  electricitySource: 'Source of Electricity',
  temperatureRange: 'Temperature Min/Max',
  siteLocation: 'Site Location',
  wacc: 'WACC (Weighted Average Cost of Capital)'
};

const generateQuoteTextBlock = (formData) => {
  const lines = [];
  lines.push('QUOTE - CLIENT INFORMATION');
  lines.push('');
  lines.push('CONTACT INFORMATION');
  lines.push(`Full Name: ${formData.fullName || ''}`);
  lines.push(`Company: ${formData.companyName || ''}`);
  lines.push(`Email: ${formData.email || ''}`);
  lines.push(`Phone: ${formData.phone || ''}`);
  lines.push('');

  lines.push('MACHINE INFORMATION');
  const machines = Array.isArray(formData.machines) ? formData.machines : [];
  if (machines.length === 0) {
    lines.push('(none provided)');
  } else {
    machines.forEach((m, i) => {
      lines.push(`${i + 1}. Make and Model: ${m.makeAndModel || ''}`);
      lines.push(`   Quantity to electrify: ${m.quantity || ''}`);
      lines.push(`   Diesel Consumption (L/hr): ${m.dieselConsumption || ''}`);
      lines.push(`   Annual Operating Hours (hr/year): ${m.annualOperatingHours || ''}`);
      lines.push(`   Typical Cycle Details: ${m.cycleDetails || ''}`);
      lines.push(`   Operating Cost /hour: ${m.operatingCost || ''}`);
    });
  }
  lines.push('');

  lines.push('SITE INFORMATION');
  const siteInfo = formData.siteInfo || {};
  Object.entries(SITE_INFO_LABELS).forEach(([key, label]) => {
    const entry = siteInfo[key] || {};
    const comment = entry.comment ? ` (Comment: ${entry.comment})` : '';
    lines.push(`${label}: ${entry.response || ''}${comment}`);
  });
  lines.push('');

  lines.push('TYPE OF SERVICE');
  lines.push(`Origin of the Machine: ${formData.origin || ''}`);
  lines.push(`Contract Options: ${formData.contractOption || ''}`);
  lines.push(`Include Training: ${formData.includeTraining ? 'Yes' : 'No'}`);
  lines.push(`Include Remote Data Monitoring: ${formData.includeRemoteMonitoring ? 'Yes' : 'No'}`);
  lines.push(`Include Fast DC Charger: ${formData.includeFastDcCharger || ''}`);

  return lines.join('\n');
};

const generateEmailTemplate = (formData, formType) => {
  const timestamp = new Date().toLocaleString();
  
  const templates = {
    testDrive: {
      subject: 'New Test Drive Request - EPCA',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #00CC66; color: white; padding: 20px; text-align: center;">
            <h1>New Test Drive Request</h1>
            <p>Received on ${timestamp}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${formData.fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${formData.companyName || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${formData.phone || 'Not provided'}</td></tr>
            </table>
            
            <h2>Test Drive Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Preferred Date:</td><td style="padding: 8px;">${formData.date}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Preferred Time:</td><td style="padding: 8px;">${formData.time}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Updates Requested:</td><td style="padding: 8px;">${formData.receiveUpdates ? 'Yes' : 'No'}</td></tr>
            </table>
          </div>
        </div>
      `
    },
    
    productEnquiry: {
      subject: 'New Product Enquiry - E-777',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #00CC66; color: white; padding: 20px; text-align: center;">
            <h1>New Product Enquiry</h1>
            <p>Received on ${timestamp}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${formData.fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${formData.companyName || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Location:</td><td style="padding: 8px;">${formData.location || 'Not provided'}</td></tr>
            </table>
            
            <h2>Configuration</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Runtime:</td><td style="padding: 8px;">${formData.selectedRuntime}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Battery Diagnostics:</td><td style="padding: 8px;">${formData.batteryDiagnostics ? 'Yes' : 'No'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">eGovernor:</td><td style="padding: 8px;">${formData.eGovernor ? 'Yes' : 'No'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Remote Control:</td><td style="padding: 8px;">${formData.remoteControl ? 'Yes' : 'No'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Extended Warranty:</td><td style="padding: 8px;">${formData.extendedWarranty ? 'Yes' : 'No'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Charging Solution:</td><td style="padding: 8px;">${formData.chargingSolution ? 'Yes' : 'No'}</td></tr>
            </table>
            
            <h2>Training Options</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Operator Training:</td><td style="padding: 8px;">${formData.operatorTraining ? 'Yes' : 'No'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Maintenance Training:</td><td style="padding: 8px;">${formData.maintenanceTraining ? 'Yes' : 'No'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Management Training:</td><td style="padding: 8px;">${formData.managementTraining ? 'Yes' : 'No'}</td></tr>
            </table>
          </div>
        </div>
      `
    },
    
    feasibilityStudy: {
      subject: 'New Feasibility Study Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #00CC66; color: white; padding: 20px; text-align: center;">
            <h1>New Feasibility Study Request</h1>
            <p>Received on ${timestamp}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${formData.fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${formData.companyName || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${formData.countryCode} ${formData.phone || 'Not provided'}</td></tr>
            </table>
            
            <h2>Fleet Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Fleet Size:</td><td style="padding: 8px;">${formData.fleetSize || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Vehicle Types:</td><td style="padding: 8px;">${formData.vehicleTypes || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Updates Requested:</td><td style="padding: 8px;">${formData.receiveUpdates ? 'Yes' : 'No'}</td></tr>
            </table>
          </div>
        </div>
      `
    },
    
    enquiry: {
      subject: `New Enquiry - ${formData.subject || 'General'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #00CC66; color: white; padding: 20px; text-align: center;">
            <h1>New Enquiry</h1>
            <p>Received on ${timestamp}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${formData.fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${formData.companyName || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${formData.phone || 'Not provided'}</td></tr>
            </table>
            
            <h2>Enquiry Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Subject:</td><td style="padding: 8px;">${formData.subject || 'General Enquiry'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${formData.message || 'No message provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Updates Requested:</td><td style="padding: 8px;">${formData.updates ? 'Yes' : 'No'}</td></tr>
            </table>
          </div>
        </div>
      `
    },
    
    mailingList: {
      subject: 'New Mailing List Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #00CC66; color: white; padding: 20px; text-align: center;">
            <h1>New Mailing List Subscription</h1>
            <p>Received on ${timestamp}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Subscriber Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
            </table>
          </div>
        </div>
      `
    },

    quoteRequest: {
      subject: `New Quote Request - ${formData.companyName || formData.fullName || 'EPCA'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          <div style="background-color: #00CC66; color: white; padding: 20px; text-align: center;">
            <h1>New Quote Request</h1>
            <p>Received on ${timestamp}</p>
          </div>

          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${formData.fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${formData.companyName || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${formData.phone || 'Not provided'}</td></tr>
            </table>

            <h2 style="margin-top: 24px;">Copiable Summary (for quote generation)</h2>
            <pre style="white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 13px; background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 16px;">${generateQuoteTextBlock(formData)}</pre>
          </div>
        </div>
      `,
      text: generateQuoteTextBlock(formData)
    },

    careerApplication: {
      subject: 'New Career Application - EPCA',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #00CC66; color: white; padding: 20px; text-align: center;">
            <h1>New Career Application</h1>
            <p>Received on ${timestamp}</p>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Applicant Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td style="padding: 8px;">${formData.fullName}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${formData.phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Field of Interest:</td><td style="padding: 8px;">${formData.fieldOfInterest || 'Not specified'}</td></tr>
            </table>
            
            <h2 style="margin-top: 16px;">About the Applicant</h2>
            <div style="white-space: pre-wrap; padding: 8px; background: #fff; border: 1px solid #eee; border-radius: 6px;">${formData.aboutYou || 'No additional information provided.'}</div>
          </div>
        </div>
      `
    }
  };

  return templates[formType] || templates.enquiry;
};

module.exports = { generateEmailTemplate };