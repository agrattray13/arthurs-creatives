export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d1333] px-6 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xl font-semibold">Arthur&apos;s Creatives</p>
          <p className="max-w-sm text-sm leading-6 text-white/60">
            Premium web, app, and AI solutions for startups and growth-focused brands.
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-white">Navigation</p>
          <a className="block hover:text-gold" href="#about">About</a>
          <a className="block hover:text-gold" href="#services">Services</a>
          <a className="block hover:text-gold" href="#portfolio">Portfolio</a>
          <a className="block hover:text-gold" href="#contact">Contact</a>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-white">Services</p>
          <p>Website Development</p>
          <p>eCommerce Solutions</p>
          <p>AI Automation</p>
          <p>Custom Applications</p>
        </div>
        <div className="space-y-3 text-sm text-white/70">
          <p className="font-semibold text-white">Contact</p>
          <p>hello@arthurscreatives.com</p>
          <p>+1 (555) 123-9876</p>
          <div className="flex items-center gap-3 pt-2 text-xl text-white/70">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
        © 2026 Arthur&apos;s Creatives. Crafted for growth-minded brands.
      </div>
    </footer>
  );
}
