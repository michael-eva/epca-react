import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './styles.css'
import Home from './pages/Home'
import E777DProduct from './pages/product-info/E-777D'
import UONSmartCell from './pages/product-info/UON-smart-cell'
import E777DEnquiry from './pages/product-enquiry/E-777D'
import Contact from './pages/Contact'
import TestDrive from './pages/Test-Drive'
import Enquiry from './pages/Enquiry'
import FeasabilityStudy from './pages/FeasabilityStudy'
import About from './pages/About'
import PrivacyPolicy from './pages/Privacy-Policy'
import TermsAndConditions from './pages/Terms-and-Conditions'
import PressReleases from './pages/PressReleases'

function App() {
  return (
    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-info/E-777D" element={<E777DProduct />} />
        <Route path="/product-info/UON-smart-cell" element={<UONSmartCell />} />
        <Route path="/product-enquiry/E-777D" element={<E777DEnquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/feasability-study" element={<FeasabilityStudy />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/pressreleases" element={<PressReleases />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
