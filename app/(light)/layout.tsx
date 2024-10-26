import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { getExpertiseList } from '@/src/utils/expertiseMenu';
import { openGraphImage } from '@/src/utils/openGraphParams';
import classNames from 'classnames';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import 'swiper/css';
import '../globals.css';

export const metadata: Metadata = {
  title:
    'Navigate the future: Bright Byte cutting-edge insights on digital transformation ',
  description: 'Gain a competitive edge with our expert analysis, breaking industry news, and visionary thought leadership on emerging technology trends and digital innovation.',
  metadataBase: new URL('https://thebrightbyte.com'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: 'https://thebrightbyte.com/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title: 'Navigate the future: Bright Byte cutting-edge insights on digital transformation ',
    description:
      'Gain a competitive edge with our expert analysis, breaking industry news, and visionary thought leadership on emerging technology trends and digital innovation.',
    url: 'https://thebrightbyte.com',
  },
};

const testList = getExpertiseList();

const Unbound = localFont({
  src: [
    {
      path: '../../public/fonts/unbounded/Unbounded-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/unbounded/Unbounded-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/unbounded/Unbounded-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-unbound',
  adjustFontFallback: false,
});

const Proxima = localFont({
  src: [
    {
      path: '../../public/fonts/proxima-nova/proxima_nova_regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/proxima-nova/proxima_nova_bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-proxima',
  adjustFontFallback: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bodyClassname = classNames(Unbound.variable, Proxima.variable);
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='next-size-adjust'
          content='width=device-width, initial-scale=1.0'
        />
        <link rel='icon' href='/assets/images/icons/favicon.svg' sizes='any' />
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-FXGP2J4QFD'
        ></Script>
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FXGP2J4QFD');
          `}
        </Script>
      </head>
      <body
        className={`${bodyClassname} flex flex-col bg-white text-text-dark`}
      >
        <Header dark={false} expertiseSubmenu={testList} />
        <main className='relative'>{children}</main>
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
