import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import StatsCounters from '@/components/StatsCounters';

export const metadata: Metadata = {
  title: 'Visa Services – Travel Guy',
  description:
    'Fast and professional visa processing for 120+ countries. Tourist, business, student, and transit visas handled by certified specialists.',
};

/* ─── Visa categories ────────────────────────────────────────────────────── */
const visaTypes = [
  {
    name:        'Tourist Visa',
    turnaround:  '3–5 business days',
    description: 'Single or multiple-entry tourist visas for leisure and holiday travel.',
    color:       'from-blue-500/10 to-brand-navy/20',
    badge:       'Most Popular',
  },
  {
    name:        'Business Visa',
    turnaround:  '2–4 business days',
    description: 'Business visas for meetings, conferences, and corporate engagements.',
    color:       'from-brand-gold/10 to-amber-500/10',
    badge:       'Fast Track',
  },
  {
    name:        'Student Visa',
    turnaround:  '5–7 business days',
    description: 'Student visas for universities and educational institutions worldwide.',
    color:       'from-emerald-500/10 to-teal-500/10',
    badge:       null,
  },
  {
    name:        'Transit Visa',
    turnaround:  '1–2 business days',
    description: 'Short-stay transit visas for stopovers and connecting flights.',
    color:       'from-purple-500/10 to-indigo-500/10',
    badge:       'Quickest',
  },
  {
    name:        'Work Permit',
    turnaround:  '7–14 business days',
    description: 'Employment visas and work permits for international job assignments.',
    color:       'from-rose-500/10 to-pink-500/10',
    badge:       null,
  },
  {
    name:        'Residence Visa',
    turnaround:  '10–21 business days',
    description: 'Long-term residency visas and immigration documentation.',
    color:       'from-orange-500/10 to-red-500/10',
    badge:       null,
  },
];

/* ─── Process steps ──────────────────────────────────────────────────────── */
const steps = [
  {
    number: '01',
    title:  'Submit Your Request',
    body:   'Fill out our simple online form or visit our office. Tell us your destination and travel purpose.',
  },
  {
    number: '02',
    title:  'Document Checklist',
    body:   'Your dedicated case manager sends you a precise document checklist for your specific visa type.',
  },
  {
    number: '03',
    title:  'We Handle the Rest',
    body:   'Our specialists prepare, verify, and submit your application to the embassy on your behalf.',
  },
  {
    number: '04',
    title:  'Collect Your Visa',
    body:   'Receive your approved visa by courier or pick it up from our office — ready to travel!',
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function VisaPage() {
  return (
    <>
      <Navbar />

      {/* ── Page Hero ────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-hero-gradient overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-gold/8 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-brand-navy-mid/40 blur-3xl -translate-x-1/3 translate-y-1/3" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize:  '40px 40px',
            }}
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <nav className="flex justify-center mb-6 text-xs text-white/40" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/70 font-medium">Visa Services</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full
                           text-xs font-semibold tracking-widest uppercase
                           text-brand-gold-light bg-brand-gold/10 border border-brand-gold/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light animate-pulse" />
            120+ Countries Covered
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Visa <br className="hidden sm:block" />
            <span className="text-brand-gold-light">Processing Services</span>
          </h1>

          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Fast, accurate, and stress-free visa applications handled by certified specialists.
            Tourist, business, student, and more — we have you covered.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#visa-types" className="btn-primary">
              View Visa Types
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="#process" className="btn-outline">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Counters ───────────────────────────────────────────────── */}
      <StatsCounters />

      {/* ── Visa Types ───────────────────────────────────────────────────── */}
      <section id="visa-types" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-brand-gold">
              Visa Categories
            </span>
            <h2 className="section-heading text-brand-navy mb-4">
              Find Your Visa Type
            </h2>
            <p className="section-subheading">
              We process all major visa categories with dedicated specialists
              for each type of application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaTypes.map((vt) => (
              <div
                key={vt.name}
                className={`relative group p-7 rounded-2xl border border-gray-100 bg-gradient-to-br ${vt.color}
                            hover:border-brand-gold/30 hover:shadow-card-hover
                            transition-all duration-300 hover:-translate-y-1`}
              >
                {vt.badge && (
                  <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full
                                   text-[10px] font-semibold tracking-wide
                                   bg-brand-gold text-white shadow-gold">
                    {vt.badge}
                  </span>
                )}
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-1.5">{vt.name}</h3>
                <p className="text-xs font-medium text-brand-gold mb-3 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
                  </svg>
                  {vt.turnaround}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{vt.description}</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy
                             group-hover:text-brand-gold transition-colors duration-200"
                >
                  Apply Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section id="process" className="py-16 sm:py-20 lg:py-24 bg-brand-light">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-brand-gold">
              Simple Process
            </span>
            <h2 className="section-heading text-brand-navy mb-4">
              How It Works
            </h2>
            <p className="section-subheading">
              We&apos;ve streamlined the visa process so you never have to worry
              about missing a step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Connector line (desktop only) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-brand-navy/10" aria-hidden="true" />

            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-6 w-20 h-20 rounded-full bg-brand-navy
                                flex items-center justify-center shadow-lg">
                  <span className="font-heading text-2xl font-bold text-brand-gold-light">{step.number}</span>
                </div>
                <h3 className="font-semibold text-brand-navy text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-brand-navy">
        <div className="container-custom text-center">
          <h2 className="section-heading text-white mb-4">
            Start Your Visa Application Today
          </h2>
          <p className="section-subheading text-white/60 mb-10 mx-auto">
            Contact our specialists for a free assessment. We&apos;ll tell you exactly
            what you need before you submit a single document.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Get Free Assessment
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </Link>
            <Link href="/" className="btn-outline">
              Back to Home
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
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <Link href="/visa" className="hover:text-white/60 transition-colors">Visa Services</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
