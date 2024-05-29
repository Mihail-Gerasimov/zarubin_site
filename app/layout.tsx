import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { openGraphImage } from '@/src/utils/openGraphParams';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Insights – Zarubin&Co – Blog',
  description: 'Case studies, research and experience in detail',
  metadataBase: new URL('https://blog.zarubin.co.uk/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  openGraph: {
    ...openGraphImage,
    title: 'Insights – Zarubin&Co – Blog',
    description: 'Case studies, research and experience in detail',
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
      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
