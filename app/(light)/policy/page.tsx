import { Privacy } from '@/src/components/Privacy/Privacy';
import { contentTrimming } from '@/src/utils/contentTrimming';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { Metadata } from 'next';

const title = contentTrimming(pageMetadata.privacyPolicy.title, 105);
const description = contentTrimming(
  pageMetadata.privacyPolicy.description,
  155,
);
const ogTitle = contentTrimming(pageMetadata.privacyPolicy.title, 90);
const keywords = pageMetadata.privacyPolicy.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: 'https://thebrightbyte.com/solutions',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title: ogTitle,
    description,
    url: 'https://thebrightbyte.com/policy',
  },
  keywords,
};

export default function PrivacyPage() {
  return <Privacy />;
}
