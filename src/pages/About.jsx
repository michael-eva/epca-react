import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HiGlobeAlt } from "react-icons/hi";
import { Timeline } from "../components/Timeline";


export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="h-screen flex items-center relative bg-gray-100">
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

      <section className="bg-black text-white px-36 pt-20">
        <div>
          <img 
            src="/placeholder.svg" 
            alt="EPCA Factory" 
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>
        <div className="max-w-7xl px-4 py-16">
          <div className=" flex">
            <h2 className=" text-2xl font-bold mb-6 w-1/3">Company Mission & Values</h2>
            <p className="text-sm w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-36">
        <div>
          <img 
            src="/placeholder.svg" 
            alt="EPCA Team" 
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>
        <div className="max-w-7xl px-4 py-16">
          <div className=" flex">
            <h2 className="text-2xl font-bold mb-6 w-1/3">Meet the Team </h2>
            <p className="text-sm w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white px-36 py-24">
          <div className="space-y-24">
            <Timeline />
          </div>
      </section>
      <Footer />
    </div>
  );
} 