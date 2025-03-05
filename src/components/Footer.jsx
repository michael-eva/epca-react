export default function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="mb-4">
                        <img src="/epca-logo.png" alt="EPCA Logo" className="h-12" />
                    </div>
                    <p className="text-base text-gray-400 mb-4">Leading the transition to zero-emission mining operations with innovative battery-electric solutions.</p>
                    <div className="flex space-x-4">
                        <a href="https://www.linkedin.com/company/electric-power-conversion-australia-epca/" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@EPCA_" className="text-gray-400 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Products</h3>
                    <ul className="text-base text-gray-400">
                        <li><a href="/product-info/E-777D">E-777D Mining Truck</a></li>
                        <li><a href="/enquiry?subject=E-785">E-785 Mining Truck</a></li>
                        <li><a href="/enquiry?subject=E-993">E-993 Loader</a></li>
                        <li><a href="/product-info/UON-smart-cell">UON SMART™ CELL</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="text-base text-gray-400">
                        <li><a href="/feasability-study">Feasibility Study</a></li>
                        <li><a href="/test-drive">Test Drive</a></li>
                        <li><a href="/training">Training</a></li>
                        <li><a href="/data-analytics">Data Analytics</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Company</h3>
                    <ul className="text-base text-gray-400">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 text-center text-base text-gray-400">
                <p className="mb-4">EPCA is 100% Aboriginal-owned. We acknowledge Aboriginal Peoples as the Traditional Owners of Australia. We respect the significance of the Traditional Owner's connection to Country, Language, Family and Community, and we pay our respects to them and the multiple, adaptive, and diverse Aboriginal cultures that exist throughout Australia. Electric Power Conversions Australia respects all past, present, and future Elders.</p>
                <p>&copy; 2025 EPCA. All rights reserved.</p>
            </div>
        </div>
    </footer>
    )
}