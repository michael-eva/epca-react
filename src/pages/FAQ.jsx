import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQ() {
    const [openItems, setOpenItems] = useState(new Set());
    const [searchTerm, setSearchTerm] = useState('');

    const toggleItem = (index) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(index)) {
            newOpenItems.delete(index);
        } else {
            newOpenItems.add(index);
        }
        setOpenItems(newOpenItems);
    };

    const faqData = [
        { 
            question: "What is EPCA?",
            answer: "Electric Power Conversions Australia (EPCA) designs and supplies battery-electric powertrain systems to retrofit diesel mining equipment. We tested our 100-ton electric truck at our private mine site for over six months."
        },
        {
            question: "What mining equipment can be electrified?",
            answer: "We currently support retrofits for:\n• 100-ton: CAT 777 & Komatsu 785\n• 150-ton: CAT 785 & Komatsu HD1500\n• Wheel loaders: CAT 988 and CAT 992\n\nOur systems are modular and scalable, and we can provide fixed price quotes to help your clients budget capital ahead of time."
        },
        {
            question: "Can you convert larger trucks?",
            answer: "Not yet. Current battery energy density limits the feasibility of larger platforms."
        },
        {
            question: "Is this approved by Original Manufacturers?",
            answer: "No — EPCA operates independently of OEMs. We retrofit used trucks that are out of warranty, preserving structural integrity and around 80% of original components."
        },
        {
            question: "Are electric trucks safe for mining?",
            answer: "Yes. Our systems meet all mining safety standards, with SIL2-rated controllers, active thermal monitoring, and real-time diagnostics."
        },
        {
            question: "Do you offer training?",
            answer: "Yes. We provide 3 training modules for operators, maintenance, and management teams. Training runs for 3 days and can be delivered globally."
        },
        {
            question: "How long does the 100-ton truck operate per charge?",
            answer: "Typical runtime is 6–7 hours per charge, with top-ups during operator breaks. Longer runtime can be achieved by using the higher capacity battery packs upon request."
        },
        {
            question: "What happens if a battery overheats or fails?",
            answer: "Each truck includes:\n• Advanced thermal management\n• Cell-level BMS\n• Remote shutdown\n• Remote diagnostics\n\nFaulty packs can be disconnected and replaced at the next maintenance interval."
        },
        {
            question: "What about thermal runaway?",
            answer: "Batteries are encapsulated to contain fires. Damaged packs can be flooded to prevent spread, with enough time to move the truck safely."
        },
        {
            question: "How does EV performance compare to diesel?",
            answer: "EV trucks outperform diesel in cycle time, especially on ramps, due to higher rimpull and consistent torque. We design our E-Powertrains to match the performance of the original diesel machines."
        },
        {
            question: "How long does the conversion process take?",
            answer: "About 7 weeks, once all equipment is on site. The process requires 1 heavy diesel fitter, 1 boilermaker, 1 auto-electrician, and 1 trade assistant."
        },
        {
            question: "What does the client need to purchase?",
            answer: "The retrofit kit from EPCA. Other items (batteries, motors, inverters, chillers) can be sourced independently from our supplier list to reduce cost."
        },
        {
            question: "Who commissions the truck?",
            answer: "An EPCA engineer will travel to the site and handle final commissioning."
        },
        {
            question: "How is the truck charged?",
            answer: "Using a DC charger — either:\n• Supplied by EPCA\n• Any existing CCS2 / MSC charger (must be checked for compatibility)"
        },
        {
            question: "How is the truck monitored?",
            answer: "The screen located in the cab displays all the information regarding the truck’s health. EPCA offers remote monitoring and performance reports as a service."
        },
        {
            question: "What about the charging infrastructure?",
            answer: "Charging a 100-ton truck requires an 1.5MWh charger (830VDC) with CCS2 or MCS connectors. EPCA can supply or assist with charger planning."
        },
        {
            question: "Can clients avoid CAPEX?",
            answer: "Yes. The electric powertrain can be leased."
        },
        {
            question: "Why not just buy a new EV truck?",
            answer: "Clients already own diesel trucks and know how to maintain them. EPCA retrofits are more reliable, robust, and deliver higher payload than most existing EV truck models."
        },
        {
            question: "Is an NDA required?",
            answer: "No NDA is required to engage with EPCA."
        },
        {
            question: "Who maintains the trucks?",
            answer: "Your team does he minor maintenance, with training from EPCA, while EPCA handles the major maintenance. We also provide 24/7 tech support from Australia and remote diagnostics."
        },
        {
            question: "What about spare parts?",
            answer: "We keep stock of key parts in WA or via local distributors. Most components are standard. Critical systems are redundant, so the truck can operate even if one fails."
        },
        {
            question: "What data is collected?",
            answer: "We log energy usage, run time, temperature, faults, and more to support predictive maintenance and optimisation."
        },
        {
            question: "Can we integrate autonomy or fleet management?",
            answer: "Yes. We're compatible with systems like Autonomous Knight, SafeAI, and EACON."
        },
        {
            question: "How does this help with ESG goals?",
            answer: "Replaces diesel = immediate Scope 1 emissions removed. Also reduces particulate exposure. All systems include data for reporting and validation."
        },
        {
            question: "Can we do a demo before scaling?",
            answer: "Yes. EPCA offers demonstration programs depending on your location. Contact us to schedule a trial."
        }
    ];

    const filteredFaqData = faqData.filter(item => 
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Navbar mode="dark" />
            <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                <h1 className="text-4xl font-medium text-center mb-16">Frequently Asked Questions</h1>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 pl-12 pr-4 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] focus:outline-none"
                        />
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    {searchTerm && (
                        <p className="text-center text-gray-600 mt-2">
                            {filteredFaqData.length} result{filteredFaqData.length !== 1 ? 's' : ''} found
                        </p>
                    )}
                </div>

                <div className="space-y-4">
                    {filteredFaqData.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-medium text-gray-900 pr-4">{item.question}</span>
                                <svg
                                    className={`w-5 h-5 text-gray-500 transition-transform ${
                                        openItems.has(index) ? 'rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {openItems.has(index) && (
                                <div className="px-6 pb-4">
                                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {filteredFaqData.length === 0 && searchTerm && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 mb-6">No FAQs found matching "{searchTerm}"</p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="text-[#00CC66] hover:text-[#00b359] font-medium"
                        >
                            Clear search
                        </button>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">Still have questions? Get in touch with our team.</p>
                    <a
                        href="/enquiry?subject=general"
                        className="inline-block px-8 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-md font-medium transition-colors"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}


