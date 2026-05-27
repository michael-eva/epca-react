import { useState, useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';
import FiniteCarCarousel from '../../components/ImgCarousel/finite-car-carousel';
import TCOCalculator from '../../components/TCOCalculator';
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

const E777D = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-10 h-10 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Battery System',
      description:
        'A 1,530 kWh lithium-ion battery system engineered for extended runtime in heavy mining cycles. Built to withstand the harshest conditions while delivering consistent, high-performance output across every shift.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      title: 'Electric Powertrain',
      description:
        'The E-777 delivers 1,020 kW peak power and 6,100 Nm of instant torque, outperforming the diesel equivalent by 21%. Full torque is available from zero RPM, giving operators more control and productivity at every stage of the haul cycle.',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-[#00CC66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: 'Data and Analytics',
      description:
        'The E-777 continuously collects over 3,000 real-time data points from the powertrain and streams them to a cloud-based historian platform, giving operations teams live visibility into machine health, performance, and efficiency.',
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
              src="/images/truck2.webp"
              alt="E-777 Battery-Electric Mining Truck"
              className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? 'opacity-55' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-[#00CC66]/8 blur-[120px] rounded-full" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 pb-24 w-full">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#00CC66]/40 bg-[#00CC66]/10 text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00CC66]" />
              100-Ton Battery-Electric Mining Truck
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight mb-6">
              E-777<br />
              <span className="text-[#00CC66]">Mining Truck</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Built for tough mining conditions. Zero emissions. Eight hours of continuous runtime on a single charge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/enquiry?subject=e-777d"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CC66] hover:bg-[#00e673] text-black rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:shadow-[0_0_40px_rgba(0,204,102,0.5)]"
              >
                Enquire Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://public-pdf-sharing.s3.ap-southeast-2.amazonaws.com/E-777+Datasheet+-+ENGLISH.pdf"
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
              <AnimatedStat value={100} suffix="%" label="Zero Emissions" sublabel="Zero direct CO2 output" />
              <AnimatedStat value={8}   suffix="hr"  label="Shift Runtime"   sublabel="On a single charge" />
              <AnimatedStat value={54}  suffix="%" label="Lower Operating Costs" sublabel="Versus diesel equivalent" />
              <AnimatedStat value={50}  suffix="min" label="Fast Charge"     sublabel="With high-speed DC charging" />
            </div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-5">About the E-777</p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                  The World's Highest<br />Energy Density 100-Ton<br />Electric Mining Truck
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-5">
                  The E-777 is EPCA's fully battery-electric retrofit of a 100-ton mining truck and the highest energy density electric mining truck in the world. Built from the chassis of a CAT 777D, this machine combines proven mining design with a powerful zero-emission electric drivetrain.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With 8 hours of continuous runtime per charge, a 50-minute fast charge, and 21% more power than its diesel counterpart, the E-777 is engineered to meet the demands of modern mining, without the noise, fuel costs, or emissions.
                </p>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden">
                  <img
                    src="/images/truck3.webp"
                    alt="E-777 Mining Truck"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-5">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">Payload Capacity</p>
                  <p className="text-3xl font-extrabold text-gray-900">
                    100<span className="text-lg font-semibold text-gray-500 ml-1">tonnes</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Industry-leading electric haulage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Image Carousel ── */}
        <FiniteCarCarousel />

        {/* ── Retrofit Section ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl overflow-hidden order-last md:order-first">
                <img
                  src="/images/truck8.webp"
                  alt="E-777 Retrofit"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-5">The Retrofit Approach</p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                  A Smarter Way to Electrify Your Fleet
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-5">
                  Retrofitting with EPCA means transforming your diesel truck into a battery-electric machine. The E-777 keeps 80% of its original structure while replacing the diesel components with a high-efficiency electric powertrain.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This extends the life of existing, trusted equipment, reduces fuel and maintenance costs, and avoids the long lead times and capital outlay of replacing an entire fleet. It is a smart upgrade with long-term operational benefits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-4">Engineering</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Built to Outperform</h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Three core engineering pillars that make the E-777 the benchmark for battery-electric mining trucks.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center mb-6 group-hover:bg-[#00CC66]/15 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TCO Calculator ── */}
        <section className="py-20 bg-white">
          <TCOCalculator />
        </section>

        {/* ── Technical Specifications ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-4">Specifications</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">Technical Data</h2>
              <p className="mt-5 text-gray-500 text-lg">E-777 100-Ton Battery-Electric Mining Truck technical parameters.</p>
            </div>

            <div className="space-y-14">
              {[
                {
                  label: 'Performance',
                  rows: [
                    { label: 'Payload Capacity', value: '100 tons', note: 'Industry-leading electric haulage' },
                    { label: 'Peak Power', value: '1,020 kW', note: '21% more than the diesel equivalent' },
                    { label: 'Peak Torque', value: '6,100 Nm', note: 'Instant torque at all speeds' },
                  ],
                },
                {
                  label: 'Battery and Charging',
                  rows: [
                    { label: 'Battery Type', value: 'Lithium-ion', note: 'Advanced cell chemistry optimised for energy density' },
                    { label: 'Battery Capacity', value: '1,530 kWh', note: 'High-density energy storage' },
                    { label: 'Charging Time', value: '50 minutes', note: 'With high-speed DC charging infrastructure' },
                  ],
                },
                {
                  label: 'Operation',
                  rows: [
                    { label: 'Runtime', value: '8 hrs', note: 'Aligned to standard operator break intervals' },
                    { label: 'Maximum Speed', value: '67 km/h', note: 'Safety-limited for mining applications' },
                    { label: 'Gradeability', value: 'Up to 20%', note: 'At full payload' },
                  ],
                },
                {
                  label: 'Economics and Environment',
                  rows: [
                    { label: 'Operational Cost Reduction', value: '67%', note: 'Compared to the diesel equivalent' },
                    { label: 'Maintenance Cost Reduction', value: '34%', note: 'Fewer moving parts, no engine service' },
                    { label: 'CO2 Reduction', value: '100%', note: 'Zero direct emissions at point of operation' },
                    { label: 'Warranty', value: '1 yr / 6,000 hrs', note: '5-year extended warranty available' },
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
              src="/images/truck4.webp"
              alt="E-777 Mining Truck"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#00CC66]/10 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[#00CC66] mb-6">E-777 Mining Truck</p>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Ready to Electrify<br />Your Fleet?
            </h2>
            <p className="text-xl text-white/60 max-w-xl mx-auto mb-12 leading-relaxed">
              The E-777 is available now. Talk to our team about deployment, retrofit, or fleet transition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/enquiry?subject=e-777d"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#00CC66] hover:bg-[#00e673] text-black rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200 hover:shadow-[0_0_50px_rgba(0,204,102,0.6)]"
              >
                Enquire Now
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://public-pdf-sharing.s3.ap-southeast-2.amazonaws.com/E-777+Datasheet+-+ENGLISH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-200"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default E777D;
