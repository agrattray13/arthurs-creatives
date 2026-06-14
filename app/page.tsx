import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden text-white">
      <Navbar />
      <div className="relative isolate overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(77,163,255,0.18),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(230,192,104,0.22),transparent_25%)]" />
        <Hero />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <Services />
        <Benefits />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
