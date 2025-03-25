import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

export default function TermsAndConditions() {
    const sections = [
        {
            title: "TERMS AND CONDITIONS",
            links: [
                {
                    title: "Terms and Conditions for the Sale of Goods and Services by EPCA",
                    href: "https://epca.s3.us-east-2.amazonaws.com/terms-and-conditions/EPCA-SALES-OF-GOODS.pdf"
                },
                {
                    title: "Terms and Conditions for the Purchase of Goods and Services by EPCA",
                    href: "https://epca.s3.us-east-2.amazonaws.com/terms-and-conditions/EPCA+Purchase+of+Goods+and+Services.pdf"
                },
                {
                    title: "Terms and Conditions for BDSM Software Subscription(s) and Additional Services",
                    href: "https://epca.s3.us-east-2.amazonaws.com/terms-and-conditions/EPCA+BDSM+Terms+and+Conditions.pdf"
                },
                {
                    title: "BDSM Software End User Agreement",
                    href: "https://epca.s3.us-east-2.amazonaws.com/terms-and-conditions/BDSM+Software+End+User+Agreement.pdf"
                }
            ]
        },
        {
            title: "PRIVACY",
            links: [
                {
                    title: "Privacy Policy",
                    href: "/privacy-policy"
                },
                {
                    title: "Data Governance Statement",
                    href: "https://epca.s3.us-east-2.amazonaws.com/terms-and-conditions/Data+Governance+Statement+Policy.pdf"
                }
            ]
        },
        {
            title: "SUPPLIERS",
            links: [
                {
                    title: "EPCA's Supplier Code of Conduct",
                    href: "https://epca.s3.us-east-2.amazonaws.com/terms-and-conditions/EPCA+Supplier+Code+of+Conduct.pdf"
                }
            ]
        }
    ];

    return (
        <>
            <Navbar mode="dark" />
            <div className="min-h-screen bg-white">
                {/* Hero Section */}
                <div className="relative h-[40vh] bg-gray-100 flex items-center justify-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-4xl font-bold text-center mb-4">
                            Terms and Conditions
                        </h1>
                        <p className="text-gray-600 text-center">
                            Important legal documents and policies
                        </p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="space-y-16">
                        {sections.map((section, index) => (
                            <div key={index} className="space-y-6">
                                <h2 className="text-2xl font-bold">{section.title}</h2>
                                <div className="grid gap-4">
                                    {section.links.map((link, linkIndex) => (
                                        <Link
                                            key={linkIndex}
                                            to={link.href}
                                            className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-gray-900">{link.title}</span>
                                                <svg 
                                                    className="w-5 h-5 text-gray-400" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path 
                                                        strokeLinecap="round" 
                                                        strokeLinejoin="round" 
                                                        strokeWidth={2} 
                                                        d="M9 5l7 7-7 7" 
                                                    />
                                                </svg>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Note Section */}
                    <div className="mt-16 p-6 bg-gray-50 border-l-4 border-[#00CC66] rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Important Note</h3>
                        <p className="text-gray-600">
                            Please review these documents carefully. By using our services, you agree to be bound by the terms and conditions contained in these documents.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
