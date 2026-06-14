import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111738] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-lg">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">About Us</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Arthur’s Creatives is built for ambitious brands.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                We design premium websites, eCommerce experiences, custom business applications, and AI automation that help founders and teams grow with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]">
                  Schedule a Consultation
                </Link>
                <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                  Back to Home
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-[#0f1b3f]/90 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Our story</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Founded to bring premium digital craftsmanship to small businesses and startups, Arthur’s Creatives combines strategic design, performance engineering, and AI-driven automation.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.5rem] bg-[#111738]/80 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent/80">Mission</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Deliver polished and scalable digital products that help brands convert visitors into loyal customers.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-[#111738]/80 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent/80">Values</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Quality, clarity, performance, and client success are at the center of every project we launch.
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-[#111738]/80 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent/80">Founder</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    Founded by a digital product expert with deep experience in web development, design systems, and business automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
