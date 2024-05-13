import { Footer } from '@/src/components/Footer/Footer';
import { openGraphImage } from '@/src/utils/openGraphParams';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zarubin Blog',
  description: 'Information about zarubin_blog',
  icons: {
    icon: '/assets/images/icons/favicon.svg',
  },
  openGraph: {
    ...openGraphImage,
    title: 'Zarubin Blog',
    description: 'Information about zarubin_blog',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/assets/images/icons/favicon.svg' sizes='any' />
      </head>
      <body className={`${inter.className} `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
