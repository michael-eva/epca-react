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