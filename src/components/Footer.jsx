import { LinkedInIcon, YouTubeIcon } from '../components/icons/SocialIcons'

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
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.youtube.com/@EPCA_" className="text-gray-400 hover:text-white">
                            <YouTubeIcon />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Products</h3>
                    <ul className="text-base text-gray-400">
                        <li><a onClick={() => window.location.href = '/product-info/E-777D'} className="cursor-pointer">E-777D Mining Truck</a></li>
                        <li><a onClick={() => window.location.href = '/enquiry?subject=E-785'} className="cursor-pointer">E-785 Mining Truck</a></li>
                        <li><a onClick={() => window.location.href = '/enquiry?subject=E-993'} className="cursor-pointer">E-993 Loader</a></li>
                        <li><a onClick={() => window.location.href = '/product-info/UON-smart-cell'} className="cursor-pointer">UON SMART™ CELL</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Services</h3>
                    <ul className="text-base text-gray-400">
                        <li><a onClick={() => window.location.href = '/feasability-study'} className="cursor-pointer">Feasibility Study</a></li>
                        <li><a onClick={() => window.location.href = '/test-drive'} className="cursor-pointer">Test Drive</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Company</h3>
                    <ul className="text-base text-gray-400">
                        <li><a onClick={() => window.location.href = '/about'} className="cursor-pointer">About Us</a></li>
                        <li><a onClick={() => window.location.href = '/contact'} className="cursor-pointer">Contact</a></li>
                        <li><a onClick={() => window.location.href = '/terms-and-conditions'} className="cursor-pointer">Terms and Conditions</a></li>
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