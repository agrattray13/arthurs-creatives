import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Arthur's Creatives | Premium Digital Agency",
  description:
    'Arthur’s Creatives builds premium websites, eCommerce stores, custom apps, and AI automation for growth-minded businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
