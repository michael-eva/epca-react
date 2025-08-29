import { LinkedInIcon, YouTubeIcon } from '../components/icons/SocialIcons'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="mb-4">
                        <img src="/images/epca-logo.png" alt="EPCA Logo" className="h-12" />
                    </div>
                    <p className="text-base text-gray-400 mb-4">Leading the transition to zero-emission mining operations with innovative battery-electric solutions.</p>
                    <div className="flex space-x-4">
                        <motion.a 
                            href="https://www.linkedin.com/company/electric-power-conversion-australia-epca/" 
                            className="text-gray-400 hover:text-white relative group" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a 
                            href="https://www.youtube.com/@EPCA_" 
                            className="text-gray-400 hover:text-white relative group" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                        >
                            <YouTubeIcon />
                        </motion.a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Products</h3>
                    <ul className="text-base text-gray-400">
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/product-info/E-777D'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>E-777D Mining Truck</span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/enquiry?subject=E-785'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>E-785 Mining Truck</span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/enquiry?subject=E-993'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>E-993 Loader</span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/product-info/UON-smart-cell'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Charging</span>
                            </motion.a>
                        </li>
                    </ul>
                    
                    {/* Contact Us below Products */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-1">
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-base text-gray-400">+61 427 086 301</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <span className="text-base text-gray-400">contact@epca.net.au</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-base text-gray-400">3 Central Ave, Hazelmere 6055</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-base text-gray-400">Mon-Fri: 6am - 6pm AWST</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="text-base text-gray-400">
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/feasability-study'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Feasibility Study</span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/test-drive'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Test Drive</span>
                            </motion.a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Company</h3>
                    <ul className="text-base text-gray-400">
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/about'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Our Team</span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/pressreleases'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>News & Media</span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/careers'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Careers</span>
                            </motion.a>
                        </li>
                        <li>
                            <motion.a 
                                onClick={() => window.location.href = '/terms'} 
                                className="cursor-pointer relative group inline-block"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span>Terms and Conditions</span>
                            </motion.a>
                        </li> 
                    </ul>
                </div>
            </div>

            <div className="mt-8 text-center text-base text-gray-400">
                <p className="mb-4">EPCA is a majority Aboriginal-owned company. We acknowledge Aboriginal Peoples as the Traditional Owners of Australia. We respect the significance of the Traditional Owner's connection to Country, Language, Family and Community, and we pay our respects to them and the multiple, adaptive, and diverse Aboriginal cultures that exist throughout Australia. Electric Power Conversions Australia respects all past, present, and future Elders.</p>
                <p>&copy; 2025 EPCA. All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}