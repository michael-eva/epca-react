const machines = [
  {
    img: '/images/777green.webp',
    alt: 'E-777 Mining Truck',
    name: 'E-777',
    type: 'Mining Truck',
    status: 'Available',
    spec: '100 tons payload',
    href: '/product-info/E-777D',
  },
  {
    img: '/images/785green1.webp',
    alt: 'E-785 Mining Truck',
    name: 'E-785',
    type: 'Mining Truck',
    status: 'Coming Soon',
    spec: '150 tons payload',
    href: null,
  },
  {
    img: '/images/988green1.webp',
    alt: 'E-988 Wheel Loader',
    name: 'E-988',
    type: 'Wheel Loader',
    status: 'Available',
    spec: 'Up to 12.5 m³ bucket',
    href: '/product-info/E-988',
  },
  {
    img: '/images/992green1.webp',
    alt: 'E-992 Wheel Loader',
    name: 'E-992',
    type: 'Wheel Loader',
    status: 'Coming Soon',
    spec: 'Large capacity loader',
    href: null,
  },
];

const VehiclesDropdown = ({ showVehicles, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`fixed left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-out transform z-40
        ${showVehicles ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0 pointer-events-none'}`}
      style={{ top: '72px' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        {machines.map((m) => (
          <div
            key={m.name}
            className="group flex flex-col py-7 px-6 hover:bg-gray-50 transition-colors duration-200"
          >
            {/* Machine image */}
            <div className="flex justify-center items-center h-24 mb-5">
              <img
                src={m.img}
                alt={m.alt}
                className="h-full w-auto object-contain"
              />
            </div>

            {/* Availability badge */}
            <span
              className={`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold mb-3 ${
                m.status === 'Available'
                  ? 'bg-[#00CC66]/10 text-[#00874a]'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              {m.status === 'Available' && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#00CC66]" />
              )}
              {m.status}
            </span>

            {/* Name and type */}
            <p className="text-lg font-bold text-gray-900 leading-tight">{m.name}</p>
            <p className="text-sm text-gray-500 mb-1">{m.type}</p>
            <p className="text-xs text-gray-400 mb-5">{m.spec}</p>

            {/* CTA */}
            {m.href ? (
              <a
                href={m.href}
                className="mt-auto self-start inline-flex items-center gap-1.5 text-xs font-bold text-gray-800 hover:text-[#00CC66] transition-colors duration-200 group/link"
              >
                More Info
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ) : (
              <span className="mt-auto text-xs text-gray-300 italic">Details coming soon</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehiclesDropdown;
