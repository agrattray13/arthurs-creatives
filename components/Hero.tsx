'use client';

import { motion } from 'framer-motion';

const features = [
  'Modern website experiences',
  'High-converting eCommerce stores',
  'Custom apps and workflow automation',
  'AI-enabled business acceleration',
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-20 sm:px-8 lg:px-0">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-white/75 ring-1 ring-white/10 backdrop-blur"
          >
            Ultra-premium digital solutions for growth-focused brands
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Websites, Apps & AI Solutions Built for Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-8 text-white/70"
          >
            We help businesses establish a powerful online presence through modern websites, eCommerce solutions, custom applications, and AI automation.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]"
            >
              Get Started
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
            >
              View Portfolio
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 grid gap-4 sm:grid-cols-2"
          >
            {features.map((feature) => (
              <div key={feature} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-gold/30">
                <p className="text-sm text-white/80">{feature}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#142055]/80 p-8 shadow-soft backdrop-blur-lg"
        >
          <div className="absolute -left-10 top-12 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-12 top-28 h-32 w-32 rounded-full bg-accentBlue/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1b3f] p-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent/80">Arthur’s Workspace</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">Premium digital launch</h2>
              </div>
              <div className="rounded-2xl bg-white/5 px-3 py-2 text-xs text-white/70">Live</div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-[#111738] p-5">
                <div className="mb-4 h-52 rounded-3xl bg-gradient-to-br from-[#192a5a] via-[#12214a] to-[#111738]" />
                <div className="grid gap-3">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <div className="h-3 w-24 rounded-full bg-white/15" />
                  <div className="h-3 w-16 rounded-full bg-white/10" />
                  <div className="h-3 w-32 rounded-full bg-white/15" />
                </div>
              </div>
              <div className="grid gap-3 rounded-3xl bg-white/5 p-5">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Conversion Rate</span>
                  <span>+32%</span>
                </div>
                <div className="h-2 rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gold" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
