import { Privacy } from '@/src/components/Privacy/Privacy';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Safeguarding Your Digital Future: Bright Byte's Ironclad Privacy Policy ",
  description:
    'Experience peace of mind with our unwavering commitment to data protection. Explore how we ensure your information remains secure while complying with global privacy standards.',
  metadataBase: new URL('https://www.thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Bright Byte',
    ...openGraphImage,
    title:
      "Safeguarding Your Digital Future: Bright Byte's Ironclad Privacy Policy | Bright Byte",
    description:
      ' Experience peace of mind with our unwavering commitment to data protection. Explore how we ensure your information remains secure while complying with global privacy standards.',
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
