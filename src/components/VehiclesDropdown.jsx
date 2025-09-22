const VehiclesDropdown = ({ showVehicles, onMouseEnter, onMouseLeave }) => {
  return (
    <div 
      className={`fixed left-0 right-0 bg-white shadow-md transition-all duration-300 ease-out transform z-40
        ${showVehicles ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      style={{ top: '72px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-6 md:p-8">
        <div className="flex flex-col items-center text-center h-full">
          <img 
            src="/images/777green.webp" 
            alt="E-777 Mining Truck" 
            className="w-full max-w-[400px] h-auto mb-3"
          />
          <h3 className="text-lg mb-2 text-gray-900 h-12 flex items-center justify-center">E-777 Mining Truck</h3>
          <div className="flex gap-2 flex-wrap justify-center mt-auto">
            <a href="/product-info/E-777D" className="text-gray-900 underline text-xs hover:text-gray-600 transition-colors">More Info</a>
            <a href="/enquiry?subject=e-777d" className="text-gray-900 underline text-xs hover:text-gray-600 transition-colors">Enquire</a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center h-full">
          <img 
            src="/images/785green1.webp" 
            alt="E-785 Mining Truck" 
            className="w-full max-w-[400px] h-auto mb-3"
          />
          <h3 className="text-lg mb-2 text-gray-900 h-12 flex items-center justify-center">E-785 Mining Truck</h3>
          <div className="flex gap-2 flex-wrap justify-center mt-auto">
            <a href="/enquiry?subject=E-785" className="text-gray-900 underline text-xs hover:text-gray-600 transition-colors">Enquire</a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center h-full">
          <img 
            src="/images/988green1.webp" 
            alt="E-988 Loader" 
            className="w-full max-w-[400px] h-auto mb-3"
          />
          <h3 className="text-lg mb-2 text-gray-900 h-12 flex items-center justify-center">E-988 Wheel Loader</h3>
          <div className="flex gap-2 flex-wrap justify-center mt-auto">
            <a href="/enquiry?subject=E-988" className="text-gray-900 underline text-xs hover:text-gray-600 transition-colors">Enquire</a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center h-full">
          <img 
            src="/images/992green1.webp" 
            alt="E-992 Wheel Loader" 
            className="w-full max-w-[400px] h-auto mb-3"
          />
          <h3 className="text-lg mb-2 text-gray-900 h-12 flex items-center justify-center">E-992 Wheel Loader</h3>
          <div className="flex gap-2 flex-wrap justify-center mt-auto">
            <a href="/enquiry?subject=E-992" className="text-gray-900 underline text-xs hover:text-gray-600 transition-colors">Enquire</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesDropdown;