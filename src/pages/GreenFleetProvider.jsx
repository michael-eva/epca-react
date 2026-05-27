import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GreenFleetProvider = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const valuePillars = [
    {
      number: '01',
      title: 'Zero Capital Outlay',
      description:
        'No equipment purchase required. You transition to electric operations entirely through your operating budget, with no upfront capital commitment.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Risk Transfer',
      description:
        'EPCA retains all technology risk, asset performance risk, and residual value risk. If the machine underperforms, that is our problem to solve, not yours.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4zM9 12l2 2 4-5" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Predictable Costs',
      description:
        'Fixed hourly or monthly rates replace unpredictable fuel and maintenance bills. Your operations team can plan around a stable, known cost per hour.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Operational Continuity',
      description:
        'Built on proven Caterpillar platforms with around 80% of original OEM systems retained. Your operators work with familiar machines and familiar components.',
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We analyse your duty cycle, haul profile, shift structure, and energy requirements to configure the right fleet for your site.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Deployment',
      description: 'EPCA mobilises the electric fleet and charging infrastructure to your site. We handle logistics, commissioning, and operator handover.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Your Team Operates',
      description: 'Your operators run the equipment as they normally would. The machines behave like the diesel platforms your team already knows.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'EPCA Manages',
      description: 'We handle all maintenance, performance monitoring, and upgrades. Our team keeps the fleet running at peak performance throughout the agreement.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const included = [
    {
      title: 'Electric Fleet',
      items: ['Battery-electric haul trucks', 'Battery-electric wheel loaders', 'Ancillary electric equipment'],
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v10H3zM14 10h4l3 3v4h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 19a1.5 1.5 0 1 0 0 .01M18 19a1.5 1.5 0 1 0 0 .01" />
        </svg>
      ),
    },
    {
      title: 'Charging Infrastructure',
      items: ['High-power DC charging stations', 'Modular deployment options', 'Off-grid capable configurations'],
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L6 14h7l-1 7 8-11h-7l1-7z" />
        </svg>
      ),
    },
    {
      title: 'Maintenance and Monitoring',
      items: ['Scheduled and reactive maintenance', 'Real-time fleet performance monitoring', 'Remote diagnostics and fault response'],
      icon: (
        <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
              alt="EPCA Green Fleet Provider"
              className={`w-full h-full object-cover transition-opacity duration-1000 ${heroLoaded ? 'opacity-40' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-24 w-full">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#00CC66]/40 bg-[#00CC66]/10 text-xs uppercase tracking-[0.2em] text-[#00CC66] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00CC66] animate-pulse" />
              Fleet-as-a-Service
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.0] tracking-tight max-w-4xl mb-8">
              Electric Fleets.<br />
              <span className="text-[#00CC66]">No Capital.</span><br />
              Fully Managed.
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed mb-10">
              EPCA deploys battery-electric mining equipment under fixed-rate operating agreements. You operate. We own, maintain, and optimise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/enquiry?subject=green-fleet-provider"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00CC66] hover:bg-[#00e673] text-black rounded-lg font-bold text-sm uppercase tracking-widest transition-all duration-200"
              >
                Talk to Our Team
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/25 hover:border-white/50 hover:bg-white/5 text-white rounded-lg font-semibold text-sm uppercase tracking-widest transition-all duration-200"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ── Core Proposition ── */}
        <section className="border-b border-gray-100 bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">The Model</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
                From equipment supplier to long-term fleet partner
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                EPCA acquires, electrifies, owns, and operates mining equipment. Your site gets a fully electrified fleet without a single dollar of capital expenditure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {valuePillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="group rounded-2xl border border-gray-200 bg-white p-7 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center group-hover:bg-[#00CC66]/15 transition-colors duration-300">
                      {pillar.icon}
                    </div>
                    <span className="text-3xl font-extrabold text-gray-100">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">Process</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Simple from Your Side
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                Four steps from initial conversation to a fully electrified fleet operating on your site.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00CC66]/20 to-transparent" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                {steps.map((step, idx) => (
                  <div key={step.title} className="relative group">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center text-[#00CC66]">
                          {step.icon}
                        </div>
                        <span className="text-3xl font-extrabold text-gray-100">
                          {step.step}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                    {idx < steps.length - 1 && (
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

        {/* ── What's Included ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-5">Bundled Service</p>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                  Everything Included
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-10">
                  One agreement, one rate, everything managed. The Green Fleet Provider service covers the complete operating picture.
                </p>
                <div className="space-y-4">
                  {included.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <h3 className="text-base font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {item.items.map((i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-gray-500">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00CC66] flex-shrink-0" />
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-gray-100">
                  <img
                    src="/images/EPCACharger.webp"
                    alt="EPCA Charging Infrastructure"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 max-w-xs">
                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">Commercial Structure</p>
                  <p className="text-gray-900 font-bold mb-1">Fixed hourly or monthly rate</p>
                  <p className="text-gray-500 text-sm">No capital outlay. No ownership risk. No surprises.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Image Break ── */}
        <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
          <img
            src="/images/truck5.webp"
            alt="Electric mining operations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-white/60 text-xs uppercase tracking-[0.3em] mb-4">Built for Australian Mining</p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
                Start with one machine. Scale to your whole fleet.
              </h2>
            </div>
          </div>
        </section>

        {/* ── Why This Fits Mining ── */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">Built for the Industry</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                Why This Model Works for Mining
              </h2>
              <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                The Green Fleet Provider model is designed around how Australian mining actually operates.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Fleets Built to Last Decades',
                  description:
                    'Australian mining fleets typically operate for 30 to 40 years. That extended lifecycle makes diesel-to-electric conversion a high-return investment, and the hire model makes it accessible without the upfront cost.',
                  icon: (
                    <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
                {
                  title: 'Contractors Already Hire Equipment',
                  description:
                    'Mining contractors are accustomed to dry-hire and operating lease structures. The Green Fleet Provider model fits naturally into existing commercial frameworks, making the transition straightforward.',
                  icon: (
                    <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  title: 'Scalable Transition Path',
                  description:
                    'Start with a single loader or haul truck. Add machines as confidence builds. Over time, scale into a full electrified fleet supported by an integrated on-site energy system.',
                  icon: (
                    <svg className="w-6 h-6 text-[#00CC66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#00CC66]/10 border border-[#00CC66]/20 flex items-center justify-center mb-5 group-hover:bg-[#00CC66]/15 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Typical Deployment ── */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-2xl mb-16">
              <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">Typical Deployment</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                What It Looks Like in Practice
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  phase: 'Start',
                  title: '1 to 2 machines',
                  detail: 'A single loader or haul truck deployed on a dry-hire agreement. Low commitment, immediate results.',
                },
                {
                  phase: 'Grow',
                  title: 'Multi-machine fleet',
                  detail: 'Expand to multiple machines across your fleet, with onsite charging infrastructure integrated into site operations.',
                },
                {
                  phase: 'Scale',
                  title: 'Full fleet electrification',
                  detail: 'A fully electrified fleet supported by an integrated power and energy system, all under a single service agreement.',
                },
              ].map((phase) => (
                <div
                  key={phase.phase}
                  className="relative rounded-3xl border border-gray-200 bg-gray-50 p-8 overflow-hidden group hover:border-[#00CC66]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00CC66]/5 rounded-full blur-xl group-hover:bg-[#00CC66]/10 transition-all duration-500" />
                  <div className="relative">
                    <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#00CC66]/20 bg-[#00CC66]/8 text-[#00874a] text-xs uppercase tracking-wider mb-5 font-semibold">
                      {phase.phase}
                    </span>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{phase.detail}</p>
                  </div>
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
                  <p className="text-base md:text-lg font-bold uppercase tracking-[0.15em] text-[#00CC66] mb-4">Get Started</p>
                  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                    Tell Us About Your Fleet
                  </h2>
                  <p className="mt-5 text-gray-500 text-lg leading-relaxed">
                    Share your machine types, haul profile, and shift hours. We will come back with a fleet configuration, energy solution, and commercial offer.
                  </p>
                  <p className="mt-4 text-sm text-gray-400">
                    Electric haul trucks. Electric wheel loaders. Charging infrastructure. All under one agreement.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                  <a
                    href="/enquiry?subject=green-fleet-provider"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00CC66] hover:bg-[#00b359] text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-all duration-200"
                  >
                    Talk to Our Team
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="/feasability-study"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-200"
                  >
                    Request Feasibility Study
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

export default GreenFleetProvider;
