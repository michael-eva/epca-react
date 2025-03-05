import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function InProgress() {    
    return (
        <div className="flex flex-col min-h-screen bg-gray-400">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
            <div className="flex items-center justify-center h-full w-full">
      <div className="p-8 mx-auto max-w-2xl text-center bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <div className="text-5xl mb-4">⛏️</div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">This page is still being mined</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Our digital miners are hard at work extracting the valuable content for this page.
          Please check back soon!
        </p>
      </div>
    </div>
            </div>
            <Footer />
        </div>
    )
}

