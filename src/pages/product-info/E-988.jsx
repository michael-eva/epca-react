import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ── Animated count-up hook ── */
const useCountUp = (target, duration = 1800, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const targetStr = String(target);
    const decimalPlaces = targetStr.includes('.') ? targetStr.split('.')[1].length : 0;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      if (progress >= 1) {
        setValue(target);
      } else {
        const current = progress * target;
        setValue(
          decimalPlaces > 0
            ? Number(current.toFixed(decimalPlaces))
            : Math.floor(current)
        );
      }
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

/* ── Animated stat ── */
const AnimatedStat = ({ value, suffix = '', label, sublabel }) => {
  const [ref, inView] = useInView(0.4);
  const count = useCountUp(value, 1600, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-none tracking-tight">
        {count}{suffix}
      </div>
      <p className="mt-3 text-base font-semibold text-gray-700">{label}</p>
      {sublabel && <p className="mt-1 text-sm text-gray-500">{sublabel}</p>}
    </div>
  );
};

const E988 = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 3L6 14h7l-1 7 8-11h-7l1-7z" />
        </svg>
      ),
      title: 'Electric Powertrain',
      description:
        'A purpose-engineered electric drive system replaces the diesel powertrain: delivering instant full torque across the entire operating range, with zero warm-up time.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Extended Runtime',
      description:
        'Engineered around real-world loading duty cycles. High-density lithium-ion storage supports continuous production shifts with scheduled fast-charge windows.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Safety & Control',
      description:
        'Integrated safety-rated control system with real-time diagnostics, fault monitoring, and remote telemetry, designed for mine-site functional safety requirements.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Mine-Ready Build',
      description:
        'Built on the proven CAT 988 platform, retaining the trusted structural chassis, operator environment, and serviceability while transforming the powertrain to zero-emission electric.',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-gray-800 leading-relaxed overflow-x-hidden">

        {/* ── Hero ── */}
        <section className="h-screen flex items-end relative overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img
              src="/images/988green1.webp"
              alt="E-988 Electric Wheel Loader"
              className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? 'opacity-60' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            {/* Green ambient glow */}
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-[#00CC66]/8 blur-[100px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 pb-24 w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#00CC66]/40 bg-[#00CC66]/10 text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00CC66]" />
              50-Ton Battery-Electric Wheel Loader
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-6">
              E-988<br />
              <span className="text-[#00CC66]">Wheel Loader</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Battery-electric. Mine-ready. Built on the proven CAT 988 platform with zero diesel, zero compromise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/enquiry?subject=e-988"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CC66] hover:bg-[#00e673] text-black rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,204,102,0.5)]"
              >
                Enquire Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://public-pdf-sharing.s3.ap-southeast-2.amazonaws.com/E-988+Datasheet+-+ENGLISH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-200"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>

        {/* ── Key Stats ── */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:divide-x divide-gray-100">
              <AnimatedStat value={100} suffix="%" label="Zero Emissions" sublabel="No direct CO₂ output" />
              <AnimatedStat value={53} suffix="%" label="Lower Operating Costs" sublabel="Versus diesel equivalent" />
              <AnimatedStat value={7.5} suffix="hr" label="Shift Runtime" sublabel="Per full charge cycle" />
              <AnimatedStat value={50} suffix="min" label="Fast Charge" sublabel="High-speed DC charging" />
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-5">About the E-988</p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                  The World's First<br />Battery-Electric<br />Wheel Loader
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-5">
                  The E-988 is the world's first battery-electric conversion of a large wheel loader built at EPCA's workshop. Based on the industry-standard CAT 988, retaining 80% of the original machine's proven structure, the diesel powertrain is replaced with a high-performance electric drive system delivering instant torque, reduced noise, and zero direct emissions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Designed for loading operations in open-cut and underground mining environments, the E-988
                  supports continuous production with planned fast-charge windows aligned to standard shift rotations.
                  It's the practical, proven path to electrifying your loading fleet.
                </p>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="/images/988green1.webp"
                    alt="E-988 Electric Wheel Loader"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating stat card */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Payload Capacity</p>
                  <p className="text-3xl font-extrabold text-gray-900">
                    12.5<span className="text-lg font-semibold text-gray-500 ml-1">m³</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Standard bucket configuration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-4">Engineering</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Built Different</h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Four engineering pillars that define why the E-988 is the right electric loader for your fleet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center mb-6 group-hover:bg-[#00CC66]/15 transition-colors duration-300">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Image section ── */}
        <section className="bg-white py-28 md:px-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="rounded-3xl overflow-hidden mb-12">
              <img
                src="/images/988green1.webp"
                alt="E-988 on site"
                className="w-full h-[400px] md:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">A Smarter Way to Load</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                By converting your existing 988 fleet rather than replacing it, you retain trusted equipment and
                deep operator familiarity while cutting fuel costs, reducing maintenance spend, and eliminating
                direct emissions from your loading operations.
              </p>
            </div>
          </div>
        </section>

        {/* ── Technical Specifications ── */}
        <section id="specifications" className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-4">Specifications</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Technical Data</h2>
              <p className="mt-5 text-gray-500 text-lg">E-988 Electric Wheel Loader technical parameters.</p>
            </div>

            <div className="space-y-14">
              {[
                {
                  label: 'Performance',
                  rows: [
                    { label: 'Bucket Capacity', value: 'Up to 12.5 m³', note: 'Standard loading configuration' },
                    { label: 'Peak Power', value: '660 kW', note: 'Electric motor output' },
                    { label: 'Peak Torque', value: 'Instant', note: 'Full torque from zero RPM' },
                  ],
                },
                {
                  label: 'Battery and Charging',
                  rows: [
                    { label: 'Battery Type', value: 'Lithium-ion', note: 'High-density mining-grade cells' },
                    { label: 'Battery Capacity', value: '1,020 kWh', note: 'High-density storage' },
                    { label: 'Charging Time', value: '50 min', note: 'With DC fast charging infrastructure' },
                  ],
                },
                {
                  label: 'Operation',
                  rows: [
                    { label: 'Runtime per Charge', value: '~7.5 hours', note: 'Typical loading duty cycle' },
                    { label: 'Operating Weight', value: '~90,000 kg', note: 'Fully loaded configuration' },
                    { label: 'Base Platform', value: 'CAT 988', note: '80% original structure retained' },
                  ],
                },
                {
                  label: 'Economics and Environment',
                  rows: [
                    { label: 'Operational Cost Reduction', value: '70%', note: 'Compared to diesel equivalent' },
                    { label: 'Maintenance Cost Reduction', value: '36%', note: 'Fewer moving parts, no engine service' },
                    { label: 'CO2 Reduction', value: '100%', note: 'Zero direct emissions at point of operation' },
                  ],
                },
              ].map((group) => (
                <div key={group.label}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-5 rounded-full bg-[#00CC66]" />
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{group.label}</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
                    {group.rows.map((row) => (
                      <div key={row.label} className="bg-white p-7">
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">{row.label}</p>
                        <p className="text-2xl font-extrabold text-gray-900 mb-1">{row.value}</p>
                        <p className="text-sm text-gray-400">{row.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="h-screen relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/988green1.webp"
              alt="E-988 Wheel Loader"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00CC66]/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00CC66] mb-6">E-988 Wheel Loader</p>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Ready to Electrify<br />Your Loading Fleet?
            </h2>
            <p className="text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              The E-988 is now available. Speak with our engineering team about deployment for your site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/enquiry?subject=e-988"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#00CC66] hover:bg-[#00e673] text-black rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:shadow-[0_0_50px_rgba(0,204,102,0.6)]"
              >
                Enquire Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/feasability-study"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-200"
              >
                Feasibility Study
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default E988;
