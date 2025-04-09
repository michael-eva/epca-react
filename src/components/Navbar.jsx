import { useState, useEffect, useRef } from 'react';
import VehiclesDropdown from './VehiclesDropdown';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ mode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showVehicles, setShowVehicles] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const closeTimeoutRef = useRef(null);
  const servicesTimeoutRef = useRef(null);
  
  const handleShowVehicles = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setShowVehicles(true);
  };

  const handleHideVehicles = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setShowVehicles(false);
    }, 500);
  };

  const handleShowServices = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setShowServices(true);
  };

  const handleHideServices = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setShowServices(false);
    }, 500);
  };
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    };
  }, []);

  const toggleMobileMenu = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    
    if (isOpen) {
      setShowVehicles(false);
    }
    
    if (isOpen) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 10);
    }
  };

  const handleVehiclesClick = (e) => {
    e.preventDefault();
    toggleMobileMenu(false);
    navigate('/#machines');
    setTimeout(() => {
      const element = document.getElementById('machines');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Show the dropdown when mouse enters the menu item
  const handleMenuMouseEnter = () => {
    handleShowVehicles();
  };

  // Handle mouse leave from the menu item
  const handleMenuMouseLeave = () => {
    handleHideVehicles();
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300
          ${isScrolled || mode === 'dark' ? 'bg-black/30 backdrop-blur-sm' : ''}
          ${showVehicles ? 'bg-white shadow-md' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center relative z-[101]">
          <a 
            href="/" 
            className={`transition-colors duration-300 relative ${showVehicles ? 'text-black' : 'text-white'}`}
          >
            <img 
              src="/images/epca-logo.png" 
              alt="EPCA Logo" 
              className="h-12 w-auto cursor-pointer"
              fetchPriority="high"
              decoding="async"
            />
          </a>
          
          <button 
            className={`md:hidden focus:outline-none transition-colors duration-300 relative ${showVehicles ? 'text-black' : 'text-white'}`}
            onClick={() => toggleMobileMenu(true)}
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          <ul className="hidden md:flex md:space-x-8 items-center">
            <li>
              <div 
                onMouseEnter={handleMenuMouseEnter}
                onMouseLeave={handleMenuMouseLeave}
                className="relative h-full group"
              >
                <span className={`font-medium transition-colors duration-300 cursor-pointer border-b-2 border-transparent group-hover:border-current pb-1
                  ${showVehicles ? 'text-black hover:text-gray-600' : 
                    mode === 'dark' ? 'text-gray-800' : 
                    'text-white'} 
                  ${!mode === 'dark' && isScrolled && !showVehicles ? 'hover:text-white/80' : 'hover:text-blue-200'}`}>
                  Machines
                </span>
                
                <div className="absolute h-6 -bottom-6 left-0 right-0 bg-transparent z-50" />
              </div>
            </li>
            <li><a href="/product-info/UON-smart-cell" className={`font-medium transition-colors duration-300 ${showVehicles ? 'text-black hover:text-gray-600' : mode === 'dark' ? 'text-gray-800' : 'text-white'}`}>Charging</a></li>
            <li>
              <div 
                onMouseEnter={handleShowServices}
                onMouseLeave={handleHideServices}
                className="relative h-full group"
              >
                <span className={`font-medium transition-colors duration-300 cursor-pointer border-b-2 border-transparent group-hover:border-current pb-1
                  ${showVehicles ? 'text-black hover:text-gray-600' : 
                    mode === 'dark' ? 'text-gray-800' : 
                    'text-white'} 
                  ${!mode === 'dark' && isScrolled && !showVehicles ? 'hover:text-white/80' : 'hover:text-blue-200'}`}>
                  Services
                </span>
                {showServices && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 mt-2 z-50">
                    <a href="/feasability-study" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Feasibility Study</a>
                    <a href="/test-drive" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Test Drive</a>
                  </div>
                )}
              </div>
            </li>
            <li><a href="/about" className={`font-medium transition-colors duration-300 ${showVehicles ? 'text-black hover:text-gray-600' : mode === 'dark' ? 'text-gray-800' : 'text-white'}`}>About Us</a></li>
            <li><a href="/contact" className={`font-medium transition-colors duration-300 ${showVehicles ? 'text-black hover:text-gray-600' : mode === 'dark' ? 'text-gray-800' : 'text-white'}`}>Contact</a></li>
            <li>
              <a 
                href="/enquiry" 
                className={`font-medium transition-colors duration-300
                  ${showVehicles ? 'text-black hover:text-gray-600' : 
                    mode === 'dark' ? 'text-gray-800' : 
                    'text-white'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </a>
            </li>
          </ul>

          {isMobileMenuOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black/95 backdrop-blur-sm z-[102] overflow-auto">
              <div className="flex flex-col items-center justify-center min-h-screen w-full">
                <ul className="space-y-8 text-center">
                  <li>
                    <a 
                      href="/#machines" 
                      className="text-2xl font-medium text-white hover:text-blue-200 transition-colors" 
                      onClick={handleVehiclesClick}
                    >
                      Machines
                    </a>
                  </li>
                  <li><a href="/product-info/UON-smart-cell" className="text-2xl font-medium text-white hover:text-blue-200 transition-colors" onClick={() => toggleMobileMenu(false)}>Charging</a></li>
                  <li>
                    <div className="text-2xl font-medium text-white">
                      <span className="cursor-pointer hover:text-blue-200 transition-colors" onClick={() => setShowServices(!showServices)}>Services</span>
                      {showServices && (
                        <div className="mt-2 space-y-2">
                          <a href="/feasability-study" className="block text-xl text-white hover:text-blue-200 transition-colors" onClick={() => toggleMobileMenu(false)}>Feasibility Study</a>
                          <a href="/test-drive" className="block text-xl text-white hover:text-blue-200 transition-colors" onClick={() => toggleMobileMenu(false)}>Test Drive</a>
                        </div>
                      )}
                    </div>
                  </li>
                  <li><a href="/about" className="text-2xl font-medium text-white hover:text-blue-200 transition-colors" onClick={() => toggleMobileMenu(false)}>About Us</a></li>
                  <li><a href="/contact" className="text-2xl font-medium text-white hover:text-blue-200 transition-colors" onClick={() => toggleMobileMenu(false)}>Contact</a></li>
                  <li><a href="/enquiry" className="text-2xl font-medium text-white hover:text-blue-200 transition-colors" onClick={() => toggleMobileMenu(false)}>Enquiry</a></li>
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

      <VehiclesDropdown 
        showVehicles={showVehicles} 
        onMouseEnter={handleShowVehicles}
        onMouseLeave={handleHideVehicles}
      />
    </>
  );
};

export default Navbar;