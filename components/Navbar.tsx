import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'About', href: '/about', external: false },
  { label: 'Services', href: '#services', external: true },
  { label: 'Portfolio', href: '#portfolio', external: true },
  { label: 'Pricing', href: '#pricing', external: true },
  { label: 'Contact', href: '/contact', external: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#111738]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="Arthur's Creatives" width={44} height={44} className="rounded-full bg-white/5" />
            <span className="text-xl font-semibold tracking-tight text-white">Arthur&apos;s Creatives</span>
          </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]"
        >
          Start Project
        </Link>
      </div>
    </header>
  );
}
