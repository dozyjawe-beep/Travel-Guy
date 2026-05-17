import Link from 'next/link';
import Navbar from '@/components/Navbar';
import StatsCounters from '@/components/StatsCounters';

/* ─── Services data ──────────────────────────────────────────────────────── */
const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path strokeLinecap="round" d="M2 10h20M6 15h4M14 15h4" />
      </svg>
    ),
    title:       'Visa Processing',
    description: 'Fast, accurate visa applications for 120+ countries with real-time tracking.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
      </svg>
    ),
    title:       'Document Authentication',
    description: 'Apostille, notarisation, and legalisation services handled end-to-end.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
        <path strokeLinecap="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title:       'Travel Consultancy',
    description: 'Expert guidance on entry requirements, health documentation, and travel advisories.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title:       'Premium Support',
    description: 'Dedicated case managers and 24/7 support throughout your application.',
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-navy-mid/30 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-gold/10 blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize:  '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10 py-32 sm:py-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full
                             text-xs font-semibold tracking-widest uppercase
                             text-brand-gold-light bg-brand-gold/10 border border-brand-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light animate-pulse" />
              Trusted Since 2009
            </span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6">
              Your Journey Starts with{' '}
              <span className="text-brand-gold-light">the Right Visa</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-xl">
              Professional visa processing and travel documentation for 120+ countries.
              Trusted by over 50,000 happy travellers worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/visa" className="btn-primary">
                Start Your Application
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Link>
              <Link href="#services" className="btn-outline">
                Our Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-14 flex flex-wrap items-center gap-6">
              {['IATA Certified', 'ISO 9001:2015', 'SSL Secured', '5-Star Rated'].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 text-white/50 text-xs font-medium">
                  <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── Stats Counters ───────────────────────────────────────────────── */}
      <StatsCounters />

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-brand-gold">
                About Travel Guy
              </span>
              <h2 className="section-heading text-brand-navy mb-6">
                Over 15 Years of <br className="hidden sm:block" />
                <span className="text-brand-gold">Travel Expertise</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Founded in 2009, Travel Guy has grown into one of the region&apos;s most trusted
                visa and travel documentation agencies. We simplify the complex paperwork
                so you can focus on the journey ahead.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Our dedicated team of certified specialists has successfully processed
                over 10,000 visa applications across 120+ countries — on time, every time.
              </p>
              <Link href="/visa" className="btn-primary">
                Explore Visa Services
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-brand-light overflow-hidden shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-brand-navy/10 via-brand-gold/5 to-brand-navy-mid/20 flex items-center justify-center">
                  <svg className="w-24 h-24 text-brand-navy/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-brand-navy rounded-2xl p-5 shadow-card-hover">
                <p className="text-3xl font-bold text-brand-gold-light font-heading">15+</p>
                <p className="text-xs text-white/70 mt-0.5">Years of<br />Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-brand-gold">
              What We Offer
            </span>
            <h2 className="section-heading text-brand-navy mb-4">
              Comprehensive Travel Services
            </h2>
            <p className="section-subheading">
              From tourist visas to complex corporate travel documentation —
              we handle it all with precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group p-7 rounded-2xl bg-white border border-gray-100 hover:border-brand-gold/30
                           hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-5 w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center
                                text-brand-navy group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                  {svc.icon}
                </div>
                <h3 className="font-semibold text-brand-navy mb-2 text-base">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-brand-navy">
        <div className="container-custom text-center">
          <h2 className="section-heading text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="section-subheading text-white/60 mb-10 mx-auto">
            Get a free consultation from our visa experts today. No hidden fees,
            just honest guidance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/visa" className="btn-primary">
              Apply for a Visa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
            <Link href="#contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="py-8 bg-brand-navy-dark border-t border-white/5">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span className="font-heading font-semibold text-white/50">
            Travel<span className="text-brand-gold">Guy</span>
          </span>
          <span>© {new Date().getFullYear()} Travel Guy. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/visa" className="hover:text-white/60 transition-colors">Visa Services</Link>
            <Link href="#about" className="hover:text-white/60 transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
