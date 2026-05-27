import { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ── Animated count-up hook ── */
const useCountUp = (target, duration = 1800, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
};

/* ── Intersection observer hook ── */
const useInView = (threshold = 0.3) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* ── Stat counter component ── */
const StatCounter = ({ value, suffix = '', label, sublabel }) => {
  const [ref, inView] = useInView(0.4);
  const count = useCountUp(value, 1600, inView);
  return (
    <div ref={ref} className="text-center px-6 md:px-8">
      <div className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-none tracking-tight">
        {count}<span className="text-gray-900">{suffix}</span>
      </div>
      <p className="mt-3 text-base md:text-lg font-semibold text-gray-700">{label}</p>
      {sublabel && <p className="mt-1 text-sm text-gray-500">{sublabel}</p>}
    </div>
  );
};

const EngineeringServices = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const coreServices = [
    {
      title: 'Diesel-to-Electric Powertrain Retrofit',
      description:
        'End-to-end engineering and integration to convert heavy-haulage mining equipment to full electric operation, from feasibility through to commission.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h7l-2 2m2-2 3-3 6 6-3 3-2-2-3 3-2-2H3z" />
        </svg>
      ),
    },
    {
      title: 'Electric Mining Truck Design and Build',
      description:
        'In-house engineering, manufacturing, and full-assembly of battery-electric mining trucks at EPCA\'s Hazelmere facility in Western Australia.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 19a1.5 1.5 0 1 0 0 .01M18 19a1.5 1.5 0 1 0 0 .01" />
        </svg>
      ),
    },
    {
      title: 'Feasibility Studies',
      description:
        'Rigorous assessment of runtime requirements, duty cycles, recharge windows, and mine-site suitability prior to any retrofit or new-build deployment.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      title: 'Powertrain Engineering and Integration',
      description:
        'Full-stack electrical engineering across motors, inverters, high-voltage battery systems, control architectures, and functional safety compliance.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M7 12h10M9 17h6" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        </svg>
      ),
    },
    {
      title: 'Charging and Energy Systems',
      description:
        'High-power DC charging engineering, modular deployment strategies, and off-grid-capable energy solutions scaled for heavy mining fleets.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L6 14h7l-1 7 8-11h-7l1-7z" />
        </svg>
      ),
    },
    {
      title: 'Testing, Commissioning and Validation',
      description:
        'Structured performance validation, test-drive programmes, and commissioning protocols to verify readiness before operational deployment.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      ),
    },
  ];

  const deliveryFlow = [
    {
      step: '01',
      title: 'Feasibility',
      description: 'Assess runtime, duty cycles, and mine-site suitability.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Design',
      description: 'Engineer the powertrain, controls, and system integration.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Build and Retrofit',
      description: 'Convert in-house or develop exportable retrofit kits.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Test and Validate',
      description: 'Commission, validate, and performance-certify the machine.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
        </svg>
      ),
    },
    {
      step: '05',
      title: 'Deploy',
      description: 'Support operational rollout with ongoing engineering oversight.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
  ];

  const deliveryModels = [
    {
      title: 'In-House Retrofit Engineering',
      description:
        'Full retrofit engineering and conversion performed at EPCA\'s Hazelmere, Western Australia facility: a quality-assured environment from first cut to final commission.',
      tag: 'Hazelmere Facility',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4v13H3V7zM7 20v-8h10v8" />
        </svg>
      ),
    },
    {
      title: 'Exportable Retrofit Kit',
      description:
        'EPCA engineers and packages electric powertrain retrofit kits for deployment elsewhere, supported by remote technical assistance and documentation for international operators.',
      tag: 'Global Deployment',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-gray-800 leading-relaxed overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/GreenTruckMining1.webp"
              alt="EPCA Engineering Services"
              className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? 'opacity-45' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-24 w-full">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#00CC66]/40 bg-[#00CC66]/10 text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00CC66] animate-pulse" />
              EPCA Engineering Services
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight max-w-4xl mb-8">
              Design.<br />
              <span className="text-[#00CC66]">Build.</span><br />
              Deliver.
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
              Heavy-haulage mining electrification, from feasibility through design, retrofit engineering and field deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/enquiry?subject=engineering-services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00CC66] hover:bg-[#00e673] text-black rounded-lg font-bold text-sm uppercase tracking-widest transition-all duration-200"
              >
                Enquire Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#delivery-workflow"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white rounded-lg font-semibold text-sm uppercase tracking-widest transition-all duration-200"
              >
                Our Workflow
              </a>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-gray-100">
              <StatCounter value={6} suffix="" label="Service Disciplines" sublabel="Across the full engineering lifecycle" />
              <StatCounter value={2} suffix="" label="Delivery Models" sublabel="In-house or exportable kit" />
              <StatCounter value={100} suffix="%" label="Mining-Focused" sublabel="Heavy haulage, purpose-built" />
              <StatCounter value={4} suffix="" label="WA Facility" sublabel="Across Western Australia" />
            </div>
          </div>
        </section>

        {/* ── Delivery Workflow ── */}
        <section id="delivery-workflow" className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">How We Work</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                A Proven Path from Concept to Commission
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Every engagement follows a structured five-stage engineering workflow, ensuring predictable outcomes at every milestone.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00CC66]/20 to-transparent" />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
                {deliveryFlow.map((step, idx) => (
                  <div key={step.title} className="relative group">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center text-[#00CC66]">
                          {step.icon}
                        </div>
                        <span className="text-3xl font-extrabold text-gray-100 group-hover:text-[#00CC66]/20 transition-colors duration-300">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                    {idx < deliveryFlow.length - 1 && (
                      <div className="md:hidden flex justify-center my-2">
                        <div className="w-px h-5 bg-gray-200" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Services ── */}
        <section id="core-services" className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">What We Do</p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Core Engineering Services</h2>
                <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                  Six specialised disciplines spanning the full mining electrification journey.
                </p>
              </div>
              <a
                href="/enquiry?subject=engineering-services"
                className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-200"
              >
                Get in Touch
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {coreServices.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center group-hover:bg-[#00CC66]/15 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{service.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Image Break ── */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src="/images/GreenTruckMining1.webp"
            alt="EPCA in the field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-4">Built in Western Australia</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
                Engineering without compromise, for mines that cannot afford it.
              </h2>
            </div>
          </div>
        </section>

        {/* ── Delivery Models ── */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">Delivery</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Two Ways to Work With Us</h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                EPCA delivers engineering either as a complete in-house retrofit at our Hazelmere facility, or as an exportable retrofit kit with remote support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {deliveryModels.map((model) => (
                <div
                  key={model.title}
                  className="group relative rounded-3xl border border-gray-200 bg-white p-10 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00CC66]/20 bg-[#00CC66]/8 text-[#00874a] text-xs uppercase tracking-wider mb-6 font-semibold">
                    {model.tag}
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center mb-6">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Supporting Capabilities ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Additional Engineering Depth</h2>
              <p className="mt-5 text-gray-500 text-lg">
                Underpinning every project with specialised capabilities in heavy-industry EV engineering and functional safety.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Electric Vehicle Engineering for Heavy Industry',
                  description: 'Purpose-built battery-electric vehicle engineering for mining and heavy haulage, not adapted from passenger or light-commercial platforms.',
                  icon: (
                    <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18h6M12 2l3 7H9l3-7zM4 10h16l-2 12H6L4 10z" />
                    </svg>
                  ),
                },
                {
                  title: 'Functional Safety and Control Systems',
                  description: 'Safety-rated control architectures designed for the operational demands and risk profile of electric mining vehicles operating at full duty cycles.',
                  icon: (
                    <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4zM9 12l2 2 4-5" />
                    </svg>
                  ),
                },
              ].map((cap) => (
                <div
                  key={cap.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center mb-5 group-hover:bg-[#00CC66]/15 transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{cap.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="relative rounded-3xl overflow-hidden border border-[#00CC66]/20 bg-white p-12 md:p-16 shadow-sm">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#00CC66]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
                <div className="max-w-xl">
                  <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">Start the Conversation</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                    Engineering Services for Mining Electrification
                  </h2>
                  <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                    Begin with a feasibility study. Move through design and retrofit. Validate performance. Deploy with confidence.
                  </p>
                  <p className="mt-4 text-sm text-gray-400">
                    Delivered in-house at Hazelmere or via exportable retrofit kits. Exclusively focused on heavy-haulage mining.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                  <a
                    href="/enquiry?subject=engineering-services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200"
                  >
                    Enquire Now
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/feasability-study"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-200"
                  >
                    Feasibility Study
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EngineeringServices;
