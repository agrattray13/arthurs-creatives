export default function CTA() {
  return (
    <section className="mt-24 rounded-[2rem] border border-white/10 bg-[#142055]/85 p-10 shadow-soft backdrop-blur">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_minmax(280px,0.8fr)] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Ready to Build</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Ready to Build Something Amazing?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
            Let&apos;s create a website, store, app, or AI solution that helps your business grow.
          </p>
        </div>
        <div className="flex items-center justify-start lg:justify-end">
          <a
            href="#contact"
            className="inline-flex rounded-full bg-gold px-8 py-4 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
