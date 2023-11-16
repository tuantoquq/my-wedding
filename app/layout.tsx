import Header from '@/layout/header';
import './globals.css';
import type { Metadata } from 'next';
import { Dosis } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/layout/footer';

const inter = Dosis({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tuấn ❤️ Bích | Our Wedding',
  description: 'Follow to know about Love journey of Tuan and Bich',
  authors: {
    name: 'tuannha & bichnobi',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} bg-white text-gray-950`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
