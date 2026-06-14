import Image from 'next/image';

const projects = [
  { id: 1, name: "Arthur's Furniture", category: 'eCommerce', image: '/images/arthurs-furniture.jpg' },
  { id: 2, name: 'ANASSA Reiki', category: 'Service', image: '/images/anassa-reiki.jpg' },
  { id: 3, name: 'Artesian Steps', category: 'Custom App', image: '/images/artesian-steps.jpg' },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#111738] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8">
        <div className="flex flex-col gap-4 sm:items-center sm:text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Portfolio</p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Selected projects</h1>
          <p className="max-w-2xl text-base leading-7 text-white/70">A showcase of recent work. Replace these images by uploading your project images to <code>/public/images</code>.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111738]/80">
              <div className="relative h-56 w-full bg-[#0f1b3f]">
                <Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent/75">{p.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{p.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
