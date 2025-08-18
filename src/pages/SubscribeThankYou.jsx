import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SubscribeThankYou = () => {
    return (
        <>
            <Navbar mode="dark" />
            <div className="max-w-2xl mx-auto px-4 py-24 mt-12 text-center">
                <h1 className="text-4xl font-medium mb-4">Thanks for subscribing!</h1>
                <p className="text-gray-700">You're on the list. We'll keep you updated with the latest EPCA news and product announcements.</p>
            </div>
            <Footer />
        </>
    );
};

export default SubscribeThankYou;




