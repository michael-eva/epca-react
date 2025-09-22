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
    
    // Get initial subject from URL params
    const getInitialSubject = () => {
        const subjectParam = searchParams.get('subject');
        if (!subjectParam) return 'Please select a subject';
        
        const subjectMapping = {
            'e-785': 'E-785 Mining Truck',
            'e-777d': 'E-777 Mining Truck',
            'e-988': 'E-988 Wheel Loader',
            'e-992': 'E-992 Wheel Loader',
            'UON-smart-cell': 'DC Charger',
            'uon': 'DC Charger',
            'general': 'General Enquiry',
        };

        const normalizedParam = subjectParam.toLowerCase();
        const mappedSubject = subjectMapping[normalizedParam];

        if (mappedSubject) return mappedSubject;
        return 'Please select a subject';
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        businessPhone: '',
        subject: getInitialSubject(), // Initialize with URL param if present
        message: '', // Additional information
        businessName: '',
        fullBusinessAddress: '',
        updates: true,
        
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Move subjectOptions outside of component or use useMemo
    const subjectOptions = React.useMemo(() => [
        'Please select a subject',
        'E-785 Mining Truck',
        'E-777 Mining Truck',
        'E-988 Wheel Loader',
        'E-992 Wheel Loader',
        'DC Charger',
        'General Enquiry',
        'Sales Question',
        'Service Request',
        'Parts Availability',
        'Financing Options',
        'Other',
    ], []); // Empty dependency array since this array never changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData(prev => ({ ...prev, subject: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
    
        // Basic validation
        const subjectInvalid = !formData.subject || formData.subject === 'Please select a subject';
        const missingRequired =
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.businessPhone ||
            !formData.businessName ||
            !formData.fullBusinessAddress ||
            !formData.message ||
            subjectInvalid;
        if (missingRequired) return;
    
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return;
    
        setLoading(true);
        try {
            const apiUrl = '/.netlify/functions/enquiry';
            
              
            // Map new field names to legacy payload keys expected by backend
            const payload = {
                fullName: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                phone: formData.businessPhone,
                subject: formData.subject,
                message: formData.message,
                companyName: formData.businessName,
                updates: formData.updates,
                fullBusinessAddress: formData.fullBusinessAddress,
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (!response.ok) {
              throw new Error(result.message || 'Failed to submit form');
            }
            
            toast.success('Enquiry sent successfully!');
            
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                businessPhone: '',
                subject: subjectOptions[0],
                message: '',
                businessName: '',
                fullBusinessAddress: '',
                updates: true,
                
            });
            setSubmitted(false);

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
                <h1 className="text-4xl font-medium text-center mb-16">Submit an Enquiry</h1>

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
                        <p className="mb-2 font-medium">Enquiry Subject<span className="text-red-600">*</span></p>
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
                        {submitted && (!formData.subject || formData.subject === 'Please select a subject') && (
                            <p className="mt-2 text-sm text-red-600">This field is required.</p>
                        )}
                    </div>

                    {/* Additional Information */}
                    <div>
                        <p className="mb-2 font-medium">Additional Information<span className="text-red-600">*</span></p>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                        />
                        {submitted && !formData.message && (
                            <p className="mt-2 text-sm text-red-600">This field is required.</p>
                        )}
                    </div>

                    {/* Contact Information Section */}
                    <div className="pt-8">
                        <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="mb-2 font-medium">First Name<span className="text-red-600">*</span></p>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                />
                                {submitted && !formData.firstName && (
                                    <p className="mt-2 text-sm text-red-600">This field is required.</p>
                                )}
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Last Name<span className="text-red-600">*</span></p>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                />
                                {submitted && !formData.lastName && (
                                    <p className="mt-2 text-sm text-red-600">This field is required.</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="mb-2 font-medium">Email<span className="text-red-600">*</span></p>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                />
                                {submitted && !formData.email && (
                                    <p className="mt-2 text-sm text-red-600">This field is required.</p>
                                )}
                                {submitted && formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                                    <p className="mt-2 text-sm text-red-600">Please enter a valid email address.</p>
                                )}
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Business Phone<span className="text-red-600">*</span></p>
                                <div>
                                    <input
                                        type="tel"
                                        id="businessPhone"
                                        name="businessPhone"
                                        value={formData.businessPhone}
                                        onChange={handleChange}
                                        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                        placeholder="Phone number"
                                    />
                                </div>
                                {submitted && !formData.businessPhone && (
                                    <p className="mt-2 text-sm text-red-600">This field is required.</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="mb-2 font-medium">Business Name<span className="text-red-600">*</span></p>
                                <input
                                    type="text"
                                    id="businessName"
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                />
                                {submitted && !formData.businessName && (
                                    <p className="mt-2 text-sm text-red-600">This field is required.</p>
                                )}
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Full Business Address<span className="text-red-600">*</span></p>
                                <input
                                    type="text"
                                    id="fullBusinessAddress"
                                    name="fullBusinessAddress"
                                    value={formData.fullBusinessAddress}
                                    onChange={handleChange}
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                    placeholder="Street, City, State, Postcode, Country"
                                />
                                {submitted && !formData.fullBusinessAddress && (
                                    <p className="mt-2 text-sm text-red-600">This field is required.</p>
                                )}
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
