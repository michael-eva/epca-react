import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.css";

const images = [
  "https://www.epca.net.au/wp-content/uploads/2024/06/dji_fly_20240518_130104_0086_1716029621038_photo-2.jpeg",
  "https://www.epca.net.au/wp-content/uploads/2024/06/dji_fly_20240518_130104_0086_1716029621038_photo-2.jpeg",
  "https://www.epca.net.au/wp-content/uploads/2024/06/dji_fly_20240518_130104_0086_1716029621038_photo-2.jpeg",
  "https://www.epca.net.au/wp-content/uploads/2024/06/dji_fly_20240518_130104_0086_1716029621038_photo-2.jpeg",
];

const slides = [
  {
    image: images[0],
    title: "Even Quieter",
    description: "An updated wheel and tyre package offers a smoother driving experience. Redesigned body castings reduce parts from 70 to 1 for fewer gaps. All to create a whisper-quiet ride."
  },
  {
    image: images[1],
    title: "More Efficient",
    description: "Redesigned to improve range, performance and aerodynamics. New electric motors deliver more power while using less energy."
  },
  {
    image: images[2],
    title: "Longer Range",
    description: "Advanced battery technology provides up to 10.5 hours of continuous operation on a single charge, with ultra-fast charging capabilities for minimal downtime."
  },
  {
    image: images[3],
    title: "Smarter Controls",
    description: "Integrated smart systems provide real-time performance data, predictive maintenance alerts, and optimized operation for maximum efficiency."
  }
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="tesla-carousel bg-black text-white">
      <div className="carousel-container flex flex-col md:flex-row">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              src={slides[index].image}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-16 py-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl font-bold mb-6">{slides[index].title}</h2>
              <p className="text-xl text-gray-300 mb-12">
                {slides[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex space-x-2">
            {slides.map((_, i) => (
              <button 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-600'}`} 
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10"
        onClick={goPrev}
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10"
        onClick={goNext}
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ImageCarousel;
