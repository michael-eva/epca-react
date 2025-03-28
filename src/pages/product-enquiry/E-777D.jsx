import React, { useState } from 'react';
import KeySpecs from '../../components/KeySpecs';
import Footer from '../../components/Footer';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Navbar from '../../components/Navbar';
import { toast } from 'react-hot-toast';

export default function E777DProductEnquiry() {
  const [formData, setFormData] = useState({
    selectedRuntime: 'standard',
    enhancedPowerDelivery: false,
    advancedRegenerativeBraking: false,
    batteryDiagnostics: false,
    eGovernor: false,
    remoteControl: false,
    extendedWarranty: false,
    chargingSolution: false,
    operatorTraining: false,
    maintenanceTraining: false,
    managementTraining: false,
    fullName: '',
    companyName: '',
    email: '',
    location: ''
  });
  const [loading, setLoading] = useState(false);

  // Handle form input changes
const handleInputChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

// Handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Validate required fields
  if (!formData.fullName || !formData.email) {
    toast.error('Please fill in required fields (Full Name and Email)');
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    toast.error('Please enter a valid email address');
    return;
  }
  
  setLoading(true);

  try {
    const response = await fetch('https://f4qe5xbd4vflzwi7yjrz2i4fjm0pcmfj.lambda-url.us-east-2.on.aws', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
      body: JSON.stringify({...formData, productEnquiryForm: true})
    });

    // With no-cors mode, we'll assume success if no error is thrown
    toast.success('Your enquiry has been submitted!');

    // Reset form
    setFormData({
      selectedRuntime: 'standard',
      enhancedPowerDelivery: false,
      advancedRegenerativeBraking: false,
      batteryDiagnostics: false,
      eGovernor: false,
      remoteControl: false,
      extendedWarranty: false,
      chargingSolution: false,
      operatorTraining: false,
      maintenanceTraining: false,
      managementTraining: false,
      fullName: '',
      companyName: '',
      email: '',
      location: ''
    });

  } catch (error) {
    console.error('Error submitting configuration:', error);
    toast.error('Failed to submit enquiry. Please try again later.');
  } finally {
    setLoading(false);
  }
};
  const specs = [
    { value: '100', unit: 't', label: 'Payload' },
    { value: '50', unit: 'min', label: 'Charging' },
    { value: '8', unit: 'hr', label: 'Runtime' }
  ];
  return (
    <TooltipProvider>
      <Navbar mode="dark"/>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        {/* Left side - Image Carousel */}
        <div className="w-full md:w-2/3 h-[50vh] md:h-screen overflow-hidden">
          <div className="h-full">
            <div className="relative h-full">
              {/* Carousel container */}
              <div className="h-full" id="imageCarousel">
                <img src="/images/E777_EnquiryPage.webp" alt="E-777 Front View" className="w-full h-full object-contain" />
              </div>
              {/* Navigation arrows */}
              {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-md p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button> */}
              {/* <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-md p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/3 bg-white overflow-y-auto h-[50vh] md:h-screen">
          <div className="p-12 pt-24">
            <h1 className="text-4xl font-medium mb-4 text-center">E-777D</h1>
            <p className="text-gray-600 text-center mb-16">EPCA’s 100-tonne full battery-electric mining truck</p>
            
            <KeySpecs specs={specs} />

            <form className="space-y-16" onSubmit={handleSubmit}>
              {/* Runtime Selection */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-6 relative">
                  1. Runtime Configuration
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    type="button" 
                    className={`runtime-option p-6 border-2 rounded-xl hover:shadow-lg focus:outline-none transition-all group
                      ${formData.selectedRuntime === 'standard' ? 'border-[#00CC66] bg-[#00CC66]/5' : 'border-gray-200'}`}
                    onClick={() => handleInputChange({ target: { name: 'selectedRuntime', value: 'standard' }})}
                  >
                    <h3 className={`text-xl font-medium ${formData.selectedRuntime === 'standard' ? 'text-[#00CC66]' : 'group-hover:text-[#00CC66]'}`}>
                      Standard Runtime
                    </h3>
                    <p className="text-gray-600 mt-2">8 hours</p>
                  </button>
                  <button 
                    type="button" 
                    className={`runtime-option p-6 border-2 rounded-xl hover:shadow-lg focus:outline-none transition-all group
                      ${formData.selectedRuntime === 'extended' ? 'border-[#00CC66] bg-[#00CC66]/5' : 'border-gray-200'}`}
                    onClick={() => handleInputChange({ target: { name: 'selectedRuntime', value: 'extended' }})}
                  >
                    <h3 className={`text-xl font-medium ${formData.selectedRuntime === 'extended' ? 'text-[#00CC66]' : 'group-hover:text-[#00CC66]'}`}>
                      Extended Runtime
                    </h3>
                    <p className="text-gray-600 mt-2">10 hours</p>
                  </button>
                </div>
              </div>

              {/* Performance Package
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-6 relative">
                  Performance Package
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Enhanced Power Delivery System</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="enhancedPowerDelivery"
                        checked={formData.enhancedPowerDelivery}
                        onChange={handleInputChange}
                        className="w-5 h-5 form-checkbox text-[#00CC66] rounded" 
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Optimises power distribution for improved efficiency and performance</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Advanced Regenerative Braking</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="advancedRegenerativeBraking"
                        checked={formData.advancedRegenerativeBraking}
                        onChange={handleInputChange}
                        className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Enhanced energy recovery during braking operations</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </label>
                </div>
              </div> */}

              {/* Options */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-6">2. Additional Options</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Battery Diagnostics and System Monitoring™</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox"
                        name="batteryDiagnostics"
                        checked={formData.batteryDiagnostics}
                        onChange={handleInputChange}
                        className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Real-time insight into battery health, performance, and system status</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">eGovernor tyre manager™</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="eGovernor"
                        checked={formData.eGovernor}
                        onChange={handleInputChange}
                        className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Automatically limits speed based on tyre load, temperature, and pressure</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Remote Operation (Driverless)</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="remoteControl"
                        checked={formData.remoteControl}
                        onChange={handleInputChange}
                        className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Secure remote access for diagnostics, updates, and troubleshooting</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </label>
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Extended Warranty (5-Years)</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="extendedWarranty"
                        checked={formData.extendedWarranty}
                        onChange={handleInputChange}
                        className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Additional warranty coverage beyond the  1-Year standard period</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </label>
                </div>
              </div>

              {/* Charging */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-6">3. Charging</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Include Charging Solution</span>
                    <div className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        name="chargingSolution"
                        checked={formData.chargingSolution}
                        onChange={handleInputChange}
                        className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                      />
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Complete charging solution including infrastructure and installation</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </label>
                </div>
              </div>

              {/* Training */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-6">4. Training Programs</h2>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Operator Training</span>
                    <input 
                      type="checkbox" 
                      name="operatorTraining"
                      checked={formData.operatorTraining}
                      onChange={handleInputChange}
                      className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Maintenance Training</span>
                    <input 
                      type="checkbox" 
                      name="maintenanceTraining"
                      checked={formData.maintenanceTraining}
                      onChange={handleInputChange}
                      className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                    <span className="text-lg group-hover:text-[#00CC66]">Management Training</span>
                    <input 
                      type="checkbox" 
                      name="managementTraining"
                      checked={formData.managementTraining}
                      onChange={handleInputChange}
                      className="w-5 h-5 form-checkbox text-[#00CC66] rounded"
                    />
                  </label>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-medium mb-6 relative">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name" 
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#00CC66] focus:ring-2 focus:ring-[#00CC66]/20 focus:outline-none transition-all" 
                    required
                  />
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Company Name" 
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#00CC66] focus:ring-2 focus:ring-[#00CC66]/20 focus:outline-none transition-all" 
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address" 
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#00CC66] focus:ring-2 focus:ring-[#00CC66]/20 focus:outline-none transition-all" 
                    required
                  />
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Location (Country)" 
                    className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#00CC66] focus:ring-2 focus:ring-[#00CC66]/20 focus:outline-none transition-all" 
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-xl text-lg font-medium transition-all hover:shadow-lg hover:shadow-[#00CC66]/20 disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>

            {/* Additional Information
            <div className="mt-16 pt-16 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </TooltipProvider>
  );
}
