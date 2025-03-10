import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HiGlobeAlt } from "react-icons/hi";
import { Timeline } from "../components/Timeline";


export default function About() {
  return (
    <>
    <Navbar />
    <div className="text-gray-800 leading-relaxed overflow-x-hidden">
      
      <section className="h-screen flex items-center relative bg-black">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://www.epca.net.au/wp-content/uploads/2024/06/For-website.mp4" type="video/mp4" />
        </video>
        <div className="max-w-7xl mx-auto px-4 relative z-20 flex flex-col h-full">
          <div className="max-w-2xl text-white mt-32">
            <h1 className="text-6xl font-bold leading-tight mb-6">We are EPCA</h1>
            <p className="text-2xl">Accelerating the transition to zero-emission mining fleets.</p>
          </div>
          <div className="mt-auto mb-8 flex space-x-4 justify-evenly   items-center text-white">
            <div>
              <div className="text-md font-bold">Placeholder</div>  
              <div className="text-sm">Lorem Ipsum</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-md font-bold"><HiGlobeAlt className="w-6 h-6" /></div>
              <div className="text-sm">Lorem Ipsum</div>
            </div>
            <div>
              <div className="text-md font-bold">Placeholder</div>
              <div className="text-sm">Lorem Ipsum</div>
            </div>
            </div>
        </div>
      </section>

      <section className="bg-black text-white px-4 md:px-8 lg:px-36 pt-20">
        <div className="max-w-[1920px] mx-auto">
          <img 
            src="/placeholder.svg" 
            alt="EPCA Factory" 
            className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
          />
        </div>
        <div className="max-w-[1920px] mx-auto px-0 sm:px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <h2 className="text-xl md:text-2xl font-bold md:w-1/3">Company Mission & Values</h2>
            <p className="text-sm md:text-base md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-4 md:px-8 lg:px-36">
        <div className="max-w-[1920px] mx-auto">
          <img 
            src="/Team.JPG" 
            alt="EPCA Team" 
            className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover rounded-lg"
          />
        </div>
        <div className="max-w-[1920px] mx-auto px-0 sm:px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <h2 className="text-xl md:text-2xl font-bold md:w-1/3">Meet the Team</h2>
            <p className="text-sm md:text-base md:w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-4 md:px-8 lg:px-36 py-12 md:py-24">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-5xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
} 