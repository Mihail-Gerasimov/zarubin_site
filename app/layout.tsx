import { contentTrimming } from '@/src/utils/contentTrimming';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { Metadata } from 'next';

const title = pageMetadata.main.title;
const description = contentTrimming(pageMetadata.main.description, 155);
const keywords = pageMetadata.main.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: new URL('https://thebrightbyte.com'),
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title,
    description,
    url: 'https://thebrightbyte.com',
  },
  keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
