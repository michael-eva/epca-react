import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Enquiry = () => {
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        companyName: '',
        updates: true,
        dialCode: '+61'
    });
    const [loading, setLoading] = useState(false);

    // Move subjectOptions outside of component or use useMemo
    const subjectOptions = React.useMemo(() => [
        'Please select a subject',
        'E-785 Mining Truck',
        'E-777D Mining Truck',
        'E-993 Loader',
        'DC Charger',
        'General Enquiry',
        'Sales Question',
        'Service Request',
        'Parts Availability',
        'Financing Options',
        'Other',
    ], []); // Empty dependency array since this array never changes

    
    useEffect(() => {
        // Check if subject is provided in URL params
        const subjectParam = searchParams.get('subject');
        if (subjectParam) {
            // Case-insensitive mapping of URL parameters to full subject options
            const subjectMapping = {
                'e-785': 'E-785 Mining Truck',
                'e-777d': 'E-777D Mining Truck',
                'e-993': 'E-993 Loader',
                'UON-smart-cell': 'DC Charger',
                'uon': 'DC Charger',
                'general': 'General Enquiry',
            };

            // Try to find a match in our mapping
            const normalizedParam = subjectParam.toLowerCase();
            const mappedSubject = subjectMapping[normalizedParam];

            if (mappedSubject && subjectOptions.includes(mappedSubject)) {
                setFormData(prev => ({ ...prev, subject: mappedSubject }));
            } else if (subjectOptions.includes(subjectParam)) {
                // Direct match with the options list
                setFormData(prev => ({ ...prev, subject: subjectParam }));
            } else {
                // Default to first option if no valid subject is provided
                setFormData(prev => ({ ...prev, subject: subjectOptions[0] }));
            }
        } else {
            // Default to first option if no subject param is provided
            setFormData(prev => ({ ...prev, subject: subjectOptions[0] }));
        }
    }, [formData.subject]); // Remove subjectOptions from dependency array

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData(prev => ({ ...prev, subject: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Basic validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            toast.error('Please fill in all fields');
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
                body: JSON.stringify({...formData, enquiryForm: true})
            });

            toast.success('Enquiry sent successfully!');
            
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: subjectOptions[0],
                message: '',
                companyName: '',
                updates: true,
                dialCode: '+61'
            });

        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send enquiry. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar mode="dark" />
            <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                <h1 className="text-4xl font-medium text-center mb-16">Send Us an Enquiry</h1>

                {/* Important Notes */}
                <div className="bg-gray-50 border-l-4 border-[#00CC66] p-5 rounded-lg mb-8">
                    <h3 className="text-lg font-medium mb-3">Important Notes:</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-[#00CC66] mr-2">•</span>
                            <span>We typically respond to enquiries within 24-48 hours</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#00CC66] mr-2">•</span>
                            <span>For urgent matters, please contact us directly</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#00CC66] mr-2">•</span>
                            <span>All information provided is kept confidential</span>
                        </li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Subject Selection - Replace with shadcn Select */}
                    <div>
                        <p className="mb-2 font-medium">Enquiry Subject</p>
                        <Select
                            value={formData.subject}
                            onValueChange={handleSelectChange}
                        >
                            <SelectTrigger 
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3 h-[46px] shadow-sm"
                            >
                                <SelectValue placeholder="Please select a subject" />
                            </SelectTrigger>
                            <SelectContent 
                                className="bg-white border border-gray-300 text-gray-900 rounded-lg shadow-md z-50"
                                position="popper"
                                sideOffset={5}
                            >
                                {subjectOptions.map((option) => (
                                    <SelectItem 
                                        key={option} 
                                        value={option}
                                        className="hover:bg-gray-100 focus:bg-gray-100 py-2"
                                    >
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Message */}
                    <div>
                        <p className="mb-2 font-medium">Your Message</p>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                            required
                        />
                    </div>

                    {/* Contact Information Section */}
                    <div className="pt-8">
                        <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="mb-2 font-medium">Full Name</p>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                    required
                                />
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Email Address</p>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="mb-2 font-medium">Company Name</p>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                />
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Phone Number</p>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3 pl-[122px]"
                                        placeholder="412 345 678"
                                        required
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <Select
                                            value={formData.dialCode}
                                            onValueChange={(value) => setFormData(prev => ({ ...prev, dialCode: value }))}
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
                                                <SelectItem value="+1">US/CA +1</SelectItem>
                                                <SelectItem value="+44">UK +44</SelectItem>
                                                <SelectItem value="+49">DE +49</SelectItem>
                                                <SelectItem value="+81">JP +81</SelectItem>
                                                <SelectItem value="+86">CN +86</SelectItem>
                                                <SelectItem value="+91">IN +91</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Checkboxes */}
                        <div className="flex items-start">
    <input
        id="updates"
        name="updates"
        type="checkbox"
        checked={formData.updates}
        onChange={(e) => setFormData(prev => ({ ...prev, updates: e.target.checked }))}
        className="w-4 h-4 mt-1 border-gray-300 rounded focus:ring-[#00CC66] text-[#00CC66]"
    />
    <label htmlFor="updates" className="ml-2 text-sm text-gray-700">
        Get EPCA Updates
    </label>
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
                            disabled={loading}
                            className="w-full md:w-auto md:px-16 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white font-medium rounded-md transition-colors disabled:opacity-50"
                        >
                            {loading ? 'Sending...' : 'Submit Enquiry'}
                        </button>
                    </div>
                </form>
            </div>
                <Footer />
        </>
    );
};

export default Enquiry;
