import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function BDSMSubscription() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar mode="dark" />
            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                    <h1 className="text-4xl font-medium text-center mb-8">Terms and Conditions for BDSM Software Subscription(s) and Additional Services</h1>
                    <p className="text-gray-500 text-center mb-16">Last updated: November 18, 2022</p>

                    {/* Definitions and Order of Precedence */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">1. Definitions and Order of Precedence</h2>
                        <p className="text-gray-600">1.1. Any capitalised terms have the meaning given in these terms and conditions ("Terms") or in the quote provided by Dealer to Customer for the Battery Diagnostic & System Monitoring (BDSM) Software ("Quote").</p>
                        <p className="text-gray-600">1.2. The Customer may offer to purchase the Software Subscription(s) included in a Quote by issuing a purchase order to the Dealer for an amount equal to the Subscription Fee for the Initial Term.</p>
                        <p className="text-gray-600">1.3. The Dealer may, in its discretion, accept or reject the Customer's offer to purchase the Software Subscriptions.</p>
                        <p className="text-gray-600">1.4. If the Dealer accepts the Customer's offer to purchase, a binding contract ("Agreement") will be formed, comprising the following documents in order of precedence:</p>
                        <ul className="list-none pl-6">
                            <li className="text-gray-600">(a) the Quote, including any Updated Quotes issued in accordance with clause 6.3 and 6.4;</li>
                            <li className="text-gray-600">(b) these Terms including the SEUA referenced in clause 2.4;</li>
                            <li className="text-gray-600">(c) any schedules to the Quote and/or Updated Quote; and</li>
                            <li className="text-gray-600">(d) the relevant purchase order issued by Customer to Dealer for the Subscriptions detailed in the Quote and/or Updated Quote.</li>
                        </ul>
                    </div>

                    {/* BDSM Product Subscriptions */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">2. BDSM Product Subscriptions</h2>
                        <p className="text-gray-600">2.1. The Customer subscribes to the Software for the registered assets ("<b>Assets</b>") located at the mine sites ("<b>Sites</b>") detailed in the Quote and/or Updated Quote for the term specified in clause 2.2 below ("<b>Subscription</b>").</p>
                        <p className="text-gray-600">2.2. The initial term of the Subscription is for the period from the Start Date until the End Date ("<b>Initial Term</b>"), as extended by any renewal in accordance with clause 2.3 below ("<b>Term</b>").</p>
                        <p className="text-gray-600">2.3. At the end of the Initial Term, the Subscription will automatically renew for a further 12 months and will subsequently renew thereafter on the day after each anniversary of the End Date unless terminated in accordance with clause 4.1.</p>
                        <p className="text-gray-600">2.4. The Software is licensed by Electric Power Conversions Australia Pty Ltd ("<b>EPCA</b>"). The Customer expressly agrees to the terms and conditions of the Software End User Agreement and Acceptable Use Policy available at <a href="https://www.epca.net.au/terms/" className="text-blue-600 hover:underline">https://www.epca.net.au/terms/</a> ("<b>SEUA</b>") as updated from time to time. Customer understands and agrees that by issuing a purchase order in accordance with clause 1.2, Customer is expressly entering into the agreement with EPCA as set forth in the SEUA.</p>
                        <p className="text-gray-600">2.5. Notwithstanding anything to the contrary in the Agreement, EPCA is expressly made and intended to be made a third-party beneficiary of the Agreement with respect to the Software and Subscription with full rights and abilities to enforce the same in its entirety. The Customer hereby consents to the Dealer providing the Agreement in its entirety to EPCA.</p>
                        <p className="text-gray-600">2.6. Subject to clause 2.7 below, the Agreement together with the SEUA, constitutes the entire agreement governing the purchase and license of the Software and supersedes all prior representations, agreements, and other understandings, oral or written, between and with respect thereto.</p>
                    </div>

                    {/* Critical Components */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">3. Critical Components</h2>
                        <p className="text-gray-600">3.1. The Customer acknowledges that the Dealer has provided the Customer with a customer requirements document setting out the critical components to be provided by the Customer that are necessary to operate the Software.</p>
                        <p className="text-gray-600">3.2. The Customer must provide the critical components on or before the installation of the Software and maintain the critical components during the Term.</p>
                    </div>

                    {/* Changes to EPCA Subscriptions */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">4. Changes to EPCA Subscriptions</h2>
                        <p className="text-gray-600">4.1. The Customer may terminate:</p>
                        <ul className="list-none pl-6">
                            <li className="text-gray-600">(a) a Subscription(s) with respect to a specific Asset from a Quarterly Date; or</li>
                            <li className="text-gray-600">(b) all Subscription(s) from the end of the current Term,</li>
                        </ul>
                        <p className="text-gray-600">by providing the Dealer with written notice of the Subscription(s)/Asset(s) it intends to terminate not less than thirty (30) days prior to the relevant Quarterly Date or end of the Term (as applicable).</p>
                    </div>

                    {/* Additional Services */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">5. Additional Services</h2>
                        <p className="text-gray-600">5.1. During the Term, EPCA/Dealer will provide the services specified in Annexure to Schedule 2 – EPCA Support Agreement, subject to the terms of that annexure.</p>
                        <p className="text-gray-600">5.2. The Dealer and Customer may agree to provision of additional support services including support, maintenance, training, installation, customisation, implementation, or other services that do not form part of the in 5.1 above ("<b>Additional Services</b>") by either:</p>
                        <ul className="list-none pl-6">
                            <li className="text-gray-600">a) executing a scope of work for such Additional Services; or</li>
                            <li className="text-gray-600">b) by the Customer issuing a Purchase Order for such Additional Services, which may be accepted or rejected by the Dealer in writing.</li>
                        </ul>
                    </div>

                    {/* Fees and Charges */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">6. Fees and Charges</h2>
                        <p className="text-gray-600">6.1. The Subscription Fees are in AUD and indicative only. Subject to clause 6.2, the Subscription Fees are payable by Customer to Dealer quarterly in advance of the following dates ("<b>Quarterly Dates</b>"):</p>
                        <ul className="list-none pl-6">
                            <li className="text-gray-600">a) 1 January;</li>
                            <li className="text-gray-600">b) 1 April;</li>
                            <li className="text-gray-600">c) 1 July; and</li>
                            <li className="text-gray-600">d) 1 October.</li>
                        </ul>
                    </div>

                    {/* Subscription Fee Adjustment */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">7. Subscription Fee Adjustment</h2>
                        <p className="text-gray-600">7.1. If EPCA increases its Subscription pricing for the Software, the Dealer will apply a price increase to the Subscription Fees in accordance with the percentage movement in the EPCA Subscription price from the date of that increase.</p>
                        <p className="text-gray-600">7.2. Dealer may issue a further invoice to the Customer for any increase in the Subscription Fee where the quarterly fees for the relevant Subscription have already been invoiced to the Customer prior to the increase in Subscription Fees taking effect.</p>
                    </div>

                    {/* Termination */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">8. Termination</h2>
                        <p className="text-gray-600">8.1. The Subscription(s) the subject of the Agreement are terminable by Dealer immediately in whole or in part if:</p>
                        <ul className="list-none pl-6">
                            <li className="text-gray-600">a) the Customer is or becomes Insolvent; or</li>
                            <li className="text-gray-600">b) the Customer no longer has a valid license for the use of the Software; or</li>
                            <li className="text-gray-600">c) the Customer materially breaches the Agreement and does not rectify the breach within fourteen (14) days of being notified of it.</li>
                        </ul>
                        <p className="text-gray-600">8.2. On termination or expiration, Customer shall not be entitled to a refund of any Subscription Fees.</p>
                        <p className="text-gray-600">8.3. Clauses 2.9 and 2.10 survive termination or expiry of this Agreement together with any other term which by its nature it intended to do so.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
