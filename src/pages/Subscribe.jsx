import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/.netlify/functions/newsletter-subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });

            const result = await response.json();

            if (result.success) {
                toast.success(result.message);
                setEmail('');
            } else {
                toast.error(result.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar mode="dark" />
            <div className="max-w-2xl mx-auto px-4 py-16 mt-12">
                <h1 className="text-4xl font-medium text-center mb-6">Subscribe to EPCA Updates</h1>
                <p className="text-center text-gray-700 mb-10">Join our newsletter to receive product updates, press releases, and event announcements.</p>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div>
                        <p className="mb-2 font-medium">Email Address</p>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#00CC66] focus:border-[#00CC66] block w-full p-3"
                            required
                        />
                    </div>

                    <div className="text-sm text-gray-600">
                        <p>By subscribing, you agree to our privacy policy. You can unsubscribe at any time.</p>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full md:w-auto md:px-16 py-3 font-medium rounded-md transition-colors ${
                            isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-[#00CC66] hover:bg-[#00b359] text-white'
                        }`}
                    >
                        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Subscribe;




