import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function DataGovernance() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar mode="dark" />
            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                    <h1 className="text-4xl font-medium text-center mb-8">Data Governance Statement</h1>
                    <p className="text-gray-500 text-center mb-16">Last updated: March 2024</p>
                    <div className="flex justify-center mb-8">
                        <a 
                            href="https://epca-terms-and-conditions.s3.ap-southeast-2.amazonaws.com/EPCA+DATA+GOVERNANCE+-+PUBLISHED.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-50 hover:bg-gray-200 text-gray-600 font-medium py-2 px-6 rounded-md border border-gray-300 transition-colors duration-200"
                        >
                            Download PDF
                        </a>
                    </div>

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-gray-600">This Data Governance Statement ("<b>Statement</b>") describes the practices Electric Power Conversions Australia Pty Ltd ("<b>We</b>", "<b>Us</b>", "<b>Our</b>" or "<b>EPCA</b>") uses to collect information from each of our customers relating to machines, products or other assets and their associated worksites (collectively "<b>Assets</b>"). As used in this Statement, "<b>you</b>" means you individually and, as applicable, the company or entity you represent and each of its employees, agents and representatives. You should regularly review this Statement carefully to understand what information we receive, generate and transmit—and what we do with that information. By providing the information detailed in Section 1 to us or continuing to purchase goods and services from us, you agree to the terms and conditions of this Statement, including our collection, use and sharing of that information.</p>
                    </div>

                    {/* What information we may collect */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">1. What Information We May Collect</h2>
                        <p className="text-gray-600">We collect the following information from you:</p>
                        <p className="text-gray-600">"<b>Personal Information</b>" which is any information about a specific individual or that identifies or may identify a specific individual, as further described in our Privacy Policy. However, nothing in this Statement is intended to modify our Privacy Policy or any applicable privacy notices, and our <a href="https://www.epca.net.au/privacy/" className="text-blue-600 hover:underline">Privacy Policy</a> takes precedence over this Statement.</p>
                        
                        <p className="text-gray-600">"<b>System Data</b>" which is information that is ingested or used by or generated through Devices and Applications (defined in section 2 below) or from work tools or other peripheral devices attached to Assets, including but not limited to:</p>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-600">Device, Asset and component information, including performance and configuration data.</li>
                            <li className="text-gray-600">Electronic Data from electronic data files downloaded manually or automatically from an Asset, troubleshooting data, and other data including but not limited to logs, histograms and event data.</li>
                            <li className="text-gray-600">Inspection Data, including results of inspections using an EPCA or third-party inspection system.</li>
                            <li className="text-gray-600">Device Location Information, including the physical location of an Asset (e.g., determined using satellite, GPS, cell phone tower, Bluetooth or Wi-Fi signals).</li>
                            <li className="text-gray-600">Fluid Data, including analysis results of fluid samples (such as oil, hydraulic and coolant fluids) obtained using EPCA or third-party tools.</li>
                            <li className="text-gray-600">Event Recorder Data, including location, speed, direction and associated video recordings, use of controls and positive train control information.</li>
                        </ul>

                        <p className="text-gray-600">"<b>Service and Maintenance History</b>", including but not limited to work orders, history of usage and wear life of a component, maintenance schedules, service intervals (scheduled intervals for planned maintenance of component replacement activities for an Asset), component lists (lists of parts that make up an Asset) and service letters (describing special service actions recommended by EPCA to correct a known problem with an Asset).</p>
                        
                        <p className="text-gray-600">"<b>Site and Environmental Conditions</b>", including the type of work being done, condition of roads or tracks, altitude, climate and material tracking.</p>
                        
                        <p className="text-gray-600">"<b>Patterns of Use</b>", including any user-defined information relating to a product you provide to us through Devices and Applications (together, "<b>Digital Offerings</b>").</p>
                        
                        <p className="text-gray-600">"<b>Operations Data</b>" which is additional information we may collect, including but not limited to Personal Information relating to each customer and their employees, work data, invoicing and work order data, store hierarchy data and dealer component data (relating to management and replenishment of parts inventory, and customer purchases, returns and replacements).</p>
                        
                        <p className="text-gray-600">Information collected by us may simultaneously constitute System Data, Personal Information, and Operations Data, or any combination thereof. If you submit any System Data, Operations Data, or Personal Information, including System Data that may relate to Devices on Assets that are not manufactured by EPCA or modified by us, you represent that you have the authority to do so and to permit us to use the information in accordance with this Statement.</p>
                    </div>

                    {/* How we may collect information */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">2. How We May Collect Information</h2>
                        <p className="text-gray-600">We may collect information in a variety of ways through online and offline means, including:</p>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-600"><b>Through Devices</b>: We may receive information via cellular or satellite link, or radio or Ethernet connection from Assets equipped with telematics or other devices (whether manufactured by us, EPCA or by other companies) ("<b>Device</b>"), which may include System Data (such as information relating to the Device or Asset) or Personal Information (such as from information generated by fatigue monitoring devices, on-board camera and proximity detection systems, and in-cab monitoring technology). Some information may be collected automatically, such as fault codes, hours of operation and fuel levels.</li>
                            <li className="text-gray-600"><b>Through Applications and Online</b>: We may collect information through applications and platforms for use on or through computers, APIs, and mobile devices ("<b>Applications</b>") (e.g., when you enter maintenance information) or when you use our websites, online services or platforms. We may also receive information through other online means, such as when you initiate a data transmission through on-site servers or email inspection information to us. We may also collect information typically collected through websites and mobile applications, such as browser and device information, application usage data, information collected through cookies, pixel tags and other technologies, IP addresses and location information.</li>
                            <li className="text-gray-600"><b>Offline</b>: We may collect information when you interact with us, attend one of our trade shows, place an order or contact customer service.</li>
                            <li className="text-gray-600"><b>From Component Manufacturers and Original Equipment Manufactures</b> ("<b>OEM</b>"): We may obtain System Data from manufacturers of the components in your Assets or of Assets manufactured by others you use. This information may be provided to us automatically.</li>
                            <li className="text-gray-600"><b>Through Wearable Technology</b>: We may collect information through wearable technology, such as fatigue monitoring devices or RFID tags embedded in hard hats or safety vests.</li>
                            <li className="text-gray-600"><b>From Asset Owners and Others</b>: We may receive additional information from Asset owners, operators and other persons who have management responsibility for an Asset.</li>
                            <li className="text-gray-600"><b>From Other Sources</b>: We may receive your information from other sources, such as public databases, joint marketing partners, social media platforms (including from people with whom you are friends or are otherwise connected) and from other third parties. We may collect or generate information from troubleshooting data, from your service providers (such as fluid analysts and site inspectors) or from maintenance, inspection or warranty records.</li>
                        </ul>
                    </div>

                    {/* How we may use information */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">3. How We may Use Information</h2>
                        <p className="text-gray-600">We may use collected information to provide services to you and others for the following purposes:</p>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-600">To allow you or us to monitor the status of Assets, to provide you use of Applications, to complete and fulfil purchases, and communicate with you regarding your purchase or rental and provide you with related customer service.</li>
                            <li className="text-gray-600">To fulfill customer support agreements, perform maintenance and repairs and deliver rental Assets or parts, and manage our relationship with you.</li>
                            <li className="text-gray-600">To make recommendations regarding safety, Asset health, maintenance, worksite efficiency and productivity training for operators.</li>
                            <li className="text-gray-600">To enhance the safety of machine operations, including by tracking proximity to Assets, other objects or humans.</li>
                            <li className="text-gray-600">To enable remote technician services, such as remote troubleshooting and remote flashing.</li>
                            <li className="text-gray-600">To provide you with location-based services and content.</li>
                            <li className="text-gray-600">To enable communications.</li>
                            <li className="text-gray-600">To manage the connection to the Asset or Device.</li>
                            <li className="text-gray-600">To allow you and other users of Applications to communicate with each other through Applications.</li>
                            <li className="text-gray-600">To send administrative or contractual information, for example, information regarding the terms and conditions of using Digital Offerings, warranty policies or service contracts.</li>
                            <li className="text-gray-600">To provide you with information about new products and services and to send you marketing communications that we believe may be of interest to you.</li>
                            <li className="text-gray-600">For additional uses as agreed by you and us.</li>
                        </ul>
                        <p className="text-gray-600">With respect to audiovisual data that identifies an individual or physiological data for an identifiable individual, we will use that data only to provide products and services to our customers, including to make recommendations regarding safety, Asset health, maintenance, worksite efficiency and productivity training for operators, and to improve our products and services.</p>
                    </div>

                    {/* How we may disclose information */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">4. How We may Disclose Information</h2>
                        <p className="text-gray-600">We may disclose information:</p>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-600">To the entities directly or indirectly controlling, controlled by or under common control with us ("<b>Affiliates</b>") for the purposes described in this Statement.</li>
                            <li className="text-gray-600">To EPCA, the entities it directly or indirectly controls and any of their service providers or consultants anywhere in the world for the purposes described in this Statement.</li>
                            <li className="text-gray-600">To Asset owners, to permit them to manage their use of their Asset.</li>
                            <li className="text-gray-600">To our and EPCA's service providers anywhere in the world who provide services such as data analytics, information technology and related infrastructure provision, application development, platform hosting, customer service, product development, auditing, advisory and other services.</li>
                            <li className="text-gray-600">To component manufacturers, to permit them to study the use of their products, to improve their products and to develop new products.</li>
                            <li className="text-gray-600">To agents, service providers, or other third parties contracted by or engaged in business with Asset owners, who have management responsibility for the Asset.</li>
                            <li className="text-gray-600">To a third party in the event of reorganisation, merger, sale, joint venture, assignment, transfer or other disposition of all or any portion of our or any of our Affiliate's business, Assets or stock (including in connection with any bankruptcy or similar proceedings).</li>
                            <li className="text-gray-600">To make data available consistent with this Statement through internal EPCA systems, EPCA Inc. systems or other similar APIs.</li>
                            <li className="text-gray-600">To additional recipients as agreed by you and us.</li>
                        </ul>
                        <p className="text-gray-600"><b>Location Data</b>: We may share location information internally or directly with the OEM (including EPCA) to enable them to provide you with localised content and services. In some instances, you may be permitted to allow or deny such uses and/or sharing of your Device's location, but if you do, we may not be able to provide you with the applicable services and content.</p>
                        <p className="text-gray-600">We may use or disclose information as we believe to be necessary or appropriate: (a) under applicable law, including laws outside your country of residence; (b) to comply with legal process; (c) to respond to lawful requests from public and government authorities, including public and government authorities outside your country of residence; (d) to enforce our terms and conditions; (e) to protect our operations or those of any of the OEM; (f) to protect our rights, privacy, safety or property or that of the OEM (including EPCA Inc.), you or others, including for purposes of information security; and (g) to allow us to pursue available remedies or limit the damages that we may sustain.</p>
                        <p className="text-gray-600"><b>De-identified or Aggregated Information</b>: We may use and disclose de-identified or aggregated information (i.e.), information that does not identify your or any other user of the Digital Offerings) for any purpose, except where we are required to do otherwise under applicable law.</p>
                    </div>

                    {/* Remote services and updates */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">5. Remote Services and Updates</h2>
                        <p className="text-gray-600">Depending on your Device and Asset configuration, we may use System Data to remotely:</p>
                        <ul className="list-disc pl-6">
                            <li className="text-gray-600">Examine and update Devices that we provide (e.g., to update system settings or to manage the communications carriers used to connect to EPCA).</li>
                            <li className="text-gray-600">Facilitate updates to the software that controls machine operations for your EPCA Asset.</li>
                        </ul>
                    </div>

                    {/* Security */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">6. Security</h2>
                        <p className="text-gray-600">We use reasonable organisational, technical and administrative measures designed to protect information within our organisation. Unfortunately, no data transmission or storage system can be guaranteed to be 100% secure. If you have reason to believe that your interaction with us is no longer secure (for example, if you feel that the security of your account has been compromised), please immediately notify us in accordance with the "Contacting Us" section below.</p>
                    </div>

                    {/* Other important information */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">7. Other Important Information</h2>
                        <p className="text-gray-600"><b>Third Party Content</b>: This Statement does not address, and we are not responsible for (i) the privacy, information or other practices of any third party operating any website or online service to which a Digital Offering links (e.g., our Applications may include, for your convenience, a hyperlink to local weather information provided by a third party with whom we have no business relationship) and (ii) Personal Information controlled by a third party, such as a supplier, service provider, or customer, even if such Personal Information is collected or otherwise processed by us. Further, the inclusion of a link in a Digital Offering does not imply endorsement of the linked site or service by us.</p>
                        <p className="text-gray-600"><b>Cross Border Transfers</b>: Your information may be stored and processed in any country where our and our OEM's service providers operate, and by using a Digital Offering or otherwise providing data to us consistent with this Statement, you consent to the transfer of information to countries outside of your country of residence which may have data protection rules that are different from those of your country.</p>
                    </div>

                    {/* Updates to this data governance statement */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">8. Updates To This Data Governance Statement</h2>
                        <p className="text-gray-600">This Statement may be updated at any time and the updated version will become effective at the time it is released by us. Your use of Digital Offerings following these changes means that you accept the revised Statement.</p>
                    </div>

                    {/* Contacting us */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">9. Contacting Us</h2>
                        <p className="text-gray-600">If you have any questions about this Statement, please contact us at: <a href="mailto:clayton.franklin@epca.net.au" className="text-blue-600 hover:underline">clayton.franklin@epca.net.au</a>.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}