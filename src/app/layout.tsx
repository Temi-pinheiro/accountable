'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, MobileNav, NavBar, ScrollingNav } from '~/components';
import { MobileFooter } from '~/components/Footer/mobile';
import { useLayoutEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useLayoutEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang='en'>
      <body className={inter.className}>
        <nav className='relative'>
          <MobileNav />
          <NavBar />
          <ScrollingNav />
        </nav>
        <main id='main'>{children}</main>
        <MobileFooter />
        <Footer />
      </body>
    </html>
  );
}
