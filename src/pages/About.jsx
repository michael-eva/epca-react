import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InProgress from '../components/InProgress';
const About = () => {
  return (
    // <div className="text-gray-800 leading-relaxed overflow-x-hidden">
    //   <Navbar />
      
    //   {/* Hero Section */}
    //   <section className="h-screen flex items-center relative bg-black">
    //     <div className="absolute inset-0 bg-black/30 z-10"></div>
    //     <video 
    //       className="absolute inset-0 w-full h-full object-cover opacity-70"
    //       autoPlay 
    //       loop 
    //       muted 
    //       playsInline
    //     >
    //       <source src="https://www.epca.net.au/wp-content/uploads/2024/06/For-website.mp4" type="video/mp4" />
    //     </video>
    //     <div className="max-w-7xl mx-auto px-4 relative z-20">
    //       <div className="max-w-3xl text-white">
    //         <h1 className="text-6xl font-bold leading-tight mb-6">We are EPCA</h1>
    //         <p className="text-2xl">Accelerating the transition to zero-emission mining fleets.</p>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Mission & Values Section */}
    //   <section className="py-20">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
    //       <p className="text-xl text-gray-600 mb-16 max-w-4xl">
    //         At EPCA, we're revolutionizing the mining industry through sustainable innovation. 
    //         Our mission is to transform traditional mining operations into zero-emission powerhouses, 
    //         creating a cleaner, more efficient future for the industry.
    //       </p>

    //       <h3 className="text-3xl font-bold mb-12">Our Values</h3>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         <div className="bg-white p-8 rounded-lg shadow-lg">
    //           <div className="text-[#00CC66] mb-6">
    //             <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    //             </svg>
    //           </div>
    //           <h4 className="text-2xl font-bold mb-4">Innovation</h4>
    //           <p className="text-gray-600">Pushing boundaries in sustainable mining technology through continuous innovation and forward-thinking solutions.</p>
    //         </div>
    //         <div className="bg-white p-8 rounded-lg shadow-lg">
    //           <div className="text-[#00CC66] mb-6">
    //             <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    //             </svg>
    //           </div>
    //           <h4 className="text-2xl font-bold mb-4">Sustainability</h4>
    //           <p className="text-gray-600">Committed to environmental stewardship through zero-emission solutions and responsible business practices.</p>
    //         </div>
    //         <div className="bg-white p-8 rounded-lg shadow-lg">
    //           <div className="text-[#00CC66] mb-6">
    //             <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    //             </svg>
    //           </div>
    //           <h4 className="text-2xl font-bold mb-4">Excellence</h4>
    //           <p className="text-gray-600">Delivering superior solutions and service through uncompromising quality and dedication.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Team Section */}
    //   <section className="py-20 bg-gray-50">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         {/* Example team member cards - Replace with actual team data */}
    //         <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    //           <img 
    //             src="/images/team/member1.jpg" 
    //             alt="Team Member" 
    //             className="w-full h-64 object-cover"
    //           />
    //           <div className="p-6">
    //             <h3 className="text-xl font-bold mb-2">John Smith</h3>
    //             <p className="text-gray-600">Chief Executive Officer</p>
    //           </div>
    //         </div>
    //         {/* Add more team member cards as needed */}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Timeline Section */}
    //   <section className="py-20">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <h2 className="text-4xl font-bold mb-12">Our Journey</h2>
    //       <div className="space-y-12">
    //         <div className="flex gap-8">
    //           <div className="w-32 flex-shrink-0">
    //             <h3 className="text-2xl font-bold">2024</h3>
    //           </div>
    //           <div>
    //             <h4 className="text-xl font-bold mb-2">Launch of Next-Gen Fleet Management</h4>
    //             <p className="text-gray-600">Introduced revolutionary fleet management system for electric mining vehicles.</p>
    //           </div>
    //         </div>
    //         <div className="flex gap-8">
    //           <div className="w-32 flex-shrink-0">
    //             <h3 className="text-2xl font-bold">2023</h3>
    //           </div>
    //           <div>
    //             <h4 className="text-xl font-bold mb-2">First Zero-Emission Fleet</h4>
    //             <p className="text-gray-600">Successfully implemented our first complete zero-emission mining fleet.</p>
    //           </div>
    //         </div>
    //         {/* Add more timeline items */}
    //       </div>
    //     </div>
    //   </section>

    //   {/* Press Section */}
    //   <section className="py-20 bg-gray-50">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <h2 className="text-4xl font-bold mb-12">Press & Media</h2>
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         <a href="/press/article1.pdf" className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    //           <p className="text-sm text-gray-500 mb-2">January 15, 2024</p>
    //           <h3 className="text-xl font-bold mb-2">Mining Weekly</h3>
    //           <p className="text-gray-600 mb-4">EPCA Leads the Way in Sustainable Mining Solutions</p>
    //           <span className="text-[#00CC66] flex items-center">
    //             Read More 
    //             <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
    //             </svg>
    //           </span>
    //         </a>
    //         {/* Add more press articles */}
    //       </div>
    //     </div>
    //   </section>

    //   <Footer />
    // </div>
    <InProgress/>
  );
};

export default About;
