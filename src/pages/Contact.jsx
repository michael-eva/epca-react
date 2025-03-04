import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold mb-2">CONTACT US</h1>
            <p className="text-gray-400">lorem.ipsum.com.au</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Customer Care Centre */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Customer Care Centre</h2>
              <p className="text-gray-300">customercare@lorem.ipsum.com.au</p>
              <p>1300 000 AUTO <span className="text-blue-400">(1300 000 000)</span></p>
              <button className="border border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                CONTACT US
              </button>
            </div>

            {/* Open Hours */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">Open Hours</h2>
              <p>Monday to Friday 9am to 5pm AEST</p>
              <p>Saturday 8am to 4pm AEST</p>
              <p>Closed public holidays</p>
              <p className="text-sm">
                Experience and Service Centre hours can be found on the{' '}
                <Link to="#" className="text-blue-400 hover:underline">Experience Centre</Link> and{' '}
                <Link to="#" className="text-blue-400 hover:underline">Service & Warranty</Link> pages.
              </p>
            </div>

            {/* Company Details */}
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-medium">Company Name</h2>
                <p>LOREM IPSUM GROUP PTY LTD</p>
              </div>
              <div>
                <h2 className="text-xl font-medium">ABN</h2>
                <p>00 000 000 000</p>
              </div>
              <div>
                <h2 className="text-xl font-medium">ACN</h2>
                <p>000 000 000</p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <p className="mb-6">Click here to receive updates.</p>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
