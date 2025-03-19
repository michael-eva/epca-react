import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from 'react-hot-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const TestDrive = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  // Set default time to next round hour
  const getDefaultTime = () => {
    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(now.getHours() + 1, 0, 0, 0); // Set to next hour, 0 minutes
    
    // Format as HH:00
    const hours = nextHour.getHours().toString().padStart(2, '0');
    return `${hours}:00`;
  };
  
  const location = {
    id: 1,
    name: 'EPCA Hazelmere',
    address: '123 Lakes Road, Hazelmere, Perth WA 6055'
  };

  // Add form data state with default date and time
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    countryCode: '+61',
    receiveUpdates: true,
    date: new Date().toISOString().split('T')[0],
    time: getDefaultTime()
  });

  // Single handler for all input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Add a handler for select changes
  const handleSelectChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
    
    setIsLoading(true);
  
    try {
      const response = await fetch('https://f4qe5xbd4vflzwi7yjrz2i4fjm0pcmfj.lambda-url.us-east-2.on.aws', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify({...formData, testDriveForm: true})
      });
  
      // With no-cors mode, we'll assume success if no error is thrown
      toast.success('Your enquiry has been submitted!');
  
      // Reset form
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        countryCode: '+61',
        receiveUpdates: false,
        date: new Date().toISOString().split('T')[0],
        time: getDefaultTime()
      });
  
    } catch (error) {
      console.error('Error submitting configuration:', error);
      toast.error('Failed to submit configuration. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar mode="dark" />
      <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
        <h1 className="text-4xl font-medium text-center mb-16">Test Drive E-777D</h1>
        
        <form onSubmit={handleSubmit}>
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
                src="/map.png" 
                alt="Map showing EPCA Hazelmere location" 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                EPCA Testing Field - Bakers Hill
              </p>
            </div>
            
            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="date" className="mb-2 font-medium block">Date</label>
                <input 
                  id="date"
                  type="date" 
                  name="date"
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="time" className="mb-2 font-medium block">Time</label>
                <Select
                  value={formData.time}
                  onValueChange={(value) => handleSelectChange('time', value)}
                  defaultValue={getDefaultTime()}
                >
<SelectTrigger 
  className="h-[46px] !bg-gray-100 border !border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent 
                    className="bg-white border border-gray-300 text-gray-900 rounded-lg shadow-md z-50"
                    position="popper"
                    sideOffset={5}
                  >
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>
          
          {/* Contact Information Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="fullName" className="mb-2 font-medium block">Full Name</label>
                <input 
                  id="fullName"
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 font-medium block">Email Address</label>
                <input 
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="companyName" className="mb-2 font-medium block">Company</label>
                <input 
                  id="companyName"
                  type="text" 
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="mb-2 font-medium block">Phone Number</label>
                <div className="relative">
                  <input 
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3 pl-[122px]"
                    placeholder="412 345 678"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Select
                      value={formData.countryCode}
                      onValueChange={(value) => handleSelectChange('countryCode', value)}
                    >
                      <SelectTrigger 
                        className="h-full py-0 pl-4 pr-2 bg-transparent text-gray-900 text-sm focus:ring-[#00CC66] focus:border-[#00CC66] rounded-l-lg border-r border-transparent w-[122px]"
                      >
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent 
                        className="bg-white border border-gray-300 text-gray-900 rounded-lg shadow-md z-50"
                        position="popper"
                        sideOffset={5}
                      >
                        <SelectItem value="+61">AU +61</SelectItem>
                        <SelectItem value="+372">EE +372</SelectItem>
                        <SelectItem value="+20">EG +20</SelectItem>
                        <SelectItem value="+291">ER +291</SelectItem>
                        <SelectItem value="+34">ES +34</SelectItem>
                        <SelectItem value="+251">ET +251</SelectItem>
                        <SelectItem value="+358">FI +358</SelectItem>
                        <SelectItem value="+679">FJ +679</SelectItem>
                        <SelectItem value="+691">FM +691</SelectItem>
                        <SelectItem value="+298">FO +298</SelectItem>
                        <SelectItem value="+33">FR +33</SelectItem>
                        <SelectItem value="+1">US/CA +1</SelectItem>
                        <SelectItem value="+44">UK +44</SelectItem>
                        <SelectItem value="+49">DE +49</SelectItem>
                        <SelectItem value="+81">JP +81</SelectItem>
                        <SelectItem value="+86">CN +86</SelectItem>
                        <SelectItem value="+91">IN +91</SelectItem>
                        <SelectItem value="+7">RU +7</SelectItem>
                        <SelectItem value="+55">BR +55</SelectItem>
                        <SelectItem value="+52">MX +52</SelectItem>
                        <SelectItem value="+82">KR +82</SelectItem>
                        <SelectItem value="+39">IT +39</SelectItem>
                        <SelectItem value="+31">NL +31</SelectItem>
                        <SelectItem value="+90">TR +90</SelectItem>
                        <SelectItem value="+966">SA +966</SelectItem>
                        <SelectItem value="+65">SG +65</SelectItem>
                        <SelectItem value="+64">NZ +64</SelectItem>
                        <SelectItem value="+27">ZA +27</SelectItem>
                        <SelectItem value="+971">AE +971</SelectItem>
                        <SelectItem value="+60">MY +60</SelectItem>
                        <SelectItem value="+66">TH +66</SelectItem>
                        <SelectItem value="+62">ID +62</SelectItem>
                        <SelectItem value="+63">PH +63</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Checkboxes */}
            <div className="space-y-4 mb-8">            
              <div className="flex items-start">
                <input 
                  id="receiveUpdates" 
                  name="receiveUpdates"
                  type="checkbox"
                  checked={formData.receiveUpdates}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-1 border-gray-300 rounded focus:ring-[#00CC66] text-[#00CC66]"
                />
                <label htmlFor="receiveUpdates" className="ml-2 text-sm text-gray-700">
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
              disabled={isLoading}
              className={`w-full md:w-auto md:px-16 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white font-medium rounded-md transition-colors flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Schedule Test Drive'
              )}
            </button>
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default TestDrive;
