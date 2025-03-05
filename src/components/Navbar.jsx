import { useState, useEffect } from 'react';
import VehiclesDropdown from './VehiclesDropdown';

const Navbar = ({ mode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showVehicles, setShowVehicles] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${mode === 'dark' ? 'bg-black/30 backdrop-blur-sm' : 
            isScrolled ? 'bg-black/30 backdrop-blur-sm' : ''}
          ${showVehicles ? 'bg-white shadow-md' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center relative z-[60]">
          <a 
            href="/" 
            className={`transition-colors duration-300 relative ${showVehicles ? 'text-black' : 'text-white'}`}
          >
            <img 
              src="/epca-logo.png" 
              alt="EPCA Logo" 
              className="h-8 w-auto cursor-pointer"
              fetchpriority="high"
              decoding="async"
            />
          </a>
          
          {/* Hamburger menu button */}
          <button 
            className={`md:hidden focus:outline-none transition-colors duration-300 relative ${showVehicles ? 'text-black' : 'text-white'}`}
            onClick={() => toggleMobileMenu(true)}
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          {/* Navigation links */}
          <ul className="hidden md:flex md:space-x-8 items-center">
            <li>
              <div 
                onMouseEnter={() => setShowVehicles(true)}
                onMouseLeave={() => setShowVehicles(false)}
                className="relative h-full group"
              >
                <span className={`font-medium transition-colors duration-300 cursor-pointer border-b-2 border-transparent group-hover:border-current pb-1
                  ${showVehicles ? 'text-black hover:text-gray-600' : 
                    mode === 'dark' ? 'text-gray-800' : 
                    'text-white'} 
                  ${!mode === 'dark' && isScrolled && !showVehicles ? 'hover:text-white/80' : 'hover:text-blue-200'}`}>
                  Machines
                </span>
                
                {/* Extended hover area that overlaps both navbar and dropdown */}
                <div className="absolute h-6 -bottom-6 left-0 right-0 bg-transparent z-50" />
              </div>
            </li>
            <li><a href="/product-info/UON-smart-cell" className={`font-medium transition-colors duration-300 ${showVehicles ? 'text-black hover:text-gray-600' : mode === 'dark' ? 'text-gray-800' : 'text-white'}`}>Charging</a></li>
            <li><a href="/about" className={`font-medium transition-colors duration-300 ${showVehicles ? 'text-black hover:text-gray-600' : mode === 'dark' ? 'text-gray-800' : 'text-white'}`}>About Us</a></li>
            <li><a href="/contact" className={`font-medium transition-colors duration-300 ${showVehicles ? 'text-black hover:text-gray-600' : mode === 'dark' ? 'text-gray-800' : 'text-white'}`}>Contact</a></li>
            <li>
              <a 
                href="/enquiry" 
                className={`font-medium transition-colors duration-300
                  ${showVehicles ? 'text-black hover:text-gray-600' : 
                    mode === 'dark' ? 'text-gray-800' : 'text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40">
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="space-y-8 text-center">
                  <li><a href="#" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>Machines</a></li>
                  <li><a href="/product-info/UON-smart-cell" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>Charging</a></li>
                  <li><a href="/about" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>About Us</a></li>
                  <li><a href="/contact" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>Contact</a></li>
                  <li><a href="/enquiry" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>Enquiry</a></li>
                </ul>
                <button 
                  className="absolute top-6 right-4 text-white"
                  onClick={() => toggleMobileMenu(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <VehiclesDropdown showVehicles={showVehicles} setShowVehicles={setShowVehicles} />
    </>
  );
};

export default Navbar;