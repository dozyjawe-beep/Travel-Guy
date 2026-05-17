'use client';

import { useEffect, useRef, useState } from 'react';

/* ─── Types ─────────────────────────────────────────────────────────────── */
interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

/* ─── Icon components ────────────────────────────────────────────────────── */
function IconYears() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClients() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconVisas() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h20" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 15h4M14 15h4" />
    </svg>
  );
}

function IconCountries() {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" />
      <path strokeLinecap="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/* ─── Stats data ─────────────────────────────────────────────────────────── */
const STATS: Stat[] = [
  {
    value:       15,
    suffix:      '+',
    label:       'Years of Experience',
    description: 'A decade and a half of trusted expertise in visa & travel.',
    icon:        <IconYears />,
  },
  {
    value:       50,
    suffix:      'K+',
    label:       'Happy Clients',
    description: 'Thousands of satisfied travellers trust us every year.',
    icon:        <IconClients />,
  },
  {
    value:       10,
    suffix:      'K+',
    label:       'Visas Completed',
    description: 'Successful visa applications processed with precision.',
    icon:        <IconVisas />,
  },
  {
    value:       120,
    suffix:      '+',
    label:       'Countries Worldwide',
    description: 'Global coverage for your travel requirements.',
    icon:        <IconCountries />,
  },
];

/* ─── Counter hook ───────────────────────────────────────────────────────── */
function useCountUp(target: number, duration: number, active: boolean): number {
  const [count, setCount] = useState(0);
  const rafRef            = useRef<number | null>(null);
  const startTimeRef      = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;

    startTimeRef.current = null;

    const tick = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed  = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [active, target, duration]);

  return count;
}

/* ─── Single stat card ───────────────────────────────────────────────────── */
function StatCard({ stat, index, isVisible }: { stat: Stat; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 1800, isVisible);

  return (
    <div
      className="relative group flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl
                 bg-white/[0.06] border border-white/[0.12]
                 backdrop-blur-sm
                 transition-all duration-500 ease-out
                 hover:bg-white/[0.10] hover:border-brand-gold/40 hover:-translate-y-1 hover:shadow-card-hover"
      style={{
        opacity:          isVisible ? 1 : 0,
        transform:        isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition:       `opacity 0.7s ease-out ${index * 130}ms, transform 0.7s ease-out ${index * 130}ms, background-color 0.3s, border-color 0.3s, box-shadow 0.3s, translate 0.3s`,
      }}
    >
      {/* Icon ring */}
      <div className="mb-6 w-16 h-16 rounded-full bg-brand-gold/15 border border-brand-gold/30
                      flex items-center justify-center
                      text-brand-gold-light
                      group-hover:bg-brand-gold/25 group-hover:scale-110
                      transition-all duration-300 shadow-gold/20">
        {stat.icon}
      </div>

      {/* Animated number */}
      <div className="mb-2 font-heading font-bold leading-none text-white">
        <span className="text-5xl sm:text-6xl tabular-nums">{count}</span>
        <span className="text-3xl sm:text-4xl text-brand-gold-light ml-0.5">{stat.suffix}</span>
      </div>

      {/* Label */}
      <h3 className="mb-2 text-base sm:text-lg font-semibold text-white/90 tracking-wide">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
        {stat.description}
      </p>

      {/* Bottom accent line */}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-brand-gold
                       group-hover:w-1/2 transition-all duration-500" />
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function StatsCounters() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="stats-heading"
      className="relative overflow-hidden bg-stats-gradient py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-brand-navy-mid/40 blur-3xl" />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize:  '32px 32px',
          }}
        />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <div
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
          style={{
            opacity:    isVisible ? 1 : 0,
            transform:  isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          {/* Eyebrow label */}
          <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
                           text-xs font-semibold tracking-widest uppercase
                           text-brand-gold-light bg-brand-gold/10 border border-brand-gold/20">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light animate-pulse" />
            Trusted Worldwide
          </span>

          <h2
            id="stats-heading"
            className="section-heading text-white mb-4"
          >
            Numbers That Reflect{' '}
            <span className="relative">
              <span className="relative z-10 text-brand-gold-light">Our Experience</span>
              <span
                className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-gold/60"
                aria-hidden="true"
              />
            </span>
          </h2>

          <p className="section-subheading text-white/60 mx-auto">
            We help travelers complete their visa and travel requirements smoothly,
            professionally, and with trusted support.
          </p>
        </div>

        {/* Stats grid — 1 col → 2 col → 4 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
