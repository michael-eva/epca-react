import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Subscribe = () => {
    return (
        <>
            <Navbar mode="dark" />
            <div className="max-w-2xl mx-auto px-4 py-16 mt-12">
                <h1 className="text-4xl font-medium text-center mb-6">Subscribe to EPCA Updates</h1>
                <p className="text-center text-gray-700 mb-10">Join our newsletter to receive product updates, press releases, and event announcements.</p>

                <form
                    name="newsletter"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    action="/subscribe/thank-you"
                    className="space-y-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                >
                    <input type="hidden" name="form-name" value="newsletter" />

                    <p className="hidden">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>

                    <div>
                        <p className="mb-2 font-medium">Email Address</p>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                            required
                        />
                    </div>

                    <div className="text-sm text-gray-600">
                        <p>By subscribing, you agree to our privacy policy. You can unsubscribe at any time.</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-auto md:px-16 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white font-medium rounded-md transition-colors"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Subscribe;




