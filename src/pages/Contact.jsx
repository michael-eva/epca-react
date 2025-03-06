import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { LinkedInIcon, YouTubeIcon } from '../components/icons/SocialIcons';
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
              <button onClick={() => window.location.href = '/enquiry?subject=general'} className="border border-white text-white px-8 py-2 rounded-md hover:bg-white hover:text-black transition-colors">
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
          <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/company/electric-power-conversion-australia-epca/" className="text-gray-400 hover:text-white">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.youtube.com/@EPCA_" className="text-gray-400 hover:text-white">
                            <YouTubeIcon />
                        </a>
                    </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
