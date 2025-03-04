import React, { useState } from 'react';
import KeySpecs from '../../components/KeySpecs';
export default function E777DProductEnquiry() {
  const [selectedRuntime, setSelectedRuntime] = useState('standard');

  const handleRuntimeSelection = (runtime) => {
    setSelectedRuntime(runtime);
  };
  const specs = [
    { value: '100', unit: 't', label: 'Lorem\nIpsum' },
    { value: '54', unit: '%', label: 'Lorem\nIpsum' },
    { value: '10', unit: 'hr', label: 'Lorem\nIpsum' }
  ];
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      {/* Left side - Image Carousel */}
      <div className="w-full md:w-2/3 h-[50vh] md:h-screen overflow-hidden">
        <div className="h-full">
          <div className="relative h-full">
            {/* Carousel container */}
            <div className="h-full" id="imageCarousel">
              <img src="https://www.epca.net.au/wp-content/uploads/2024/06/dji_fly_20240518_130104_0086_1716029621038_photo-2.jpeg" alt="E-777 Front View" className="w-full h-full object-cover" />
            </div>
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/3 bg-white overflow-y-auto h-[50vh] md:h-screen">
        <div className="p-12 pt-24">
          <h1 className="text-4xl font-medium mb-4 text-center">E-777D</h1>
          <p className="text-gray-600 text-center mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          
          <KeySpecs specs={specs} />

          <form className="space-y-16">
            {/* Runtime Selection */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium mb-6 relative">
                Runtime Configuration
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <button 
                  type="button" 
                  className={`runtime-option p-6 border-2 rounded-xl hover:shadow-lg focus:outline-none transition-all group
                    ${selectedRuntime === 'standard' ? 'border-[#00CC66] bg-[#00CC66]/5' : 'border-gray-200'}`}
                  onClick={() => handleRuntimeSelection('standard')}
                  aria-selected={selectedRuntime === 'standard'}
                >
                  <h3 className={`text-xl font-medium ${selectedRuntime === 'standard' ? 'text-[#00CC66]' : 'group-hover:text-[#00CC66]'}`}>
                    Standard Runtime
                  </h3>
                  <p className="text-gray-600 mt-2">7 hours</p>
                </button>
                <button 
                  type="button" 
                  className={`runtime-option p-6 border-2 rounded-xl hover:shadow-lg focus:outline-none transition-all group
                    ${selectedRuntime === 'extended' ? 'border-[#00CC66] bg-[#00CC66]/5' : 'border-gray-200 hover:border-[#00CC66]'}`}
                  onClick={() => handleRuntimeSelection('extended')}
                  aria-selected={selectedRuntime === 'extended'}
                >
                  <h3 className={`text-xl font-medium ${selectedRuntime === 'extended' ? 'text-[#00CC66]' : 'group-hover:text-[#00CC66]'}`}>
                    Extended Runtime
                  </h3>
                  <p className="text-gray-600 mt-2">10 hours</p>
                </button>
              </div>
            </div>

            {/* Performance Package */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium mb-6 relative">
                Performance Package
              </h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                  <span className="text-lg group-hover:text-[#00CC66]">Enhanced Power Delivery System</span>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 form-checkbox text-[#00CC66] rounded" />
                    <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                  </div>
                </label>
                <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                  <span className="text-lg group-hover:text-[#00CC66]">Advanced Regenerative Braking</span>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 form-checkbox text-[#00CC66] rounded" />
                    <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                  </div>
                </label>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium mb-6">Additional Options</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                  <span className="text-lg group-hover:text-[#00CC66]">Battery Diagnostics and System Monitoring™</span>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 form-checkbox text-[#00CC66] rounded" />
                    <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                  </div>
                </label>
                <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                  <span className="text-lg group-hover:text-[#00CC66]">eGovernor tyre manager™</span>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 form-checkbox text-[#00CC66] rounded" />
                    <button type="button" className="text-gray-400 hover:text-[#00CC66] text-lg">ⓘ</button>
                  </div>
                </label>
              </div>
            </div>

            {/* Training */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium mb-6">Training Programs</h2>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                  <span className="text-lg group-hover:text-[#00CC66]">Operator Training</span>
                  <input type="checkbox" className="w-5 h-5 form-checkbox text-[#00CC66] rounded" />
                </label>
                <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                  <span className="text-lg group-hover:text-[#00CC66]">Maintenance Training</span>
                  <input type="checkbox" className="w-5 h-5 form-checkbox text-[#00CC66] rounded" />
                </label>
                <label className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-[#00CC66] hover:shadow-lg transition-all cursor-pointer group">
                  <span className="text-lg group-hover:text-[#00CC66]">Management Training</span>
                  <input type="checkbox" className="w-5 h-5 form-checkbox text-[#00CC66] rounded" />
                </label>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-medium mb-6 relative">
                Contact Information
              </h2>
              <div className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#00CC66] focus:ring-2 focus:ring-[#00CC66]/20 focus:outline-none transition-all" />
                <input type="text" placeholder="Company Name" className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#00CC66] focus:ring-2 focus:ring-[#00CC66]/20 focus:outline-none transition-all" />
                <input type="email" placeholder="Email Address" className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-[#00CC66] focus:ring-2 focus:ring-[#00CC66]/20 focus:outline-none transition-all" />
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-xl text-lg font-medium transition-all hover:shadow-lg hover:shadow-[#00CC66]/20">
              Submit Enquiry
            </button>
          </form>

          {/* Additional Information */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
