import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
const UONSmartCell = () => {
  // State for animations and interactions
  const [isVisible, setIsVisible] = useState({
    features: false,
    specs: false
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'features-section') {
              setIsVisible(prev => ({ ...prev, features: true }));
            } else if (entry.target.id === 'specs-section') {
              setIsVisible(prev => ({ ...prev, specs: true }));
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureSection = document.getElementById('features-section');
    const specsSection = document.getElementById('specs-section');
    
    if (featureSection) observer.observe(featureSection);
    if (specsSection) observer.observe(specsSection);

    return () => observer.disconnect();
  }, []);

  // Key features data
  
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "Ultra-Fast Charging",
      description: "50-minute full charge for heavy mining equipment, minimising downtime and maximising productivity."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
        </svg>
      ),
      title: "Scalable Infrastructure",
      description: "Modular design allows for easy expansion as your mining fleet grows, with flexible configuration options."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      ),
      title: "Grid or Solar",
      description: "Works with existing grid power or integrates with solar for flexible."
    }
  ];


  return (
    <>
      <Navbar />
      <div className="text-gray-800 leading-relaxed overflow-x-hidden">
        {/* Hero Section */}
        <section className="h-screen flex items-center relative bg-gray-100">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="/images/UON6.webp"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Charging Solution"
          />
          <div className="max-w-7xl mx-auto px-4 relative z-20 flex flex-col h-full">
            <div className="max-w-2xl text-white mt-32">
              <h1 className="text-6xl font-bold leading-tight mb-6">EV Fast Charging Solution</h1>
              <p className="text-2xl mb-10">Fast, reliable, and built for off-grid mining sites.</p>
            </div>
            <div className="mt-auto mb-20 flex space-x-4 justify-center">
              <a href="/enquiry?subject=uon" className="text-sm md:text-base   px-8 py-3 bg-[#00CC66] hover:bg-[#00b359] rounded-md font-medium uppercase tracking-wide transition-colors text-white">Enquire Now</a>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="order-2 md:order-1 w-full max-w-[416px] p-6 md:p-12 flex flex-col">
              <h2 className="text-3xl font-bold mb-4">Built for Tough Mining Environments</h2>
              <p className="text-gray-600 text-sm mb-4">
              EPCA's charging infrastructure is a flexible solution designed to withstand harsh mining conditions.
              </p>
              <p className="text-gray-600 text-sm mb-6">
              It can be deployed anywhere and supports rapid charging for any mining truck 24/7 in only 50min, ensuring seamless operation and minimal downtime. 
              </p>
              <div className="mt-auto">
                <a href="#enquiry" className="inline-block px-6 py-2 border-3 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Find Out More
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 w-full h-[300px] md:h-[1388px] flex items-center justify-center">
              <img 
                src="/images/UON10.webp" 
                alt="UON SMART CELL deployment map" 
                className="w-full h-full object-contain md:object-cover md:rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Tesla-inspired Interface Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Plug In, Charge and Go</h2>
            </div>
            
            <div className="relative mb-12">
              <img 
                src="/images/UON2.webp" 
                alt="UON SMART CELL interface on tablet" 
                className="w-full rounded-lg shadow-lg max-h-[1344px] md:max-h-[756px]"
              />
            </div>
            
                    <section id="features-section" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-8 rounded-lg shadow-sm transform transition-all duration-700 ${
                    isVisible.features 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
          </div>
        </section>
        <section className="bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="order-1 md:order-1 w-fullh-[300px] md:h-[1388px] flex items-center justify-center">
              <img 
                src="/images/UON5.webp" 
                alt="UON SMART CELL installation" 
                className="w-full h-full object-contain md:object-cover md:rounded-lg"
              />
            </div>
            <div className="order-2 md:order-2 w-full max-w-[416px] p-6 md:p-12 flex flex-col">
              <h2 className="text-3xl font-bold mb-4">High-Power, Smart Energy Management</h2>
              <p className="text-gray-600 text-sm mb-4">
              With the highest power output available, the system maximises fleet productivity by reducing charging times, allowing battery-electric trucks to operate continuously and efficiently. 
                </p>
                <p className="text-gray-600 text-sm mb-6">
                Its smart energy management system enables real-time monitoring and control to optimise charging cycles and power usage and improve both sustainability and performance.
              </p>
              <div className="mt-auto">
                <a href="/enquiry?subject=uon" className="inline-block px-6 py-2 border-3 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section id="enquiry" className="h-screen relative overflow-hidden flex items-center justify-center">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/ChargerOnSite1.webp" 
              alt="Mining site background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Electrify Your Mining Operations?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Contact us today to learn how EPCA's charging solutions can transform your mining fleet.
            </p>
            <a 
              onClick={() => window.location.href = '/enquiry?subject=uon'} 
              className="cursor-pointer inline-block px-12 py-4 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-md font-medium text-lg transition-colors uppercase tracking-wide"
            >
              Enquire Now
            </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default UONSmartCell;
