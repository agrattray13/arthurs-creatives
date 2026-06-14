'use client';

import { motion } from 'framer-motion';

const benefits = [
  { title: 'Modern Design', description: 'A polished digital presence with premium visuals and interactions.' },
  { title: 'Mobile Optimization', description: 'Fast, responsive experiences built for every screen and device.' },
  { title: 'SEO Ready', description: 'Structured pages designed to perform for search and discoverability.' },
  { title: 'AI Powered', description: 'Smart automation and workflows that streamline business operations.' },
];

export default function Benefits() {
  return (
    <section className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
      <div className="grid gap-8 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="rounded-[1.75rem] bg-[#111738]/80 p-8 text-center transition hover:-translate-y-1 hover:bg-[#172552]"
          >
            <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-2xl text-accent">
              ★
            </div>
            <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
