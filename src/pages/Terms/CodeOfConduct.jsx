import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CodeOfConduct() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar mode="dark" />
            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                    <h1 className="text-4xl font-medium text-center mb-8">EPCA SUPPLIER CODE OF CONDUCT</h1>
                    <div className="flex justify-center mb-8">
                        <a 
                            href="https://epca-terms-and-conditions.s3.ap-southeast-2.amazonaws.com/EPCA+SUPPLIER+CODE+OF+CONDUCT.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-50 hover:bg-gray-200 text-gray-600 font-medium py-2 px-6 rounded-md border border-gray-300 transition-colors duration-200"
                        >
                            Download PDF
                        </a>
                    </div>
                    
                    <div className="mb-12">
                        <p className="text-gray-600 mb-6">EPCA is committed to upholding the highest ethical business practices and behaviours, delivering quality and excellence in everything we do, and building a safe, productive and enjoyable workplace for all associated with the EPCA supply chain. EPCA recognises that purchasing decisions based on cost alone can have a detrimental social, economic and environmental impact. The Supplier Code of Conduct is built on EPCA's values and sets out expectations and standards for all suppliers.</p>
                    </div>

                    {/* Health, Safety & Quality */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">HEALTH, SAFETY & QUALITY</h2>
                        <p className="text-gray-600"><strong>The safety and wellbeing of people comes first:</strong> Suppliers must prevent workplace injuries and provide a safe working environment for all employees and contractors. EPCA believe all injuries are preventable and expects individuals and leaders at all levels to take responsibility for the management of health and safety risks that are present in the workplace.</p>
                    </div>

                    {/* Human Rights & Modern Slavery */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">HUMAN RIGHTS & MODERN SLAVERY</h2>
                        <p className="text-gray-600 mb-4"><strong>EPCA is committed to respecting internationally recognized human rights principles throughout its operations.</strong> EPCA opposes slavery in all its forms and is committed to providing a value chain that is free from all forms of modern slavery. This expectation extends to the entire EPCA value chain.</p>
                        <p className="text-gray-600"><strong>Suppliers must uphold the internationally recognised human rights principles</strong> and shall not engage in, or deal with any supplier known to engage in, any form of modern slavery practice.</p>
                    </div>

                    {/* Employee Compensation */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">EMPLOYEE COMPENSATION</h2>
                        <p className="text-gray-600">Suppliers shall compensate their workers with wages and benefits that meet or exceed the legally required minimum remuneration for jurisdictions in which they operate.</p>
                    </div>

                    {/* Bullying, Harassment, Sexual Harassment and Discrimination */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">BULLYING, HARASSMENT, SEXUAL HARASSMENT AND DISCRIMINATION</h2>
                        <p className="text-gray-600 mb-4">EPCA is committed to eliminating discriminatory or predatory practices in its supply chain, as well as introducing measures which allow society equal opportunities in employment.</p>
                        <p className="text-gray-600">Suppliers are to provide a work environment that is free from bullying, harassment, sexual harassment, victimisation, discrimination, and other inappropriate behaviour.</p>
                    </div>

                    {/* Environment, Sustainability, and Governance */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">ENVIRONMENT, SUSTAINABILITY, AND GOVERNANCE</h2>
                        <p className="text-gray-600 mb-4">EPCA recognises the responsibility we have to protect the earth's natural environment for the benefit of this and future generations.</p>
                        <p className="text-gray-600">Suppliers must comply with all environmental regulations and have ability to demonstrate their management of environmental impacts with respect to energy and greenhouse gas emissions, water, waste, hazardous materials, air emission and chemicals.</p>
                    </div>

                    {/* Fraud, Corruption, Competition, and Crime */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">FRAUD, CORRUPTION, COMPETITION, AND CRIME</h2>
                        <p className="text-gray-600 mb-4">EPCA is committed to the principles of free and fair competition, acting ethically, and takes a zero tolerance approach to fraud, bribery, corruption, and crime. EPCA prohibits accepting or offering gifts, favours, or entertainment that obligate, or appear to obligate, preferential treatment or influence the decision making process.</p>
                        <p className="text-gray-600">Suppliers shall comply with all applicable laws and regulations in Australia and within all jurisdictions in which they operate, and must not be associated with any organised crime, terrorism, corruption, bribery, insider trading, or fraud.</p>
                    </div>

                    {/* Privacy and Confidentiality */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">PRIVACY AND CONFIDENTIALITY</h2>
                        <p className="text-gray-600 mb-4">EPCA forbids the sharing of commercially sensitive or undisclosed information. All information, such as pricing, capacity, production, costs, contract negotiations, intellectual property, or commercial strategies must be treated in the strictest confidence, only used for the purpose for which it was provided and held securely.</p>
                        <p className="text-gray-600">Suppliers are to comply with all privacy and data protection laws, regulations, and <a href="https://www.epca.net.au/terms/" className="text-blue-600 hover:underline">EPCA's policies</a> for handling private and sensitive Information.</p>
                    </div>

                    {/* Conflict of Interest */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">CONFLICT OF INTEREST</h2>
                        <p className="text-gray-600 mb-4">Suppliers must not engage in activities that create, or appear to create, conflict between the supplier's interests and the interests of EPCA.</p>
                        <p className="text-gray-600">Suppliers have an obligation to report all business, professional, and personal interests that would conflict with or impact in any manner or degree with EPCA dealings.</p>
                    </div>

                    {/* Remediation */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">REMEDIATION</h2>
                        <p className="text-gray-600 mb-4">EPCA has implemented a third-party service to facilitate the reporting of unethical, unacceptable, unlawful or inappropriate behaviour. This service provides an independent, external reporting channel to disclose actual and suspected activities covered by this Supplier Code of Conduct.</p>
                        <p className="text-gray-600">Email: <a href="mailto:clayton.franklin@epca.net.au" className="text-blue-600 hover:underline">clayton.franklin@epca.net.au</a></p>
                    </div>

                    <p className="text-gray-600 italic mt-8">We acknowledge the Traditional Custodians of Country throughout Australia. We pay our respect to them, and to Elders past and present.</p>
                </div>
            </div>
            <Footer />
        </>
    );
}