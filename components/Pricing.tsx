const pricingPlans = [
  {
    name: 'Business',
    price: '$699',
    description: 'A premium launch package for new brands and growing businesses.',
    features: ['Custom website design', 'Responsive build', 'Core SEO setup', 'Launch support'],
  },
  {
    name: 'Premium',
    price: '$1,299',
    description: 'A full-featured digital upgrade for brands that want to scale.',
    features: ['Advanced website strategy', 'Conversion optimization', 'Brand refinement', 'Analytics setup'],
  },
  {
    name: 'eCommerce',
    price: 'Starting at $2,999',
    description: 'A high-performance store designed to drive sales and scale online.',
    features: ['Shopify/WooCommerce', 'Product optimization', 'Secure checkout', 'Store analytics'],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mt-24 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur">
      <div className="flex flex-col gap-4 text-center sm:items-center">
        <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Pricing</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Service packages built for growth</h2>
        <p className="max-w-2xl text-base leading-7 text-white/70">
          Choose a package that matches your goals, from launch-ready business sites to premium digital experiences and full eCommerce platforms.
        </p>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <article key={plan.name} className="rounded-[1.75rem] border border-white/10 bg-[#111738]/80 p-8 transition hover:-translate-y-1 hover:border-gold/40">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">{plan.name}</p>
              <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
            </div>
            <p className="mb-6 text-sm leading-7 text-white/70">{plan.description}</p>
            <ul className="space-y-3 text-sm text-white/70">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]"
            >
              Start with {plan.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
