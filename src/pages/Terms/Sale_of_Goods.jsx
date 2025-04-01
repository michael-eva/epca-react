import React, { useEffect } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SaleOfGoods() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar mode="dark" />
            <div className="min-h-screen bg-white">
                <div className="max-w-4xl mx-auto px-4 py-16 mt-12">
                    <h1 className="text-4xl font-medium text-center mb-8">
                        Terms And Conditions For The Sale Of Goods And Services by Epca (Excluding Rentals)
                    </h1>
                    <p className="text-gray-500 text-center mb-16">Last updated: November 18, 2022</p>

                    {/* Section 1: General */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">1. GENERAL</h2>
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                1.1. All new and used vehicles, machinery, plant and equipment (excluding rentals), 
                                materials, consumables, software, hardware, components and parts (including 
                                remanufactured and rebuilt parts) (<b>Goods</b>) and all labour in connection 
                                with such Goods or other services (<b>Services</b>) sold or supplied to you 
                                (the <b>Customer</b>) by EPCA Pty Ltd ACN 668 121 962 or its related entities 
                                (<b>EPCA</b>) is or are supplied on these terms and conditions (<b>Terms</b>).
                            </p>
                        </div>
                    </section>

                    {/* Section 2: The Contract */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">2. THE CONTRACT</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p className="mb-4">2.1 Until EPCA has accepted an Order in accordance with clause 2.3 of these Terms:</p>
                                <div className="ml-6 space-y-4">
                                    <div>
                                        <p className="mb-2">(a) any quotation, estimate or price prepared or represented by EPCA (<b>Quote</b>) is:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) indicative only;</p>
                                            <p>(ii) not an offer to contract; and</p>
                                            <p>(iii) only valid for 14 days;</p>
                                        </div>
                                    </div>
                                    <p>(b) no Order by the Customer to EPCA following a Quote will by itself or in association with a Quote bind EPCA; and</p>
                                    <p>(c) all Quotes prepared by EPCA may be withdrawn or varied by EPCA prior to acceptance.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p className="mb-4">2.2 If the Customer:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) requests or orders Goods or Services from EPCA; and</p>
                                    <p>(b) that Order is consistent with a Quote, (an <b>Order</b>) the Customer offers to contract with EPCA on the basis of the Order and the Quote.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p className="mb-4">2.3 EPCA accepts and is deemed to have accepted an Order under clause 2.3 of these Terms:</p>
                                <div className="ml-6 space-y-4">
                                    <div>
                                        <p className="mb-2">(a) for new and used vehicles, machinery, plant and equipment on the earlier of:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) when notification of acceptance is provided by EPCA to the Customer; and</p>
                                            <p>(ii) 7 days after EPCA receives an Order and does not dispute it or any part of it.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-2">(b) for any other Goods or Services on the earlier of:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) when those Goods are delivered to the Customer or the Services are completed by EPCA;</p>
                                            <p>(ii) when notification of acceptance is provided by EPCA to the Customer; and</p>
                                            <p>(iii) 3 days after EPCA receives an Order and does not dispute it or any part of it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p className="mb-4">2.4 Upon acceptance by EPCA under clause 2.3, a Contract comes into existence between EPCA and the Customer incorporating the following documents (together the <b>Contract</b>), listed in order of priority:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) any Quote, invoice or other document of EPCA whether attaching these Terms or not;</p>
                                    <p>(b) any notice of acceptance provided by EPCA in accordance with clause 2.3(a)(i) or 2.3(b)(ii);</p>
                                    <p>(c) these Terms;</p>
                                    <p>(d) any document attached or annexed to these Terms by EPCA; and</p>
                                    <p>(e) the Order placed by the Customer excluding any attached or associated terms and conditions.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: The Price and Payment Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">3. THE PRICE AND PAYMENT TERMS</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>3.1 The rates or prices payable for the Goods and Services, including any deposits, slot fees or advance payments, are as specified in the Contract (the <b>Price</b>).</p>
                            </div>
                            <div className="ml-6">
                                <p>3.2 The Price excludes freight, consumables (including grease, oil, coolant, water, diesel), taxes and duties (including import and customs duties) and any other necessary or incidental items, work or services unless expressly stated in the Contract.</p>
                            </div>
                            <div className="ml-6">
                                <p>3.3 Any costs for any third-party Goods or Services incurred by EPCA (including freight, storage and handling) must be reimbursed by the Customer with a margin (profit and overhead) of 10% on costs to EPCA unless otherwise expressly stated in the Contract.</p>
                            </div>
                            <div className="ml-6">
                                <p>3.4 <b>Payment of deposits, advance payments and slot fees</b>: any applicable deposits, slot fees or other advance payments must be paid and received by EPCA in full, cleared and available funds as a condition precedent to any liability or obligation of EPCA arising under this Contract.</p>
                            </div>
                            <div className="ml-6">
                                <p>3.5 The Customer must pay the Price upfront and in full, in cleared and available funds before any collection or delivery of Goods or the carrying out of any Services (including travel) will take place.</p>
                            </div>
                            <div className="ml-6">
                                <p>3.6 Time is of the essence in relation to payment for Goods and Services. If the Customer fails to pay EPCA any amount when due, EPCA is, without limitation, entitled to payment of interest at 5% per annum above the Reserve Bank of Australia target cash rate in simple interest calculated daily from the time the amount falls due to the extent and for the duration that it remains unpaid.</p>
                            </div>
                            <div className="ml-6">
                                <p>3.7 EPCA may deduct, set off, backcharge or otherwise account for, amounts paid by the Customer against any other amounts owed by the Customer to EPCA or claimed to be owed whether arising under or in connection with this Contract or otherwise.</p>
                            </div>
                            <div className="ml-6">
                                <p>3.8 Payment in foreign currency: where payment relates to imported base machines (but not in-stock or local items) or incidental items related to importation (including freight, handling, duties and taxes), payment is payable at the option of the Customer:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) in the currency invoiced by the third party supplier to EPCA which may be a foreign currency; or</p>
                                    <p>(b) in $AUD as exchanged at the closing RBA rate on the day of arrival of the machine at EPCA; which must be elected by the Customer and notified by the Customer to EPCA within any Order, and if no such election is made or notice given, option (a) above applies.</p>
                                </div>
                            </div>
                            <div className="ml-6">
                                <p>3.9 To the extent that the payment for imported base machines (not in-stock or local items) under clause 4.9 relates to deposits, slot fees or advance payments then:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) if payment is to be made in $AUD under clause 4.9(b), any deposits, slot fees and any other advance payments will be exchanged on payment and reconciled on the day of arrival of the relevant machine at EPCA as if payment was made, and exchanged at the closing RBA rate on that day; or</p>
                                    <p>(b) if payment is to be made in the foreign currency of the third party supplier under clause 4.9(a), payment of any deposits, slot fees or advance payments will also be in the currency of the supplier.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">4. TIME FOR PERFORMANCE</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>4.1 The Customer must ensure that EPCA has access to its site, the relevant work area and equipment as is safe and reasonably necessary for EPCA to supply the Goods and Services.</p>
                            </div>
                            <div className="ml-6">
                                <p>4.2 EPCA will deliver the Goods to the delivery place specified in the Contract during usual business hours, or if no place for the delivery of the Goods is specified:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) EPCA will notify the Customer promptly when the Goods are ready for collection at EPCA; and</p>
                                    <p>(b) the Customer must promptly (and within 48 hours) collect its Goods from the EPCA premises specified in the Contract.</p>
                                </div>
                            </div>
                            <div className="ml-6">
                                <p>4.3 If no place for the carrying out of Services is specified in the Contract, they will be carried out at a location determined by EPCA acting reasonably.</p>
                            </div>
                            <div className="ml-6">
                                <p>4.4 If a date or dates for delivery of the Goods or completion of the Services is specified in the Contract, EPCA will deliver or complete, as the case may be, by those dates.</p>
                            </div>
                            <div className="ml-6">
                                <p>4.5 If no date or dates for delivery or completion are specified in the Contract, EPCA will deliver the Goods and complete the Services with due diligence, expedition and without delay.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">5. DELIVERY AND COMPLETION</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>5.1 The delivery of any Goods is deemed to have occurred when loading of the Goods commences by the Customer (or its carrier) or when the Goods are unloaded at the delivery place by EPCA (or its carrier) (as the case may be).</p>
                            </div>
                            <div className="ml-6">
                                <p>5.2 EPCA will notify the Customer, orally or in writing, promptly when it considers (acting reasonably) that the Services have been completed.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">6. LIMITED WARRANTY</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>6.1 EPCA warrants and the Customer agrees that:</p>
                                <div className="ml-6 space-y-4">
                                    <div>
                                        <p className="mb-2">(a) in relation to <strong>Services</strong>, that for a 12 month period following the date of completion of any of those Services, those Services were carried out and completed with due skill and care, in a proper and workmanlike manner and in accordance with all relevant law;</p>
                                    </div>
                                    <div>
                                        <p className="mb-2">(b) in relation to <strong>new Goods</strong>, that the benefits and obligations of the manufacturer's warranty apply in all respects and is, subject to clause 8, the sole and exclusive remedy for those Goods;</p>
                                    </div>
                                    <div>
                                        <p className="mb-2">(c) In relation to <strong>used or second-hand Goods supplied by EPCA</strong>, except to the extent that a manufacturer's warranty applies (such as for remanufactured components and to which the warranty under clause 6.1(b) applies), clause 8 applies or the Quote specifies that a particular warranty applies:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) all used or second-hand Goods are sold on an as is where is basis with all existing or future inadequacies, faults or defects, if any, whether known or unknown;</p>
                                            <p>(ii) EPCA does not warrant used or second-hand goods to any extent or that they are fit for any purpose or free from any defects;</p>
                                            <p>(iii) EPCA does not warrant the accuracy of machine meter readings, SMU hours or the service and repair history; and</p>
                                            <p>(iv) to the extent permitted by law, the Customer releases EPCA from all liability arising from or in connection with any defects, faults or inadequacies in such Goods.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">7. CONSUMER PROVISIONS</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>7.1 This clause only applies to Customers that are Consumers. A Customer is a Consumer (<strong>Consumer</strong>) if, and only if:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) the Price of the Goods or Services is less than the amount prescribed under the Australian Consumer Law; or</p>
                                    <p>(b) the Goods or Services are of a kind ordinarily acquired for personal, domestic or household use or consumption (irrespective of the Price).</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>7.2 The Goods and Services under this agreement come with guarantees that cannot be excluded under the Australian Consumer Law. For major failures with the Services, you are entitled:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) to cancel your Services Contract with us; and</p>
                                    <p>(b) to a refund for the unused portion, or to compensation for its reduced value.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>You are also entitled to choose a refund or replacement for major failures with Goods. If a failure with the Goods or Services does not amount to a major failure, you are entitled to have the failure rectified in a reasonable time. If this is not done you are entitled to a refund for the Goods and to cancel the Contract for the Services and obtain a refund of any unused portion. You are also entitled to be compensated for any other reasonably foreseeable loss or damage from a failure in the Goods or Services.</p>
                            </div>

                            <div className="ml-6">
                                <p>7.3 Nothing in this agreement is intended to have the effect of excluding any rights under the Australian Consumer Law or other laws which may not be excluded by the Contract (<strong>Non-Excludable Rights</strong>).</p>
                            </div>

                            <div className="ml-6">
                                <p>7.4 Where clause 7.1(b) does not apply, to the maximum extent permitted by Law and notwithstanding clause 8.2, the liability of EPCA in respect of any breach or failure to comply with a Non-Excludable Right is limited to:</p>
                                <div className="ml-6 space-y-4">
                                    <div>
                                        <p className="mb-2">(a) in the case of Goods:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) the replacement of the Goods or the supply of equivalent goods;</p>
                                            <p>(ii) the repair of the Goods;</p>
                                            <p>(iii) the payment of the cost of replacing the Goods or of acquiring equivalent Goods; and</p>
                                            <p>(iv) the payment of the cost of having the Goods repaired.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-2">(b) In the case of Services:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) supplying the Services again; and</p>
                                            <p>(ii) paying the cost of having the Services supplied again.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">8. WARRANTY CLAIM PROCEDURE AND PARTS RETURNS</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>8.1 The Customer <strong>must notify</strong> EPCA of any event or circumstance which may give rise to a warranty claim by <strong>the earlier of</strong>:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) the time expressly required by the manufacturer's warranty for the notification of claims, if any such time applies; or</p>
                                    <p>(b) if no such time applies, within 90 days of the event or circumstance occurring that gave rise to the warranty claim,</p>
                                </div>
                                <p>and in any event, within the relevant warranty period stipulated in clause 6.</p>
                            </div>

                            <div className="ml-6">
                                <p>8.2 If the Customer fails to notify in accordance with clause 8.1, EPCA may, in its sole and absolute discretion, rectify the defect but otherwise has no liability to do so.</p>
                            </div>

                            <div className="ml-6">
                                <p>8.3 To the extent that the Customer makes an invalid warranty claim, it must reimburse EPCA for that work at standard EPCA list rates and prices.</p>
                            </div>

                            <div className="ml-6">
                                <p>8.4 EPCA will consider requests to return parts not forming part of a warranty claim in accordance with the Parts Return Policy available at <a href="https://www.epca.net.au" className="text-blue-600 hover:underline">www.epca.net.au</a>.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">9. DELAY AND DISRUPTION</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>9.1 EPCA is entitled to a reasonable extension of time to supply Goods or Services where it is, or is likely to be, delayed or disrupted in the supply of those Goods or Services due to:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) any fact, event, matter or circumstance beyond EPCA's reasonable control; or</p>
                                    <p>(b) any breach, act or omission of the Customer, its agents or contractors.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>9.2 In the event of 10.1(b), EPCA will also be entitled to:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) all reasonable costs caused by the delay or disruption including holding (capital) costs on unpaid Goods ordered for the Customer at 0.041% per day accruing daily; and</p>
                                    <p>(b) terminate the relevant Order or part thereof where the delay or delays exceed a single or aggregated period of 90 days with the Customer compensating EPCA in accordance with clause 14.2.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">10. VARIATIONS AND EXTRAS</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>10.1 Prior to delivery or completion (as applicable) and subject to clause 10.3, the parties, acting reasonably and in good faith, may agree to add, delete, omit, or change the nature, quality, location or quantity of any Goods or Services (<strong>Variation</strong>). A Variation cannot be used to cancel an Order for a new or used machine.</p>
                            </div>

                            <div className="ml-6">
                                <p>10.2 Any Variation must clearly state the impact on any agreed date for delivery and Price determined as follows:</p>
                                <div className="ml-6 space-y-4">
                                    <p>(a) by agreement between the parties;</p>
                                    <p>(b) in accordance with the Contract rates and prices to the extent reasonably applicable; or</p>
                                    <div>
                                        <p className="mb-2">(c) to the extent that rates and prices in the Contract do not reasonably apply:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) for additions, or changes in nature, quality or location, based on reasonable rates or prices (including profit and overhead of 10% on costs); and</p>
                                            <p>(ii) for deletions or omissions, deducting reasonable rates or prices from the Price including profit but retaining an allowance for overhead of 5% on the original costs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>10.3 Unless otherwise expressly stated in the Contract, EPCA is entitled to unilaterally increase or decrease the rates or prices under the Contract as a Variation in the following circumstances:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) for <strong>Services</strong>, by applying rise and fall proportional to the change in the relevant EPCA employees' salary increase from the date that salary increase takes effect;</p>
                                    <p>(b) for <strong>new machines</strong>, in accordance with any EPCA Pty Ltd or other OEM price changes which may occur from time to time after the date of the Quote;</p>
                                    <p>(c) for <strong>parts and components</strong>, in accordance with the EPCA Pty Ltd or other OEM parts price changes from time to time after the date of the Quote but prior to delivery including on 1 January and 1 July of each year;</p>
                                    <p>(d) to the extent EPCA incurs additional costs due to a change (including in any interpretation or application) in law or Customer policies, processes or procedures that was not reasonably anticipated by EPCA as at the date of Contract; and</p>
                                    <p>(e) to the extent that EPCA incurs any additional costs for encountering any ground conditions on or around the site or relevant work area that could not reasonably have been anticipated by EPCA as at the date of Contract.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">11. RETURNS</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>11.1 If the Customer wishes to return a used component, and exchange it for a new or rebuilt component (including a component that was rebuilt by EPCA (<strong>Parts Exchange</strong>), the replacement part must:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) have the same configuration and consist as the new, Parts Exchange component supplied by EPCA;</p>
                                    <p>(b) be received by EPCA within 30 days of delivery of the corresponding new, Parts Exchange component that was supplied;</p>
                                    <p>(c) be in good and clean condition and comply with EPCA's return conditions (for Parts Exchange);</p>
                                    <p>(d) upon stripping down, be in a condition that is, in EPCA's sole and absolute discretion, suitable for EPCA to carry out a standard rebuild.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>11.2 If the Customer complies with clause 11.1, EPCA will grant the Customer a credit for its returned Core in accordance with its Parts Exchange and rebuild price lists.</p>
                            </div>

                            <div className="ml-6">
                                <p>11.3 If the Customer fails to comply with any of the conditions required by clause 11.1:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) EPCA is entitled to payment of the full list price for the new or rebuilt component supplied to the Customer; and</p>
                                    <p>(b) any credit to be applied for the value of the returned Core will be determined by EPCA acting reasonably.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">12. RISK AND TITLE</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>12.1 Risk in Goods passes upon delivery occurring in accordance with clause 5.1 of these Terms, but passes back in the event of any returned Goods.</p>
                            </div>

                            <div className="ml-6">
                                <p>12.2 Legal and equitable title, property and ownership in any Goods sold or supplied by EPCA under this Contract only passes on receipt of payment by EPCA of the Price in full, cleared funds and without any deduction or set off.</p>
                            </div>

                            <div className="ml-6">
                                <p>12.3 Prior to title passing, EPCA may register a Security Interest under the <em>Personal Property Securities Act 2009</em> (Cth) (<strong>PPSA</strong>) in relation to the Goods and any proceeds arising in respect of any dealing in the Goods.</p>
                            </div>

                            <div className="ml-6">
                                <p>12.4 If the Quote expressly permits the Customer to on-sell any Goods prior to title passing, the Customer may do so in the ordinary course of its business provided that the Customer pays the proceeds into a separate bank account and holds them as trustee for EPCA.</p>
                            </div>

                            <div className="ml-6">
                                <p>12.5 To the extent permitted by law, each party waives its rights or entitlements to any verification statements or other notices or communications that may be necessary, required or desirable under the PPSA.</p>
                            </div>

                            <div className="ml-6">
                                <p>12.6 EPCA shall have a lien over any of the Customer's other goods under EPCA's control for all amounts claimed due and payable to EPCA until payment is received in full, cleared funds without deduction or set-off.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">13. INDEMNITY AND INSURANCE</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>13.1 Subject to clause 16.5, each party indemnifies the other, its employees and agents against losses for physical destruction of or damage to property, death, injury, illness or disease, and if a credit facility applies, any act or omission or breach by the Customer of these Terms, arising out of or in connection with the carrying out its obligations under this Contract, save to the extent caused or contributed to by the other party.</p>
                            </div>

                            <div className="ml-6">
                                <p>13.2 EPCA will effect and maintain, in relation to Services, for the duration of carrying out the Services, and for Goods, while risk in the Goods rests with EPCA:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) a <strong>public liability insurance</strong> policy for at least the amount of <strong>$20,000,000</strong> for any one occurrence;</p>
                                    <p>(b) a <strong>products liability insurance</strong> policy for at least the amount of <strong>$20,000,000</strong> limited in the aggregate during any single term of insurance; and</p>
                                    <p>(c) such insurances as are required by law including workers' compensation insurance.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>13.3 From the time that risk in the Goods transfers to the Customer and continuing until title also transfers in accordance with these Terms, the Customer must insure the Goods with an insurance company with a S&amp;P Financial rating of not less than 'A' for their full replacement value against loss or damage including but not limited to fire, malicious damage, theft and transit risks.</p>
                            </div>

                            <div className="ml-6">
                                <p>13.4 The insurance required under clause 14.3 must cover the respective rights and interests of the Customer and EPCA (as owner), note the interests of EPCA as owner if required by EPCA, and include:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) a cross-liability clause, to the intent that each insured party shall be deemed to be separate insureds under the policy;</p>
                                    <p>(b) an express provision requiring the insurer to notify EPCA if the policy of insurance is not renewed, lapses or is cancelled midterm; and</p>
                                    <p>(c) an acknowledgement from the insurer that in the event of loss or damage to the Goods, all monies derived from any insurance settlement will be used to either repair or replace the Goods. Such determination will be at the sole discretion of EPCA.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>13.5 The Customer must not do or permit or allow to be done anything which might or could prejudice any insurance of the Goods.</p>
                            </div>

                            <div className="ml-6">
                                <p>13.6 Whenever requested by a party, the other party will promptly provide the first party with copies of the certificates of currency for insurances required under this Contract.</p>
                            </div>

                            <div className="ml-6">
                                <p>13.7 If the Customer fails to insure the Goods in accordance with clauses 14.3 and 13.4, EPCA may, but is not obliged to, procure and maintain such insurance and the cost of doing so will be a debt due and immediately payable from the Customer to EPCA.</p>
                            </div>

                            <div className="ml-6">
                                <p>13.8 The Customer must promptly inform EPCA in writing of any event or circumstance that may give rise to a claim under insurance required by clause 13.3 and keep EPCA informed of subsequent developments and take all reasonable steps to ensure a prompt and favourable settlement of the claim.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">14. TERMINATION FOR CAUSE</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>14.1 Either party may terminate the Contract, or any part of it, effective immediately, if the other party:</p>
                                <div className="ml-6 space-y-4">
                                    <p>(a) commits a material breach which is not remedied within fourteen (14) days after written notice from the other party;</p>
                                    <div>
                                        <p className="mb-2">(b) is the subject of an insolvency event meaning:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) the party becomes insolvent or is otherwise unable to pay its debts as and when they fall due;</p>
                                            <p>(ii) proceedings are commenced to appoint an external administrator or liquidator to the party;</p>
                                            <p>(iii) the party is placed under official management or administration;</p>
                                            <p>(iv) the party is presumed to be insolvent under the <em>Corporations Act 2001</em> (Cth) following a statutory demand; or</p>
                                            <p>(v) EPCA notifies the Customer that in EPCA's reasonable opinion, the Customer appears to have an inability to pay and, within 14 days of receiving notice, the Customer does not provide evidence otherwise to EPCA's reasonable satisfaction.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>14.2 If either party terminates under this clause 15 or clause 10.2(b), its rights will be as if the other party had repudiated and the first party elected to treat the Contract as at an end, and in the case of EPCA terminating:</p>
                                <div className="ml-6 space-y-4">
                                    <p>(a) any deposits, slot fees and any other advanced payments paid, or required to be paid, will be forfeited to EPCA;</p>
                                    <div>
                                        <p className="mb-2">(b) the following amounts will immediately become due and payable by the Customer to EPCA:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) the Price of any Goods already delivered and Services (or part thereof) already completed and all other amounts owing to EPCA;</p>
                                            <p>(ii) the Price of any equipment, parts, components, services and materials ordered by EPCA in respect of the Contract which it is liable to accept and cannot reasonably avoid or cancel;</p>
                                            <p>(iii) any costs or losses arising due to the cancellation or termination of third-party contracts including contract break-costs, cancellation fees and necessary redundancies;</p>
                                            <p>(iv) reasonable demobilisation costs and any additional transport, freight, handling, packaging, consumables (fluids), insurance or maintenance costs;</p>
                                        </div>
                                    </div>
                                    <p>(c) EPCA shall immediately be entitled to retake possession of all Goods in the possession or under the control of the Customer not paid for in full; and</p>
                                    <p>(d) if EPCA has installed Goods on a machine which are not paid for in full, take possession of the machine and transport it to EPCA's premises to remove EPCA's Goods.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>14.3 For the purpose of enabling EPCA to retake possession of the Goods or a machine under clause 14.2, the Customer irrevocably:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) authorises EPCA, its employees, officers and appointed subcontractors to enter any of the Customer's premises in which the Goods may be located; and</p>
                                    <p>(b) appoints EPCA, its employees, officers and appointed subcontractors as its agent to enter any premises in which Goods may be located.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">15. LIMITATION OF LIABILITY</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>15.1 (<strong>Limit and overall cap</strong>) Subject to any <strong>Non-Excludable Rights</strong>, the liability of EPCA, if any, arising out of or in connection with the supply of Goods or Services under this Contract, including for negligence, is limited:</p>
                                <div className="ml-6 space-y-4">
                                    <p>(a) in the case of Goods to which a manufacturer's warranty applies or has applied but expired, to that warranty;</p>
                                    <div>
                                        <p className="mb-2">(b) for any other Goods, at the option and in the (reasonable) discretion of EPCA:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) to the replacement of the Goods or the supply of equivalent Goods;</p>
                                            <p>(ii) to the payment of the cost of replacing the Goods or of acquiring equivalent goods; or</p>
                                            <p>(iii) to the repair of the Goods by EPCA or to the payment of the cost of having the Goods repaired; and</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-2">(c) in the case of Services, at the option and in the (reasonable) discretion of EPCA:</p>
                                        <div className="ml-8 space-y-2">
                                            <p>(i) to a refund of the amount paid for the Services; or</p>
                                            <p>(ii) to the supply of the Services again or payment for the cost of having the Services supplied again,</p>
                                        </div>
                                    </div>
                                </div>
                                <p>and in any event and notwithstanding any other provision of this Contract, to an amount in aggregate of all claims up to 100% of the Price.</p>
                            </div>

                            <div className="ml-6">
                                <p>15.2 (<strong>Mutual time limit</strong>) Subject to any Non-Excludable Rights, each party must notify the other of any claim, right, obligation or liability whatsoever arising under or in connection with the Contract within 12 months of when the party claiming was aware or ought reasonably to have been aware of the events or circumstances giving rise to the claim. Any failure to do so, releases the other party from all liability in connection with that claim and its subject matter.</p>
                            </div>

                            <div className="ml-6">
                                <p>15.3 (<strong>Exceptions to limits</strong>) The limitations in clauses 15.1 and 15.2 do not apply in relation to, or limit to any extent, a liability by one party to the other party in relation to the damage or destruction of any property (including third party property), injury, illness, disease or death or breach of IP rights.</p>
                            </div>

                            <div className="ml-6">
                                <p>15.4 (<strong>Consequential loss</strong>) Subject to any <strong>Non-Excludable Rights</strong>, neither party shall be liable to the other party for any consequential, indirect or incidental loss, loss of profits, loss of data, lost production or revenue, loss of anticipated savings, loss of opportunity, increased cost of working, business reputation or damage to goodwill arising from or in connection with its supply under this Contract except for any amounts specifically payable to EPCA in accordance with the Contract.</p>
                            </div>

                            <div className="ml-6">
                                <p>15.5 (<strong>Insurable losses</strong>) The total liability of either party to the other party arising out of or in connection with any damage to or destruction of property (including third party property), death, injury, illness or disease is limited to amounts recoverable, or that should have been recoverable, under the insurance policies required by the Contract and that are in place, or should have been in place.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">16. INTELLECTUAL PROPERTY</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>16.1 In relation to intellectual property (<strong>IP</strong>):</p>
                                <div className="ml-6 space-y-4">
                                    <p>(a) <strong>not created predominantly for the purpose of this Contract</strong>, subject to clause 16.1(b) each party licenses to the other party such IP that it owns or is permitted to license whether coming into existence before or after the date of this Contract, limited to the extent necessary to enable the other party to supply, operate or use the Goods or the Services as the case may be; and</p>
                                    <p>(b) <strong>coming into existence after the date of this Contract and created predominantly for the purpose of it</strong>, ownership vests in and will be the property of EPCA and EPCA licenses such IP that it owns or is permitted to license to the Customer limited to the extent necessary for the Customer to operate or use the Goods or Services.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>16.2 Each party warrants to the other that it is entitled to grant the IP licenses under this clause, and indemnifies the other against any costs or losses in connection with any breach of IP (including any third party IP) arising from or in connection with the supply, operation or use of the Goods or the Services as the case may be, save to the extent caused by the other party.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">17. ANTI-POACHING</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>17.1 While EPCA carries out the Services and for a period of 6 months after completion of the Services, each party is prohibited from employing (meaning as employee, agent, contractor or consultant) any individual of the other party engaged (directly or indirectly) in the Services including to solicit, induce or entice an employee of the other party.</p>
                            </div>

                            <div className="ml-6">
                                <p>17.2 The parties agree that to establish a breach it is only necessary to show that the relevant employee was engaged in the Services by the first party and commenced employment with the second (breaching) party.</p>
                            </div>

                            <div className="ml-6">
                                <p>17.3 If a party breaches this clause, it must pay to the innocent party the equivalent of 6 months of the employee's remuneration (with the first employer) to the other party within 14 days of being notified of the breach.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">18. COMPLAINTS AND DISPUTES</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>18.1 If either party wishes to raise a dispute or difference in connection with the Contract, it must promptly give the other notice in writing (<strong>Dispute Notice</strong>) and within 14 days, the other party must provide its written response to the Dispute Notice stating its position and thereafter:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) within 14 days of that response, the respective involved managers must meet in person at least once to try to resolve the dispute in good faith in a <strong>first meeting</strong>;</p>
                                    <p>(b) failing a resolution within 14 days of the first meeting, within a further 14 days from that meeting, the managing director of the Customer and a General Manager of EPCA must meet in person to try to resolve the dispute in good faith in a second meeting.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">19. CONFIDENTIALITY AND PRIVACY</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>19.1 EPCA respects the privacy of personal information as defined by the <em>Privacy Act 1988</em> (Cth) (<strong>Personal Information</strong>).</p>
                            </div>

                            <div className="ml-6">
                                <p>19.2 The Customer acknowledges, accepts and agrees:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) to EPCA's Privacy Policy available from <a href="http://www.EPCA.net.au/terms" className="text-blue-600 hover:underline">www.EPCA.net.au/terms</a>;</p>
                                    <p>(b) to EPCA's data governance statement available at <a href="https://www.EPCA.net.au/terms" className="text-blue-600 hover:underline">https://www.EPCA.net.au/terms</a>;</p>
                                    <p>(c) that EPCA may obtain and use Personal Information of the Customer and disclose it to its Business Partners; and</p>
                                    <p>(d) that without using such information, EPCA may not be able to properly provide the Goods or the Services.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>19.3 Subject to clause 19.4, neither party may disclose, or allow any person to disclose, confidential information to third parties including:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) the subject matter, correspondence in respect of, and contents of this agreement (but not its actual existence);</p>
                                    <p>(b) information regarding a Customer's machine;</p>
                                    <p>(c) the subject matter and the existence of any dispute or difference; and</p>
                                    <p>(d) the Price and any discounts, rebates or cost saving measures.</p>
                                </div>
                            </div>

                            <div className="ml-6">
                                <p>19.4 The obligations to maintain confidentiality under clause 20 apply except for a disclosure:</p>
                                <div className="ml-6 space-y-2">
                                    <p>(a) permitted with the prior written consent of the other party;</p>
                                    <p>(b) as permitted in accordance with EPCA's data governance statement;</p>
                                    <p>(c) required by law, any stock exchange or court order; or</p>
                                    <p>(d) to the parties' respective consultants, agents, financiers, lawyers and in the case of EPCA, EPCA Pty Ltd, its subsidiaries, affiliates and related parties including agents and contractors (<strong>Business Partners</strong>).</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">20. GOODS AND SERVICES TAX</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>20.1 Unless otherwise stated expressly all prices are exclusive of GST and the Customer must on demand pay to EPCA all GST payable in respect of the supply of the Goods and the Services to the Customer.</p>
                            </div>

                            <div className="ml-6">
                                <p>20.2 EPCA will issue recipient created tax invoices (<strong>RCTI</strong>), and the Customer will not issue tax invoices, in respect of the supply of Cores to EPCA under this Contract.</p>
                            </div>

                            <div className="ml-6">
                                <p>20.3 Each party warrants to the other that it is registered for GST at the date of this Contract and that it will notify the other party if it ceases to be so registered.</p>
                            </div>

                            <div className="ml-6">
                                <p>20.4 EPCA may at its sole discretion, by written notice to the Customer, notify the Customer that EPCA will no longer be issuing RCTIs pursuant to this clause and from the date of that notice the Customer will be responsible for issuing any and all tax invoices in respect of supplies of Cores to EPCA.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">21. LAW AND JURISDICTION</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>The Contract is governed by and will be construed in accordance with the laws of the State in which the EPCA office or depot from which the Goods or Services were ordered, is located.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">22. ENTIRE AGREEMENT</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>The Contract constitutes the entire agreement between the parties relating in any way to its subject matter. All prior negotiations, agreements, communications, understandings and representations about the subject matter of the Contract are of no effect.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-6">23. MISCELLANEOUS</h2>
                        <div className="space-y-4">
                            <div className="ml-6">
                                <p>23.1 If any part of the Contract is void or unenforceable, that part is severable from the Contract and the balance remains enforceable.</p>
                            </div>
                            <div className="ml-6">
                                <p>23.2 The words including, inclusive of, or similar expressions are not words of limitation.</p>
                            </div>
                            <div className="ml-6">
                                <p>23.3 If the Customer is more than one person or entity, each person or entity (as applicable) shall be jointly and severally liable to EPCA.</p>
                            </div>
                            <div className="ml-6">
                                <p>23.4 Notices shall be deemed received on the earlier of actual receipt, a reply, notice of receipt or a period of 3 days after issue without the issuer having received notice of a non-receipt or failed delivery.</p>
                            </div>
                            <div className="ml-6">
                                <p>23.5 EPCA may only waive a requirement or breach of the Contract in writing signed by it, and any such waiver is limited to the instance referred to (or if no instance is referred to in the waiver, to past breaches only).</p>
                            </div>
                            <div className="ml-6">
                                <p>23.6 Nothing constitutes a joint venture, agency, partnership or other fiduciary relationship between the Customer and EPCA.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}


