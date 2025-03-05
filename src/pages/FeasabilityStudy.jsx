import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FeasabilityStudy() {    
    return (
        <div className="flex flex-col min-h-screen bg-gray-400">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <InProgress />
            </div>
            <Footer />
        </div>
    )
}
