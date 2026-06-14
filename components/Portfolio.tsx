'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: "Arthur's Furniture",
    category: 'eCommerce Store',
    description: 'Premium furniture brand experience designed for elegant product storytelling and high-value conversions.',
  },
  {
    name: 'ANASSA Reiki',
    category: 'Service Brand',
    description: 'A calm digital sanctuary for wellness clients with appointment booking and brand clarity.',
  },
  {
    name: 'Artesian Steps',
    category: 'Custom App',
    description: 'Workflow automation and branded dashboard design for a seamless customer journey.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mt-24">
      <div className="flex flex-col gap-4 sm:items-center sm:text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Featured Work</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Projects that showcase premium digital growth</h2>
        <p className="max-w-2xl text-base leading-7 text-white/70">
          Crafted experiences for startups, brands, and businesses that need polished digital products with measurable results.
        </p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111738]/80 shadow-soft"
          >
            <div className="h-64 bg-[radial-gradient(circle_at_top,rgba(77,163,255,0.15),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(0,0,0,0.35))] p-6">
              <div className="h-full rounded-[1.75rem] bg-[#0f1b3f] p-6 transition group-hover:scale-[1.01]">
                <div className="h-full rounded-[1.5rem] border border-white/5 bg-[url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center" />
              </div>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/75">{project.category}</p>
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <p className="text-sm leading-7 text-white/70">{project.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accentBlue transition hover:text-gold">
                View Project →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
