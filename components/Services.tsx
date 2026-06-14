'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Website Development',
    description: 'Custom websites built for speed, performance, and conversions.',
    icon: '🌐',
  },
  {
    title: 'eCommerce Solutions',
    description: 'Online stores designed to increase sales and improve customer experience.',
    icon: '🛒',
  },
  {
    title: 'Custom Applications',
    description: 'Business applications tailored to unique workflows and requirements.',
    icon: '⚙️',
  },
  {
    title: 'AI Automation',
    description: 'Intelligent solutions that automate tasks and improve business efficiency.',
    icon: '🤖',
  },
];

export default function Services() {
  return (
    <section id="services" className="mt-24">
      <div className="flex flex-col gap-4 sm:items-center sm:text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Services</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Solutions for modern brands and businesses</h2>
        <p className="max-w-2xl text-base leading-7 text-white/70">
          Launch a premium digital experience with development, eCommerce, custom apps, and AI workflows built for growth.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group rounded-[2rem] border border-white/10 bg-[#111738]/80 p-8 shadow-soft transition hover:-translate-y-2 hover:border-gold/40"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 text-3xl transition group-hover:bg-gold/10">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/70">{service.description}</p>
            <a className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accentBlue transition hover:text-gold" href="#contact">
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
