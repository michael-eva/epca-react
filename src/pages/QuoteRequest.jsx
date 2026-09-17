import React, { useState, useRef } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from 'react-hot-toast';

const inputClass = "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3";
const commentInputClass = "bg-transparent border-0 border-b border-gray-200 text-gray-500 text-xs focus:ring-0 focus:border-[#00CC66] block w-full px-1 py-1.5 placeholder-gray-400";

const Required = () => <span className="text-red-500">*</span>;

const emptyMachine = () => ({
    makeAndModel: '',
    quantity: '',
    dieselConsumption: '',
    annualOperatingHours: '',
    cycleDetails: '',
    operatingCost: ''
});

const SITE_INFO_FIELDS = [
    { key: 'electricityCostPerMWh', label: 'Cost of Electricity per MWh', placeholder: 'e.g. $135 /MWh' },
    { key: 'dieselCostPerLitre', label: 'Cost of Diesel per Litre', placeholder: 'e.g. $1.40 /L' },
    { key: 'dieselDryHireRate', label: 'Current Diesel Dry Hire Rate & Inclusions', placeholder: 'e.g. $185/hr for CAT77, incl. major maintenance' },
    { key: 'carbonTaxCredits', label: 'Cost of Carbon Tax/Credits', placeholder: 'e.g. $45 AUD/tonne, if mine is in safeguard mechanism' },
    { key: 'electricitySource', label: 'Source of Electricity', placeholder: 'e.g. gas / diesel / solar' },
    { key: 'temperatureRange', label: 'Temperature Min/Max', placeholder: 'e.g. 5 to 45 deg C' },
    { key: 'siteLocation', label: 'Site Location', placeholder: 'Provide address or link to map' },
    { key: 'wacc', label: 'WACC (Weighted Average Cost of Capital)', placeholder: 'e.g. 8%' }
];

export default function QuoteRequest() {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        origin: '',
        contractOption: '',
        includeTraining: false,
        includeRemoteMonitoring: false,
        includeFastDcCharger: '',
    });

    // Honeypot field: real visitors never see or fill this; bots that
    // auto-fill every input will, so a non-empty value marks the submission as spam.
    const [website, setWebsite] = useState('');
    const formLoadedAt = useRef(Date.now());

    const [machines, setMachines] = useState([emptyMachine()]);
    const [siteInfo, setSiteInfo] = useState(
        SITE_INFO_FIELDS.reduce((acc, field) => ({ ...acc, [field.key]: { response: '', comment: '' } }), {})
    );
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleMachineChange = (index, field, value) => {
        setMachines(prev => prev.map((m, i) => i === index ? { ...m, [field]: value } : m));
    };

    const addMachine = () => setMachines(prev => [...prev, emptyMachine()]);

    const removeMachine = (index) => {
        setMachines(prev => prev.length === 1 ? prev : prev.filter((_, i) => i !== index));
    };

    const handleSiteInfoChange = (key, field, value) => {
        setSiteInfo(prev => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email) {
            toast.error('Please fill in required fields (Full Name and Email)');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/.netlify/functions/quote-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    machines,
                    siteInfo,
                    website, // honeypot
                    formLoadedAt: formLoadedAt.current
                })
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to submit form');
            }

            toast.success('Your quote request has been submitted!');

            setFormData({
                fullName: '',
                companyName: '',
                email: '',
                phone: '',
                origin: '',
                contractOption: '',
                includeTraining: false,
                includeRemoteMonitoring: false,
                includeFastDcCharger: '',
            });
            setMachines([emptyMachine()]);
            setSiteInfo(SITE_INFO_FIELDS.reduce((acc, field) => ({ ...acc, [field.key]: { response: '', comment: '' } }), {}));

        } catch (error) {
            console.error('Error submitting quote request:', error);
            toast.error('Failed to submit quote request. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Navbar mode="dark" />
            <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                <h1 className="text-4xl font-medium text-center mb-4">Request a Quote</h1>
                <p className="text-center text-gray-600 mb-2">
                    Tell us about your machine, site, and service preferences and our team will prepare a tailored quote.
                </p>
                <p className="text-center text-sm text-gray-400 mb-16">
                    Fields marked <Required /> are required.
                </p>

                <form onSubmit={handleSubmit}>
                    {/* Honeypot field for spam bots — hidden from real users */}
                    <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                        <label htmlFor="website">Leave this field blank</label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </div>

                    {/* Contact Information */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <p className="mb-2 font-medium">Full Name <Required /></p>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className={inputClass} required />
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Email Address <Required /></p>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClass} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="mb-2 font-medium">Company <Required /></p>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleInputChange} className={inputClass} required />
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Phone Number <Required /></p>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClass} required />
                            </div>
                        </div>
                    </section>

                    {/* Machine Information */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-medium">Machine Information</h2>
                            <button type="button" onClick={addMachine} className="text-sm font-medium text-[#00CC66] hover:underline">
                                + Add another machine
                            </button>
                        </div>

                        {machines.map((machine, index) => (
                            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-4">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="font-medium text-gray-700">Machine {index + 1}</p>
                                    {machines.length > 1 && (
                                        <button type="button" onClick={() => removeMachine(index)} className="text-sm text-red-500 hover:underline">
                                            Remove
                                        </button>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="mb-2 text-sm font-medium">Make and Model <Required /></p>
                                        <input type="text" value={machine.makeAndModel} onChange={(e) => handleMachineChange(index, 'makeAndModel', e.target.value)} className={inputClass} placeholder="e.g. CAT777" required />
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium">Quantity to Electrify <Required /></p>
                                        <input type="number" value={machine.quantity} onChange={(e) => handleMachineChange(index, 'quantity', e.target.value)} className={inputClass} required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="mb-2 text-sm font-medium">Diesel Consumption (L/hr) <Required /></p>
                                        <input type="text" value={machine.dieselConsumption} onChange={(e) => handleMachineChange(index, 'dieselConsumption', e.target.value)} className={inputClass} required />
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium">Annual Operating Hours (hr/year) <Required /></p>
                                        <input type="text" value={machine.annualOperatingHours} onChange={(e) => handleMachineChange(index, 'annualOperatingHours', e.target.value)} className={inputClass} required />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="mb-2 text-sm font-medium">Typical Cycle Details <Required /></p>
                                        <input type="text" value={machine.cycleDetails} onChange={(e) => handleMachineChange(index, 'cycleDetails', e.target.value)} className={inputClass} placeholder="Utilisation rate, duration of breaks, etc." required />
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm font-medium">Operating Cost /hour <Required /></p>
                                        <input type="text" value={machine.operatingCost} onChange={(e) => handleMachineChange(index, 'operatingCost', e.target.value)} className={inputClass} placeholder="incl. maintenance and operating cost" required />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Site Information */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-medium mb-6">Site Information</h2>
                        <div className="space-y-6">
                            {SITE_INFO_FIELDS.map((field) => (
                                <div key={field.key}>
                                    <p className="mb-2 text-sm font-medium">{field.label} <Required /></p>
                                    <input
                                        type="text"
                                        value={siteInfo[field.key].response}
                                        onChange={(e) => handleSiteInfoChange(field.key, 'response', e.target.value)}
                                        className={inputClass}
                                        placeholder={field.placeholder}
                                        required
                                    />
                                    <input
                                        type="text"
                                        value={siteInfo[field.key].comment}
                                        onChange={(e) => handleSiteInfoChange(field.key, 'comment', e.target.value)}
                                        className={commentInputClass}
                                        placeholder="Add a comment (optional)"
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Type of Service */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-medium mb-6">Type of Service</h2>

                        <div className="mb-6">
                            <p className="mb-2 font-medium">Origin of the Machine <Required /></p>
                            <div className="flex flex-col gap-2">
                                {['Provided by Client', 'Provided by EPCA'].map((opt) => (
                                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700">
                                        <input type="radio" name="origin" value={opt} checked={formData.origin === opt} onChange={handleInputChange} className="w-4 h-4 text-[#00CC66] focus:ring-[#00CC66]" required />
                                        {opt}{opt === 'Provided by Client' ? ' (if client is donating the machine)' : ''}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="mb-2 font-medium">Contract Options <Required /></p>
                            <div className="flex flex-col gap-2">
                                {['Outright Purchase', 'Leasing Agreement - NO CAPEX'].map((opt) => (
                                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700">
                                        <input type="radio" name="contractOption" value={opt} checked={formData.contractOption === opt} onChange={handleInputChange} className="w-4 h-4 text-[#00CC66] focus:ring-[#00CC66]" required />
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6 space-y-3">
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" name="includeTraining" checked={formData.includeTraining} onChange={handleInputChange} className="w-4 h-4 rounded text-[#00CC66] focus:ring-[#00CC66]" />
                                Include Training
                            </label>
                            <label className="flex items-center gap-2 text-sm text-gray-700">
                                <input type="checkbox" name="includeRemoteMonitoring" checked={formData.includeRemoteMonitoring} onChange={handleInputChange} className="w-4 h-4 rounded text-[#00CC66] focus:ring-[#00CC66]" />
                                Include Remote Data Monitoring
                            </label>
                        </div>

                        <div className="mb-2">
                            <p className="mb-2 font-medium">Include Fast DC Charger <Required /></p>
                            <div className="flex gap-6">
                                {['Yes', 'No'].map((opt) => (
                                    <label key={opt} className="flex items-center gap-2 text-sm text-gray-700">
                                        <input type="radio" name="includeFastDcCharger" value={opt} checked={formData.includeFastDcCharger === opt} onChange={handleInputChange} className="w-4 h-4 text-[#00CC66] focus:ring-[#00CC66]" required />
                                        {opt}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </section>

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
                            'Submit Quote Request'
                        )}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
