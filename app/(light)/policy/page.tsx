import { Privacy } from '@/src/components/Privacy/Privacy';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { Metadata } from 'next';
import { pageMetadata } from '@/src/utils/metadata';
import { contentTrimming } from '@/src/utils/contentTrimming';

const title = contentTrimming(pageMetadata.privacyPolicy.title, 105);
const description = contentTrimming(
  pageMetadata.privacyPolicy.description,
  155,
);

const ogTitle = contentTrimming(pageMetadata.privacyPolicy.title, 90);

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://www.thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Bright Byte',
    ...openGraphImage,
    title: `${ogTitle} | Bright Byte`,
    description,
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
