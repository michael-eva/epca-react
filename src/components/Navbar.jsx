import { useState, useEffect } from 'react';

const Navbar = ({ mode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className={`fixed top-0 left-0 right-0 transition-colors duration-300 z-50 
      ${isScrolled ? 'bg-black/30 backdrop-blur-sm' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <a href="/" className="text-white">
          <img 
            src="https://www.epca.net.au/wp-content/uploads/2022/10/epca-logo-alt-1.png" 
            alt="EPCA Logo" 
            className="h-8 w-auto"
            fetchpriority="high"
            decoding="async"
          />
        </a>
        
        {/* Hamburger menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => toggleMobileMenu(true)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

        {/* Navigation links */}
        <ul className="hidden md:flex md:space-x-8">
          <li><a href="#" className={`font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} ${isScrolled ? 'hover:text-white/80' : 'hover:text-blue-200'} transition-colors`}>Machines</a></li>
          <li><a href="/product-info/UON-smart-cell" className={`font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} ${isScrolled ? 'hover:text-white/80' : 'hover:text-blue-200'} transition-colors`}>Charging</a></li>
          <li><a href="#" className={`font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} ${isScrolled ? 'hover:text-white/80' : 'hover:text-blue-200'} transition-colors`}>About Us</a></li>
          <li><a href="/contact" className={`font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} ${isScrolled ? 'hover:text-white/80' : 'hover:text-blue-200'} transition-colors`}>Contact</a></li>
        </ul>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-40">
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="space-y-8 text-center">
                <li><a href="#" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>Machines</a></li>
                <li><a href="/product-info/UON-smart-cell" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>Charging</a></li>
                <li><a href="#" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>About Us</a></li>
                <li><a href="#" className={`text-2xl font-medium ${mode === 'dark' && !isScrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-200 transition-colors`} onClick={() => toggleMobileMenu(false)}>Contact</a></li>
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
  );
};

export default Navbar;
