const VehiclesDropdown = ({ showVehicles, setShowVehicles }) => {
  return (
    <div 
      className={`fixed left-0 right-0 bg-white shadow-md transition-all duration-300 ease-out transform z-40
        ${showVehicles ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      style={{ top: '72px' }}
      onMouseEnter={() => setShowVehicles(true)}
      onMouseLeave={() => setShowVehicles(false)}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 p-8">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/E777_EnquiryPage.webp" 
            alt="E-777 Mining Truck" 
            className="w-full h-auto mb-4"
          />
          <h3 className="text-xl mb-2 text-gray-900">E-777 Mining Truck</h3>
          <div className="flex gap-4">
            <a href="/product-info/E-777D" className="text-gray-900 underline text-sm hover:text-gray-600 transition-colors">More Info</a>
            <a href="/product-enquiry/E-777D" className="text-gray-900 underline text-sm hover:text-gray-600 transition-colors">Enquire</a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/785edited.webp" 
            alt="E-785 Mining Truck" 
            className="w-[330px] h-auto mb-4"
          />
          <h3 className="text-xl mb-2 text-gray-900">E-785 Mining Truck</h3>
          <div className="flex gap-4">
            <a href="/enquiry?subject=E-785" className="text-gray-900 underline text-sm hover:text-gray-600 transition-colors">Enquire</a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <img 
            src="/images/993editedv1.webp" 
            alt="E-993 Loader" 
            className="w-full h-auto mb-4"
          />
          <h3 className="text-xl mb-2 text-gray-900">E-993 Loader</h3>
          <div className="flex gap-4">
            <a href="/enquiry?subject=E-993" className="text-gray-900 underline text-sm hover:text-gray-600 transition-colors">Enquire</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesDropdown; 