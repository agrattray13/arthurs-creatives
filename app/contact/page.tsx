export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#111738] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-lg">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Contact</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s create your next premium digital experience.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Reach out to discuss websites, eCommerce stores, custom applications, or AI automation for your business.
              </p>
              <div className="mt-8 space-y-4 text-sm text-white/70">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@arthurscreatives.com</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+1 (555) 123-9876</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Book a consultation</p>
                  <p>Use the form to send a brief project overview and we’ll respond with a plan.</p>
                </div>
              </div>
            </div>
            <form action="#" className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0f1b3f]/90 p-8">
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#111738] px-4 py-4 text-white outline-none transition focus:border-gold/60"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-[#111738] px-4 py-4 text-white outline-none transition focus:border-gold/60"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-3 w-full rounded-[1.5rem] border border-white/10 bg-[#111738] px-4 py-4 text-white outline-none transition focus:border-gold/60"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
