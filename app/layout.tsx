import { Footer } from '@/src/components/Footer/Footer';
import { openGraphImage } from '@/src/utils/openGraphParams';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import React from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Stocks soccer – New Fantasy Soccer game in blog. Your Squad - your value',
  description:
    '⚽️Sport News . Assemble your squad (portfolio) 🚀 Keep track of your ranking.🏆 Get prizes.',
  metadataBase: new URL('https://blog.stocks.soccer/'),
  icons: {
    icon: '/assets/images/icons/favicon.svg',
  },
  openGraph: {
    ...openGraphImage,
    title:
      'Stocks soccer – New Fantasy Soccer game in blog. Your Squad - your value',
    description:
      '⚽️Sport News . Assemble your squad (portfolio) 🚀 Keep track of your ranking.🏆 Get prizes.',
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
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-ZCGN9DMPJN'
        ></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCGN9DMPJN');
          `}
        </Script>
      </head>
      <body className={`${inter.className} `}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
