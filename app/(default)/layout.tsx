import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { getExpertiseList } from '@/src/utils/expertiseMenu';
import classNames from 'classnames';
import localFont from 'next/font/local';
import Script from 'next/script';
import React from 'react';
import 'swiper/css';
import '../globals.css';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';

const expertiseSubMenu = getExpertiseList();
const expertiseMetadata = getExpertiseMetadata();

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
        <link rel='icon' href='/assets/images/icons/favicon.svg' sizes='any' />
        <style>
          {`* {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
              }

            :root {
              --bg-color: #090215;
              font-size: 14px;
              scroll-behavior: smooth;
            }
  
            h1,h2,h3,h4,h5,h6,ul,ol,li,p,a {
              margin: 0;
              padding: 0;
        }`}
        </style>
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
      <body className={`flex flex-col bg-main-bg text-white ${bodyClassname}`}>
        <Header
          expertiseSubmenu={expertiseSubMenu}
          expertiseMetadata={expertiseMetadata}
        />
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
