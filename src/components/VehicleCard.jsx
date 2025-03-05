import React from 'react';

const VehicleCard = ({ 
  imageSrc, 
  altText, 
  title, 
  subtitle, 
  buttonText = "View More", 
  buttonLink = "#",
  buttonAction = null,
  vehicleInfo = {}
}) => {
  // Check if vehicleInfo has any properties
  const hasVehicleInfo = Object.keys(vehicleInfo).length > 0;
  
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden p-12 flex flex-col relative min-h-[600px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl group">
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={altText} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
      </div>
      
      {/* Only render vehicle info overlay if there is vehicle info */}
      {hasVehicleInfo && (
        <div className="absolute inset-0 bg-black/80 flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="text-white space-y-4 overflow-y-auto max-h-[calc(100%-80px)]">
            <h4 className="text-2xl font-medium border-b border-white/20 pb-2">{title} Details</h4>
            {Object.entries(vehicleInfo).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            {buttonAction ? (
              <button 
                onClick={buttonAction}
                className="block w-full py-4 bg-white hover:bg-[#00b359] hover:text-white text-black rounded-md text-center font-medium transition-all duration-300 hover:shadow-md"
              >
                {buttonText}
              </button>
            ) : (
              <a 
                href={buttonLink} 
                className="block w-full py-4 bg-white hover:bg-[#00b359] hover:text-white text-black rounded-md text-center font-medium transition-all duration-300 hover:shadow-md"
              >
                {buttonText}
              </a>
            )}
          </div>
        </div>
      )}
      
      <div className="relative z-10 flex flex-col h-full">
        <div>
          <h3 className="text-xl font-medium text-white mb-2 transition-colors duration-300">{title}</h3>
          <p className="text-4xl font-light text-white mb-6 transition-colors duration-300">{subtitle}</p>
        </div>

        {/* Only show this button when not hovering or when there's no vehicle info */}
        <div className={`mt-auto ${hasVehicleInfo ? 'group-hover:opacity-0' : ''} transition-opacity duration-300`}>
          {buttonAction ? (
            <button 
              onClick={buttonAction}
              className="block w-full py-4 bg-white hover:bg-[#00b359] hover:text-white text-black rounded-md text-center font-medium transition-all duration-300 hover:shadow-md"
            >
              {buttonText}
            </button>
          ) : (
            <a 
              href={buttonLink} 
              className="block w-full py-4 bg-white hover:bg-[#00b359] hover:text-white text-black rounded-md text-center font-medium transition-all duration-300 hover:shadow-md"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard; 