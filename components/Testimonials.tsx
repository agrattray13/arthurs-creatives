'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Arthur’s Creatives delivered a beautiful website and elevated our brand experience. The design is clean, fast, and our leads have grown.',
    name: 'Sofia Martinez',
    role: 'Founder, ANASSA Reiki',
  },
  {
    quote: 'The team built a custom app that saved us hours every week. The automation and polish are exactly what our business needed.',
    name: 'Liam Carter',
    role: 'CEO, Artesian Steps',
  },
  {
    quote: 'Our eCommerce launch exceeded expectations. The store feels premium, loads quickly, and converts better than ever.',
    name: 'Ava Thompson',
    role: 'Owner, Arthur’s Furniture',
  },
];

export default function Testimonials() {
  return (
    <section className="mt-24" aria-label="Testimonials">
      <div className="flex flex-col gap-4 sm:items-center sm:text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Testimonials</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Trusted by growing brands</h2>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-[2rem] border border-white/10 bg-[#111738]/85 p-8 shadow-soft"
          >
            <p className="text-base leading-8 text-white/75">“{testimonial.quote}”</p>
            <div className="mt-8">
              <p className="text-sm font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-white/60">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
