import { openGraphImage } from '@/src/utils/openGraphParams';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Zarubin & Company is a consulting agency specializing in innovation in development and system integration. We use modern and cost-effective solutions for complex challenges.',
  description: 'Case studies, research and experience in detail',
  metadataBase: new URL('https://blog.zarubin.co.uk/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  openGraph: {
    ...openGraphImage,
    title:
      'Zarubin & Company is a consulting agency specializing in innovation in development and system integration. We use modern and cost-effective solutions for complex challenges.',
    description: 'Read. Think. Grow.',
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
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
