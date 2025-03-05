import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const TestDrive = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
  // Set default time to next round hour
  const getDefaultTime = () => {
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(now.getHours() + 1, 0, 0, 0); // Set to next hour, 0 minutes
    
    // Format as HH:00
    const hours = nextHour.getHours().toString().padStart(2, '0');
    return `${hours}:00`;
  };
  
  const [time, setTime] = useState(getDefaultTime());
  
  const location = {
    id: 1,
    name: 'EPCA Hazelmere',
    address: '123 Lakes Road, Hazelmere, Perth WA 6055'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ location, date, time });
  };

  return (
    <>
      <Navbar mode="dark" />
      <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
        <h1 className="text-4xl font-medium text-center mb-16">Test Drive E-777D</h1>
        
        {/* Find Time and Location Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Schedule a Test Drive</h2>
          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          {/* Important Notes */}
          <div className="bg-gray-50 border-l-4 border-[#00CC66] p-5 rounded-lg mb-8">
            <h3 className="text-lg font-medium mb-3">Important Notes:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#00CC66] mr-2">•</span>
                <span>Test drives are only available in Perth, Australia</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00CC66] mr-2">•</span>
                <span>EPCA covers local transport & site access</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00CC66] mr-2">•</span>
                <span>Companies must cover flights & accommodation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00CC66] mr-2">•</span>
                <span className="font-medium">Cost: $6,730 USD per test drive</span>
              </li>
            </ul>
          </div>
          
          {/* Location Display */}
          <div className="mb-8">
            <p className="mb-2 font-medium">Showroom Location</p>
            <div className="rounded-lg p-4 border-[#00CC66] border-2 mb-4">
              <p className="font-medium">{location.name}</p>
              <p className="text-sm text-gray-600">{location.address}</p>
            </div>
          </div>
          
          {/* Static Map Image */}
          <div className="w-full mb-8">
            <img 
              src="/hazelmere-map.png" 
              alt="Map showing EPCA Hazelmere location" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Electric Power Conversions Australia - Hazelmere, Perth
            </p>
          </div>
          
          {/* Date and Time Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="mb-2 font-medium">Date</p>
              <input 
                type="date" 
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <p className="mb-2 font-medium">Time</p>
              <select 
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="mb-2 font-medium">First Name</p>
              <input 
                type="text" 
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
              />
            </div>
            <div>
              <p className="mb-2 font-medium">Last Name</p>
              <input 
                type="text" 
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="mb-2 font-medium">Email Address</p>
              <input 
                type="email" 
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
              />
            </div>
            <div>
              <p className="mb-2 font-medium">Phone Number</p>
              <div className="relative">
                <input 
                  type="tel" 
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3 pl-[122px]"
                  placeholder="412 345 678"
                />
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <select className="h-full py-0 pl-4 pr-2 bg-transparent text-gray-900 text-sm focus:ring-[#00CC66] focus:border-[#00CC66] rounded-l-lg border-r border-transparent">
                    <option value="+61">AU +61</option>
                    <option value="+372">EE +372</option>
                    <option value="+20">EG +20</option>
                    <option value="+291">ER +291</option>
                    <option value="+34">ES +34</option>
                    <option value="+251">ET +251</option>
                    <option value="+358">FI +358</option>
                    <option value="+679">FJ +679</option>
                    <option value="+691">FM +691</option>
                    <option value="+298">FO +298</option>
                    <option value="+33">FR +33</option>
                    <option value="+1">US/CA +1</option>
                    <option value="+44">UK +44</option>
                    <option value="+49">DE +49</option>
                    <option value="+81">JP +81</option>
                    <option value="+86">CN +86</option>
                    <option value="+91">IN +91</option>
                    <option value="+7">RU +7</option>
                    <option value="+55">BR +55</option>
                    <option value="+52">MX +52</option>
                    <option value="+82">KR +82</option>
                    <option value="+39">IT +39</option>
                    <option value="+31">NL +31</option>
                    <option value="+90">TR +90</option>
                    <option value="+966">SA +966</option>
                    <option value="+65">SG +65</option>
                    <option value="+64">NZ +64</option>
                    <option value="+27">ZA +27</option>
                    <option value="+971">AE +971</option>
                    <option value="+60">MY +60</option>
                    <option value="+66">TH +66</option>
                    <option value="+62">ID +62</option>
                    <option value="+63">PH +63</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Checkboxes */}
          <div className="space-y-4 mb-8">            
            <div className="flex items-start">
              <input 
                id="updates" 
                type="checkbox" 
                className="w-4 h-4 mt-1 border-gray-300 rounded focus:ring-[#00CC66] text-[#00CC66]"
              />
              <label htmlFor="updates" className="ml-2 text-sm text-gray-700">
                Get EPCA Updates
              </label>
            </div>
          </div>
          
          {/* Privacy Notice */}
          <div className="text-sm text-gray-600 mb-8">
            <p>
              By submitting this form, you agree to our privacy policy and terms of service. We will use your information to process your enquiry and may contact you regarding your request.
            </p>
          </div>
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full md:w-auto md:px-16 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white font-medium rounded-md transition-colors"
            onClick={handleSubmit}
          >
            Schedule Test Drive
          </button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TestDrive;
