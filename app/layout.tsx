import { BASE_URL } from '@/src/utils/alias';
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
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: new URL(BASE_URL),
    types: {
      'application/rss+xml': [
        {
          title: 'Bright Byte Expertise and Insights',
          url: `${BASE_URL}/rss`,
        },
      ],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title,
    description,
    url: BASE_URL,
  },
  keywords,
};

export default function RootLayout({
  params,
  children,
}: {
  params: string;
  children: React.ReactNode;
}) {
  console.log('PARAMS', params);

  return children;
}
