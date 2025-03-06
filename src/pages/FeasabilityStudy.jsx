import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function FeasabilityStudy() {    
    const [fleetSize, setFleetSize] = useState('');
    const [vehicleTypes, setVehicleTypes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log({ fleetSize, vehicleTypes });
    };

    return (
        <>
            <Navbar mode="dark" />
            <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                <h1 className="text-4xl font-medium text-center mb-16">Fleet Conversion Feasibility Study</h1>
                
                {/* Introduction Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-medium mb-6">Request a Feasibility Study</h2>
                    <p className="mb-6 text-gray-600">
                        Let our experts analyze your fleet and provide a comprehensive study on converting to electric vehicles. We'll assess costs, benefits, and implementation strategies tailored to your needs.
                    </p>

                    {/* Important Notes */}
                    <div className="bg-gray-50 border-l-4 border-[#00CC66] p-5 rounded-lg mb-8">
                        <h3 className="text-lg font-medium mb-3">Study Overview:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-[#00CC66] mr-2">•</span>
                                <span>Detailed cost analysis and ROI projections</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00CC66] mr-2">•</span>
                                <span>Infrastructure requirements assessment</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00CC66] mr-2">•</span>
                                <span>Environmental impact evaluation</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#00CC66] mr-2">•</span>
                                <span>Implementation timeline and recommendations</span>
                            </li>
                        </ul>
                    </div>

                    {/* Fleet Information Section */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-medium mb-6">Fleet Information</h2>
                        <div className="grid grid-cols-1 gap-6 mb-8">
                            <div>
                                <p className="mb-2 font-medium">Fleet Size</p>
                                <input 
                                    type="number" 
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                    value={fleetSize}
                                    onChange={(e) => setFleetSize(e.target.value)}
                                    placeholder="Number of vehicles"
                                />
                            </div>
                            <div>
                                <p className="mb-2 font-medium">Vehicle Types</p>
                                <textarea 
                                    className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                                    value={vehicleTypes}
                                    onChange={(e) => setVehicleTypes(e.target.value)}
                                    placeholder="Describe your current fleet vehicles (types, models, etc.)"
                                    rows={4}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Contact Information Section - Similar to Test Drive page */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                        {/* Copy the contact form structure from Test-Drive.jsx */}
                        {/* ... Contact form fields ... */}
                    </section>

                    {/* Test Drive Link */}
                    <div className="mb-8 bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-lg font-medium mb-3">Interested in testing our vehicles?</h3>
                        <p className="mb-4 text-gray-600">
                            Schedule a test drive of our E-777D to experience the future of electric vehicles firsthand.
                        </p>
                        <Link 
                            to="/test-drive"
                            className="inline-block px-6 py-2 bg-[#00CC66] hover:bg-[#00b359] text-white font-medium rounded-md transition-colors"
                        >
                            Schedule Test Drive
                        </Link>
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="w-full md:w-auto md:px-16 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white font-medium rounded-md transition-colors"
                        onClick={handleSubmit}
                    >
                        Request Feasibility Study
                    </button>
                </section>
            </div>
            <Footer />
        </>
    );
}
