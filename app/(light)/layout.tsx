import { openGraphImage } from '@/src/utils/openGraphParams';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Header } from '@/src/components/Header/Header';
import { Footer } from '@/src/components/Footer/Footer';
import 'swiper/css';
import Script from 'next/script';

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
      <body
        className={`${inter.className} flex flex-col gap-[60px] bg-white text-text-dark`}
      >
        <Header dark={false} />
        {children}
        <Footer />
        <Script id='replain'>
          {`window.replainSettings = { id: '07c36061-dbc9-4cb8-85cb-9e69876b9d34' };
(function(u){var s=document.createElement('script');s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');`}
        </Script>
      </body>
    </html>
  );
}
