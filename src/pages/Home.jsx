import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import VehicleCard from '../components/VehicleCard.jsx';
import Footer from '../components/Footer.jsx';
import { toast } from 'react-hot-toast';
const Home = () => {
  // State for testimonials
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  // State for number animation
  const [numbers, setNumbers] = useState({
    carbon: 0,
    footprint: 54,
    efficiency: 30
  });

  // Number animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.impact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = {
      carbon: 2021,
      footprint: 1447,
      efficiency: 95
    };

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0;
      const steps = 50;
      const increment = target / steps;
      const duration = 2000;

      const timer = setInterval(() => {
        current += increment;
        setNumbers(prev => ({
          ...prev,
          [key]: Math.min(Math.round(current), target)
        }));

        if (current >= target) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  // Testimonial data
  const testimonials = [
    {
      name: "John Smith",
      role: "Operations Director, Global Mining Corp",
      text: "EPCA's E-777 has transformed our mining operations. We've seen significant cost savings and our sustainability targets are now within reach."
    },
    {
      name: "Sarah Johnson",
      role: "CEO, Mining Solutions Ltd",
      text: "The transition to electric vehicles was seamless with EPCA's support. The performance and reliability have exceeded our expectations."
    },
    {
      name: "Michael Chen",
      role: "Sustainability Director, EcoMine",
      text: "The UON SMART CELL charging infrastructure has revolutionized our operations. Charging times are minimal, and uptime is maximized."
    }
  ];

  // Testimonial navigation handlers
  const nextSlide = () => {
    setCurrentTestimonialIndex(prev => 
      (prev + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setCurrentTestimonialIndex(prev => 
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  console.log(email);
    try {
      const response = await fetch('https://f4qe5xbd4vflzwi7yjrz2i4fjm0pcmfj.lambda-url.us-east-2.on.aws', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify({formData: {email: email}, joinMailingList: true})
      });
  
      // With no-cors mode, we'll assume success if no error is thrown
      toast.success('You\'re in the loop!');
      // Reset form
      setEmail('');
    } catch (error) {
      console.error('Error submitting configuration:', error);
      toast.error('Failed to submit enquiry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="text-gray-800 leading-relaxed overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center relative bg-gray-100">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/video-poster.jpg" 
          preload="metadata"
        >
          <source src="https://d19kz0rwf2xrwq.cloudfront.net/assets/home-vid.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto px-4 relative z-20 flex flex-col h-full">
          <div className="max-w-2xl text-white mt-32">
            <h1 className="text-6xl font-bold leading-tight mb-6">Powering the Future of Mining</h1>
            <p className="text-2xl">Leading the transition to battery-electric mining solutions.</p>
          </div>
          <div className="mt-auto mb-20 flex space-x-4 justify-center items-center">
            <a href="/product-info/E-777D" className="text-xs md:text-base px-8 py-3 bg-[#00CC66] hover:bg-[#00b359] rounded-md font-medium uppercase tracking-wide transition-colors text-white">Explore Our Fleet</a>
            <a href="/product-enquiry/E-777D" className="text-xs md:text-base px-8 py-3 border-2 border-white hover:bg-white/10 rounded-md font-medium uppercase tracking-wide transition-colors text-white">Enquire Now</a>
          </div>
        </div>
      </section>

    <section className=" py-30">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-y-12 md:gap-y-0">
                <div className="relative text-center px-6 md:px-8 group">
                    <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-none">100<span className="text-4xl md:text-5xl">%</span></div>
                    <p className="text-base md:text-lg text-gray-600 max-w-xs mx-auto">
                        <span className="font-semibold text-gray-700">100% Carbon Zero</span> &ndash; 
                        Retrofitting Technology
                    </p>
                    <div className="h-px bg-gray-200 w-4/5 mx-auto mt-12 md:hidden"></div>
                    <div className="hidden md:block absolute top-1/10 right-0 h-4/5 w-px bg-gray-200"></div>
                </div>
                
                <div className="relative text-center px-6 md:px-8 group">
                    <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-none">10<span className="text-4xl md:text-5xl">hr</span></div>
                    <p className="text-base md:text-lg text-gray-600 max-w-xs mx-auto">
                        <span className="font-semibold text-gray-700">Superior Performance</span> &ndash; 
                        10-hour Runtime, 15% More Power
                    </p>
                    <div className="h-px bg-gray-200 w-4/5 mx-auto mt-12 md:hidden"></div>
                    <div className="hidden md:block absolute top-1/10 right-0 h-4/5 w-px bg-gray-200"></div>
                </div>
                
                <div className="text-center px-6 md:px-8">
                    <div className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-none">54<span className="text-4xl md:text-5xl">%</span></div>
                    <p className="text-base md:text-lg text-gray-600 max-w-xs mx-auto">
                        <span className="font-semibold text-gray-700">Cost Savings</span> &ndash; 
                        54% reduction in haulage costs
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="py-20 bg-black text-white" id="machines">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4">Machines</h2>
            <p className="text-2xl mb-8">Built for the Toughest Mining Conditions</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <VehicleCard 
                    imageSrc="/truck1.jpeg"
                    altText="E-777 Mining Truck"
                    title="E-777 Off-Highway Truck"
                    subtitle="Available"
                    buttonText="View More"
                    buttonLink="/product-info/E-777D"
                    // vehicleInfo={{
                    //     sample: "Sample",
                    //     sample1: "Sample",
                    //     sample2: "Sample",
                    //     sample3: "Sample",
                    //     sample4: "Sample",
                    //     sample5: "Sample",
                    //     sample6: "Sample",
                    //   }}
                />

                <VehicleCard 
                    imageSrc="/785edited2.jpg"
                    altText="E-785 Mining Truck"
                    title="E-785 Off-Highway Truck"
                    subtitle="Coming Soon"
                    buttonText="Express Interest"
                    buttonLink="/enquiry?subject=E-785"
                />

                <VehicleCard 
                    imageSrc="/993edited2.png"
                    altText="E-993 Loader"
                    title="E-993 Wheel Loader"
                    subtitle="Coming Soon"
                    buttonText="Express Interest"
                    buttonLink="/enquiry?subject=E-993"
                />
            </div>
        </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/2 h-[600px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 relative group cursor-pointer"
                onClick={() => window.location.href = '/product-info/UON-smart-cell'}
                >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <img 
                        src="UON_Charger.png" 
                        alt="UON SMART CELL Charging Station" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="lg:w-1/2">
                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00CC66] to-[#009f50]">UON SMART™ CELL:</span>
                            <br />High-Speed DC Charging
                        </h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Engineered for efficiency, UON's advanced charging solution delivers a full charge 
                        in <span className="font-semibold text-[#00CC66]">under 2 hours</span> . Designed specifically for electric mining fleets, it reduces downtime and maximises operational performance with innovative fast-charging technology.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-[#00CC66] mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-800">Fast Charging</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-[#00CC66] mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-800">Modular and Scalable</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-[#00CC66] mb-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="font-medium text-gray-800">Off-Grid Ready</span>
                        </div>
                    </div>
                    
                    <a href="/product-info/UON-smart-cell" className="group relative inline-flex items-center px-8 py-3 overflow-hidden bg-[#00CC66] rounded-md">
                        <span className="absolute left-0 w-0 h-full bg-[#009f50] transition-all duration-300 ease-out group-hover:w-full"></span>
                        <span className="relative flex items-center font-medium text-white">
                            Learn More
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-100 impact-section">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Leading the Mining Industry's Green Transition</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="inline-block border rounded px-4 py-1 mb-8">Founded</div>
                    <div className="text-[80px] md:text-[120px] leading-none font-light mb-6">
                        {numbers.carbon}
                    </div>
                    <p className="text-gray-600 text-lg max-w-xs mx-auto">
                        Perth-based Engineering Team
                    </p>
                </div>

                <div className="text-center">
                    <div className="inline-block border rounded px-4 py-1 mb-8">Reduced footprint</div>
                    <div className="text-[80px] md:text-[120px] leading-none font-light mb-6">
                        {numbers.footprint}t
                    </div>
                    <p className="text-gray-600 text-lg max-w-xs mx-auto">
                        Each electric truck removes 1,447 tonnes of CO₂ per year.
                    </p>
                </div>

                <div className="text-center">
                    <div className="inline-block border rounded px-4 py-1 mb-8">Energy Savings</div>
                    <div className="text-[80px] md:text-[120px] leading-none font-light mb-6">
                        {numbers.efficiency}%
                    </div>
                    <p className="text-gray-600 text-lg max-w-xs mx-auto">
                         Electric motors achieves up to 95% efficiency compared to diesel engines.
                    </p>
                </div>
            </div>
    
        </div>
    </section>

    <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">What People Say</h2>
            <div className="flex justify-center">
                <div className="max-w-3xl w-full">
                    <div className="relative">
                        <div className="testimonial-carousel overflow-hidden">
                            <div 
                                className="testimonials-container flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentTestimonialIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div 
                                        key={index} 
                                        className="testimonial-slide w-full flex-shrink-0 px-8 py-4"
                                        style={{ minWidth: '100%', height: 'auto' }}
                                    >
                                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                                            <div className="flex items-center mb-6">
                                                <div className="h-12 w-12 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                                                    <span className="text-gray-500 font-medium">{testimonial.name.charAt(0)}</span>
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="font-medium text-gray-900 truncate">{testimonial.name}</div>
                                                    <div className="text-gray-600 truncate">{testimonial.role}</div>
                                                </div>
                                            </div>
                                            <p className="text-xl text-gray-800">{testimonial.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white rounded-md p-2 shadow-lg hover:bg-gray-50 focus:outline-none" id="prevButton" onClick={prevSlide}>
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                        <button className="absolute top-1/2 -translate-y-1/2 -right-4 bg-white rounded-md p-2 shadow-lg hover:bg-gray-50 focus:outline-none" id="nextButton" onClick={nextSlide}>
                            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>

                        <div className="flex justify-center gap-2 mt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-md transition-all duration-300 ${
                                        index === currentTestimonialIndex 
                                            ? 'bg-[#00CC66]' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-6">Get Updates</h2>
            <p className="text-base text-gray-600 text-center mb-10">Join the Future of Mining Today</p>
            <form className="flex flex-col sm:flex-row justify-center gap-3.5 max-w-md mx-auto" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    className="px-4 py-3 border border-gray-300 rounded-md w-full" 
                    placeholder="Your Email Address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    className="px-8 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-md font-medium uppercase tracking-wide transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                    {loading ? (
                        <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </>
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </div>
    </section>

    <Footer />
      
    </div>
    </>
  );
};

export default Home;
