export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#111738] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-lg">
          <div className="grid gap-10">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Services</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">What we do</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                We build websites, eCommerce stores, custom applications, and AI automation tailored to business goals.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              <article className="rounded-[1.5rem] border border-white/10 bg-[#111738]/80 p-6 text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-2xl text-accent">🌐</div>
                <h3 className="text-xl font-semibold text-white">Website Development</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">Custom websites built for speed, performance, and conversions.</p>
              </article>
              <article className="rounded-[1.5rem] border border-white/10 bg-[#111738]/80 p-6 text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-2xl text-accent">🛒</div>
                <h3 className="text-xl font-semibold text-white">eCommerce Solutions</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">Online stores designed to increase sales and improve customer experience.</p>
              </article>
              <article className="rounded-[1.5rem] border border-white/10 bg-[#111738]/80 p-6 text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-2xl text-accent">⚙️</div>
                <h3 className="text-xl font-semibold text-white">Custom Applications</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">Business applications tailored to unique workflows and requirements.</p>
              </article>
              <article className="rounded-[1.5rem] border border-white/10 bg-[#111738]/80 p-6 text-center">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-accent/10 text-2xl text-accent">🤖</div>
                <h3 className="text-xl font-semibold text-white">AI Automation</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">Intelligent solutions that automate tasks and improve business efficiency.</p>
              </article>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}
