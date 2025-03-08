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
      description: "50-minute full charge for heavy mining equipment, minimizing downtime and maximizing productivity."
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
      title: "Data Integration",
      description: "Smart monitoring and analytics provide real-time insights into charging performance, usage patterns, and maintenance needs."
    }
  ];

  // Technical specifications
  const specifications = [
    { spec: "Charging Power", value: "350 kW", notes: "Maximum DC fast charging output" },
    { spec: "Charging Time", value: "50 minutes", notes: "For full charge of E-777D mining truck" },
    { spec: "Input Voltage", value: "380-480V AC", notes: "Three-phase power input" },
    { spec: "Output Voltage", value: "200-1000V DC", notes: "Adjustable for different equipment" },
    { spec: "Efficiency", value: "95%", notes: "High-efficiency power conversion" },
    { spec: "Operating Temperature", value: "-40°C to +55°C", notes: "Designed for extreme mining environments" },
    { spec: "Connectivity", value: "4G/LTE, Wi-Fi, Ethernet", notes: "Multiple communication options" },
    { spec: "Dimensions", value: "2.2m × 1.5m × 2.5m", notes: "Compact footprint for site installation" },
    { spec: "Protection Rating", value: "IP65", notes: "Dust-tight and protected against water jets" },
    { spec: "Certification", value: "IEC, UL, CE", notes: "Compliant with international standards" },
    { spec: "Warranty", value: "5 years", notes: "Extended warranty options available" }
  ];

  return (
    <>
      <Navbar />
      <div className="text-gray-800 leading-relaxed overflow-x-hidden">
        {/* Hero Section */}
        <section className="h-screen flex items-center relative bg-black">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <video 
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="https://www.epca.net.au/wp-content/uploads/2024/06/For-website.mp4" type="video/mp4" />
          </video>
          <div className="max-w-7xl mx-auto px-4 relative z-20">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">UON SMART™ CELL: High-Speed DC Charging for Heavy Mining Equipment</h1>
              <p className="text-xl md:text-2xl mb-10">Fast, reliable, and built for off-grid mining sites.</p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="flex flex-col md:flex-row">
            <div className="order-2 md:order-1 w-full max-w-[416px] p-6 md:p-12 flex flex-col">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Heading</h3>
              <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
              </p>
              <div className="mt-auto">
                <a href="#enquiry" className="inline-block px-6 py-2 border-3 rounded-md text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                  Find Out More
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 w-full bg-gray-100 h-[300px] md:h-[1388px] flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="UON SMART CELL deployment map" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tesla-inspired Interface Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Heading</h3>
              <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h2>
            </div>
            
            <div className="relative mb-12">
              <img 
                src="/placeholder.svg" 
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
            <div className="order-1 md:order-1 w-full bg-gray-100 h-[300px] md:h-[1388px] flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="UON SMART CELL installation" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2 md:order-2 w-full max-w-[416px] p-6 md:p-12 flex flex-col">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Heading</h3>
              <h2 className="text-3xl font-bold mb-4">Lorem ipsum dolor sit amet</h2>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                </p>
                <p className="text-gray-600 text-sm mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
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
              src="/placeholder.svg" 
              alt="Mining site background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Electrify Your Mining Operations?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Contact us today to learn how the UON SMART™ CELL can transform your mining fleet.
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
