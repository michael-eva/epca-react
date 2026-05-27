import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const UONSmartCell = () => {
  const coreServices = [
    {
      title: 'Diesel-to-Electric Powertrain Retrofit Engineering',
      description:
        'Engineering and integration work to convert existing heavy-haulage mining equipment to full electric operation.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h7l-2 2m2-2 3-3 6 6-3 3-2-2-3 3-2-2H3z" />
        </svg>
      ),
    },
    {
      title: 'Electric Mining Truck Design & Build (In-House)',
      description:
        'Engineering, manufacturing, and assembly of battery-electric mining trucks in Western Australia.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 19a1.5 1.5 0 1 0 0 .01M18 19a1.5 1.5 0 1 0 0 .01" />
        </svg>
      ),
    },
    {
      title: 'Feasibility Studies for Mining Electrification',
      description:
        'Assess runtime, duty cycles, recharge time, and mine-site suitability before retrofit or deployment.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      title: 'Electric Powertrain Engineering & Integration',
      description:
        'Electrical and electronic engineering across motors, inverters, batteries, control systems, and functional safety.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M7 12h10M9 17h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        </svg>
      ),
    },
    {
      title: 'Charging & Energy Systems Engineering',
      description:
        'High-power DC charging system engineering, modular deployment, and off-grid-ready solutions for mining fleets.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3v10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11V9a2 2 0 0 0-2-2h-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 11h14l-1 10H6L5 11z" />
        </svg>
      ),
    },
    {
      title: 'Testing, Commissioning & Validation',
      description:
        'Test drives and performance validation of converted electric mining vehicles prior to operational deployment.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      ),
    },
  ];

  const deliveryModels = [
    {
      title: 'In-House Retrofit Engineering & Manufacturing',
      description:
        'Full retrofit engineering and conversion performed at EPCA\'s Hazelmere facility.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4v13H3V7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 20v-8h10v8" />
        </svg>
      ),
    },
    {
      title: 'Exportable Retrofit Kit Engineering',
      description:
        'Engineering and development of electric powertrain retrofit kits, supported by remote technical assistance.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 20h10l2-4H5l2 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
        </svg>
      ),
    },
  ];

  const supportingCapabilities = [
    {
      title: 'Electric Vehicle Engineering for Heavy Industry',
      description:
        'Battery-electric vehicle engineering specifically for mining and heavy haulage applications.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3 7H9l3-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16l-2 12H6L4 10z" />
        </svg>
      ),
    },
    {
      title: 'Functional Safety & Control Systems Engineering',
      description:
        'Control architectures and safety-rated systems for electric mining vehicles.',
      icon: (
        <svg className="w-7 h-7 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-5" />
        </svg>
      ),
    },
  ];

  const deliveryFlow = [
    { title: 'Feasibility', description: 'Assess runtime, duty cycles, and mine-site fit.' },
    { title: 'Design', description: 'Engineer the powertrain, controls, and integration.' },
    { title: 'Build & Retrofit', description: 'Convert in-house or develop export kits.' },
    { title: 'Test & Validate', description: 'Commission, validate, and performance-check.' },
    { title: 'Deploy', description: 'Support operational rollout with engineering oversight.' },
  ];

  return (
    <>
      <Navbar />
      <div className="text-gray-800 leading-relaxed overflow-x-hidden">
        <section className="relative pt-28 pb-16 md:pt-32 bg-black text-white">
          <div className="absolute inset-0">
            <img
              src="/images/GreenTruckMining1.webp"
              alt="Green truck mining"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-[#00CC66]/10" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#00CC66]" />
              EPCA Engineering Services
            </div>

            <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
              Design. Build. Deliver.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Diesel-to-electric engineering for heavy-haulage mining electrification, delivered through a proven
              feasibility to deployment workflow.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="/enquiry?subject=engineering-services"
                className="inline-flex items-center justify-center px-10 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-md font-semibold transition-colors uppercase tracking-wide"
              >
                Enquire Now
              </a>
              <a
                href="#core-services"
                className="inline-flex items-center justify-center px-10 py-3 border border-white/30 hover:bg-white/5 text-white rounded-md font-semibold transition-colors uppercase tracking-wide"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        <section id="how-we-deliver" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">A Commercial-Ready Engineering Path</h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                EPCA engineering services span feasibility, design, retrofit delivery, testing and deployment.
              </p>
            </div>

            <div className="mt-14">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
                {deliveryFlow.map((step, idx) => (
                  <div
                    key={step.title}
                    className="min-w-[260px] snap-start rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-sm uppercase tracking-widest text-gray-500">Step {idx + 1}</div>
                      <div className="w-10 h-10 rounded-xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center">
                        <span className="text-[#00CC66] font-bold">{idx + 1}</span>
                      </div>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="core-services" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Core Engineering Services</h2>
            <p className="mt-4 text-gray-600 text-center max-w-3xl mx-auto">
              Focused on heavy-haulage mining electrification: retrofit powertrain engineering, in-house build, energy
              systems, integration, and validation.
            </p>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Retrofit Delivery Models</h2>
            <p className="mt-4 text-gray-600 max-w-3xl">
              EPCA delivers engineering either as a full in-house retrofit at Hazelmere or as exportable retrofit kits
              supported remotely.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {deliveryModels.map((model) => (
                <div key={model.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                  <div className="w-12 h-12 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center">
                    {model.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{model.title}</h3>
                  <p className="mt-3 text-gray-600">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Supporting Engineering Capabilities</h2>
            <p className="mt-4 text-gray-600 max-w-3xl">
              Additional capabilities that support safe, reliable outcomes across design, build, and retrofit delivery.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {supportingCapabilities.map((cap) => (
                <div key={cap.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                  <div className="w-12 h-12 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center">
                    {cap.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{cap.title}</h3>
                  <p className="mt-3 text-gray-600">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold">Engineering Services for Mining Electrification</h2>
                  <p className="mt-4 text-white/80">
                    Start with feasibility. Move through design and retrofit. Validate performance. Then deploy with confidence.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/enquiry?subject=engineering-services"
                    className="inline-flex items-center justify-center px-10 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-md font-semibold transition-colors uppercase tracking-wide"
                  >
                    Enquire Now
                  </a>
                  <a
                    href="#how-we-deliver"
                    className="inline-flex items-center justify-center px-10 py-3 border border-white/30 hover:bg-white/5 text-white rounded-md font-semibold transition-colors uppercase tracking-wide"
                  >
                    Our Workflow
                  </a>
                </div>
              </div>
              <div className="mt-8 text-sm text-white/60">
                Delivered in-house or via exportable retrofit kits. Focused exclusively on heavy-haulage mining electrification.
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default UONSmartCell;
