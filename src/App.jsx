import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import Home from './pages/Home'
import E777DProduct from './pages/product-info/E-777D'
import UONSmartCell from './pages/product-info/UON-smart-cell'
import E777DEnquiry from './pages/product-enquiry/E-777D'
import UONSmartCellEnquiry from './pages/product-enquiry/UON-smart-cell'
import Contact from './pages/Contact'
import TestDrive from './pages/Test-Drive'
import Enquiry from './pages/Enquiry'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-info/E-777D" element={<E777DProduct />} />
        <Route path="/product-info/UON-smart-cell" element={<UONSmartCell />} />
        <Route path="/product-enquiry/E-777D" element={<E777DEnquiry />} />
        <Route path="/product-enquiry/UON-smart-cell" element={<UONSmartCellEnquiry />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
