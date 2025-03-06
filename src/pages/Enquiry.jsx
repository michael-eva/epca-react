import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Enquiry = () => {
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    // Subject options for the dropdown
    const subjectOptions = [
        'Please select a subject',
        'E-785 Loading Truck',
        'E-777D Mining Truck',
        'E-993 Loader',
        'UON SMART™ CELL',
        'General Enquiry',
        'Sales Question',
        'Service Request',
        'Parts Availability',
        'Financing Options',
        'Other',
    ];

    useEffect(() => {
        // Check if subject is provided in URL params
        const subjectParam = searchParams.get('subject');

        if (subjectParam) {
            // Case-insensitive mapping of URL parameters to full subject options
            const subjectMapping = {
                'e-785': 'E-785 Loading Truck',
                'e-777d': 'E-777D Mining Truck',
                'e-993': 'E-993 Loader',
                'UON-smart-cell': 'UON SMART™ CELL',
                'uon': 'UON SMART™ CELL',
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
    }, [searchParams, subjectOptions]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
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
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            console.log('Form submitted:', formData);
            toast.success('Enquiry sent successfully!');

            // Reset form after successful submission
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: subjectOptions[0],
                message: '',
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
                            <span>For urgent matters, please call our customer service line</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-[#00CC66] mr-2">•</span>
                            <span>All information provided is kept confidential</span>
                        </li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Subject Selection */}
                    <div>
                        <p className="mb-2 font-medium">Enquiry Subject</p>
                        <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                            required
                        >
                            {subjectOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
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
                                    id="name"
                                    name="name"
                                    value={formData.name}
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
                                        <select className="h-full py-0 pl-4 pr-2 bg-transparent text-gray-900 text-sm focus:ring-[#00CC66] focus:border-[#00CC66] rounded-l-lg border-r border-transparent">
                                            <option value="+61">AU +61</option>
                                            <option value="+1">US/CA +1</option>
                                            <option value="+44">UK +44</option>
                                            <option value="+49">DE +49</option>
                                            <option value="+81">JP +81</option>
                                            <option value="+86">CN +86</option>
                                            <option value="+91">IN +91</option>
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
