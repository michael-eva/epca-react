import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import ImageCarousel from '../../components/ImgCarousel/ImgCarousel';
const E777D = () => {
  // State for carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const animationRef = useRef(null);
  const trackRef = useRef(null);

  // Functions for carousel
  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const updateSlidePosition = () => {
    if (trackRef.current) {
      const slideWidth = trackRef.current.children[0].offsetWidth;
      const offset = -currentIndex * slideWidth;
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const nextSlide = () => {
    if (trackRef.current) {
      const slidesLength = trackRef.current.children.length;
      setCurrentIndex(prev => prev < slidesLength - 1 ? prev + 1 : 0);
    }
  };

  const prevSlide = () => {
    if (trackRef.current) {
      const slidesLength = trackRef.current.children.length;
      setCurrentIndex(prev => prev > 0 ? prev - 1 : slidesLength - 1);
    }
  };

  const touchStart = (event) => {
    setStartX(getPositionX(event));
    setIsDragging(true);
    animationRef.current = requestAnimationFrame(animation);
    if (trackRef.current) {
      trackRef.current.classList.add('grabbing');
    }
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentX = getPositionX(event);
      setCurrentTranslate(prevTranslate + currentX - startX);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    cancelAnimationFrame(animationRef.current);
    if (trackRef.current) {
      trackRef.current.classList.remove('grabbing');
      const slideWidth = trackRef.current.children[0].offsetWidth;
      const movedBy = currentTranslate - prevTranslate;

      if (movedBy > slideWidth / 4) {
        prevSlide();
      } else if (movedBy < -slideWidth / 4) {
        nextSlide();
      }
    }
    setPrevTranslate(0);
    setCurrentTranslate(0);
  };

  const animation = () => {
    if (isDragging && trackRef.current) {
      const slideWidth = trackRef.current.children[0].offsetWidth;
      const baseOffset = -currentIndex * slideWidth;
      trackRef.current.style.transform = `translateX(${baseOffset + currentTranslate}px)`;
      animationRef.current = requestAnimationFrame(animation);
    }
  };

  // Update slide position when currentIndex changes
  useEffect(() => {
    updateSlidePosition();
  }, [currentIndex]);

  // Add event listeners
  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('mousedown', touchStart);
      track.addEventListener('touchstart', touchStart, { passive: true });
      window.addEventListener('mousemove', touchMove);
      window.addEventListener('touchmove', touchMove, { passive: true });
      window.addEventListener('mouseup', touchEnd);
      window.addEventListener('touchend', touchEnd);
      window.addEventListener('mouseleave', touchEnd);
      window.addEventListener('resize', updateSlidePosition);

      return () => {
        track.removeEventListener('mousedown', touchStart);
        track.removeEventListener('touchstart', touchStart);
        window.removeEventListener('mousemove', touchMove);
        window.removeEventListener('touchmove', touchMove);
        window.removeEventListener('mouseup', touchEnd);
        window.removeEventListener('touchend', touchEnd);
        window.removeEventListener('mouseleave', touchEnd);
        window.removeEventListener('resize', updateSlidePosition);
      };
    }
  }, [isDragging]);

  // Stats for the benefits section
  const benefits = [
    {
      value: "100",
      unit: "%",
      title: "Carbon Zero",
      description: "Retrofitting Technology"
    },
    {
      value: "10",
      unit: "hr",
      title: "Superior Performance",
      description: "10-hour runtime, 15% more power"
    },
    {
      value: "54",
      unit: "%",
      title: "Cost Savings",
      description: "54% reduction in haulage costs"
    }
  ];

  // Technical specifications data
  const specifications = [
    { spec: "Payload Capacity", value: "100 tonnes", notes: "Industry-leading capacity for electric mining trucks" },
    { spec: "Battery Type", value: "Lithium-ion", notes: "Advanced cell chemistry optimized for mining applications" },
    { spec: "Battery Capacity", value: "950 kWh", notes: "High-density energy storage" },
    { spec: "Runtime", value: "Up to 10.5 hours", notes: "Based on standard mining cycle testing" },
    { spec: "Charging Time", value: "50 minutes", notes: "With UON SMART™ CELL high-speed charging" },
    { spec: "Power Output", value: "840 kW", notes: "23% increase over equivalent diesel models" },
    { spec: "Maximum Torque", value: "16,500 Nm", notes: "Instant torque at all speeds" },
    { spec: "Maximum Speed", value: "65 km/h", notes: "Safety-limited for mining applications" },
    { spec: "Gradeability", value: "12%", notes: "At full load" },
    { spec: "Operational Cost Reduction", value: "54%", notes: "Compared to equivalent diesel trucks" },
    { spec: "CO₂ Reduction", value: "100%", notes: "Zero direct emissions" },
    { spec: "Warranty", value: "5 years / 15,000 hours", notes: "Extended warranty options available" }
  ];

  // Key features data
  const features = [
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Battery System",
      description: "Advanced lithium-ion battery system delivering 10.5 hours of operational runtime with 50-minute ultra-fast charging capability."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: "Powertrain",
      description: "Durable, high-efficiency electric motors delivering 840 kW of power and 16,500 Nm of torque, optimized for mining operations."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Data & Analytics",
      description: "Comprehensive real-time monitoring system providing valuable insights for operational efficiency, predictive maintenance, and performance optimization."
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
            src="https://www.epca.net.au/wp-content/uploads/2024/06/dji_fly_20240518_130104_0086_1716029621038_photo-2.jpeg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="E-777D Mining Truck"
          />
          <div className="max-w-7xl mx-auto px-4 relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="text-6xl font-bold leading-tight mb-6">E-777D: 100-Ton Battery-Electric Mining Truck</h1>
              <p className="text-2xl mb-10">Built for tough mining conditions with zero emissions.</p>
              <div className="flex space-x-4">
                <a href="#overview" className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium uppercase tracking-wide transition-colors">Learn More</a>
                <a href="/product-enquiry/E-777D" className="px-8 py-3 bg-[#00CC66] hover:bg-[#00b359] rounded-full font-medium uppercase tracking-wide transition-colors text-white">Enquire Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-y-12 md:gap-y-0">
              {benefits.map((benefit, index) => (
                <div key={index} className="relative text-center px-6 md:px-8 group">
                  <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-none">
                    {benefit.value}<span className="text-4xl md:text-5xl">{benefit.unit}</span>
                  </div>
                  <p className="text-base md:text-lg text-gray-600 max-w-xs mx-auto">
                    <span className="font-semibold text-gray-700">{benefit.title}</span> &ndash; {benefit.description}
                  </p>
                  {index < benefits.length - 1 && (
                    <>
                      <div className="h-px bg-gray-200 w-4/5 mx-auto mt-12 md:hidden"></div>
                      <div className="hidden md:block absolute top-1/10 right-0 h-4/5 w-px bg-gray-200"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Redesigned Section */}
        <section className="py-20 bg-white md:px-10">
          <div className="mx-auto md:px-4 flex flex-col">
            <div className="relative mb-16 h-[576px] flex justify-center">
              <div className="w-full max-w-[2464px]">
                <img 
                  src="/placeholder.svg"
                  alt="E-777D Mining Truck" 
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full max-w-[2464px] mx-auto md:pl-20 px-4">
              <h2 className="text-5xl font-bold mb-6">Lorem ipsum dolor sit amet</h2>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>
        </section>

 <ImageCarousel />
 <section className="py-20 bg-white md:px-10">
          <div className="mx-auto md:px-4 flex flex-col">
            <div className="relative mb-16 h-[576px] flex justify-center">
              <div className="w-full max-w-[2464px]">
                <img 
                  src="/placeholder.svg"
                  alt="E-777D Mining Truck" 
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div className="w-full max-w-[2464px] mx-auto md:pl-20 px-4">
              <h2 className="text-5xl font-bold mb-6">Lorem ipsum dolor sit amet</h2>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </p>
            </div>
          </div>
        </section>


        {/* Key Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-[2428px] mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-[34px] font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-2xl">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Technical Specifications</h2>
            
            <div className="space-y-16">
              {/* Performance Section */}
              <div>
                <h3 className="text-2xl font-medium mb-8">Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-gray-400 text-sm">Payload Capacity</p>
                    <p className="text-xl">100 tonnes</p>
                    <p className="text-gray-400 text-sm mt-1">Industry-leading capacity for electric mining trucks</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Power Output</p>
                    <p className="text-xl">840 kW</p>
                    <p className="text-gray-400 text-sm mt-1">23% increase over equivalent diesel models</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Maximum Torque</p>
                    <p className="text-xl">16,500 Nm</p>
                    <p className="text-gray-400 text-sm mt-1">Instant torque at all speeds</p>
                  </div>
                </div>
              </div>
              
              {/* Battery & Charging Section */}
              <div>
                <h3 className="text-2xl font-medium mb-8">Battery & Charging</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-gray-400 text-sm">Battery Type</p>
                    <p className="text-xl">Lithium-ion</p>
                    <p className="text-gray-400 text-sm mt-1">Advanced cell chemistry optimized for mining applications</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Battery Capacity</p>
                    <p className="text-xl">950 kWh</p>
                    <p className="text-gray-400 text-sm mt-1">High-density energy storage</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Charging Time</p>
                    <p className="text-xl">50 minutes</p>
                    <p className="text-gray-400 text-sm mt-1">With UON SMART™ CELL high-speed charging</p>
                  </div>
                </div>
              </div>
              
              {/* Operation Section */}
              <div>
                <h3 className="text-2xl font-medium mb-8">Operation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-gray-400 text-sm">Runtime</p>
                    <p className="text-xl">Up to 10.5 hours</p>
                    <p className="text-gray-400 text-sm mt-1">Based on standard mining cycle testing</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Maximum Speed</p>
                    <p className="text-xl">65 km/h</p>
                    <p className="text-gray-400 text-sm mt-1">Safety-limited for mining applications</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Gradeability</p>
                    <p className="text-xl">12%</p>
                    <p className="text-gray-400 text-sm mt-1">At full load</p>
                  </div>
                </div>
              </div>
              
              {/* Economics Section */}
              <div>
                <h3 className="text-2xl font-medium mb-8">Economics & Environment</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-gray-400 text-sm">Operational Cost Reduction</p>
                    <p className="text-xl">54%</p>
                    <p className="text-gray-400 text-sm mt-1">Compared to equivalent diesel trucks</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">CO₂ Reduction</p>
                    <p className="text-xl">100%</p>
                    <p className="text-gray-400 text-sm mt-1">Zero direct emissions</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Warranty</p>
                    <p className="text-xl">5 years / 15,000 hours</p>
                    <p className="text-gray-400 text-sm mt-1">Extended warranty options available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="h-screen relative overflow-hidden flex items-center justify-center">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://www.epca.net.au/wp-content/uploads/2024/06/dji_fly_20240518_130104_0086_1716029621038_photo-2.jpeg" 
              alt="Mining truck background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-6xl font-bold text-white mb-8">Ready to Electrify Your Fleet?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              The E-777D is waiting for you.
            </p>
            <a 
              href="/product-enquiry/E-777D" 
              className="inline-block px-12 py-4 bg-[#4354e8] hover:bg-[#3a49cc] text-white rounded-md font-medium text-lg transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default E777D;