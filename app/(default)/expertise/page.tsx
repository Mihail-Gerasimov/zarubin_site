// import bgImage from '@/public/assets/images/main/group.png';
// import insightBg from '@/public/assets/images/main/insight_bg.png';
import { ExpertiseTitle } from '@/src/components/Expertise/ExpertiseTitle/ExpertiseTitle';
// import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Container } from '@/src/components/shared/Container/Container';
// import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
// import { ExpertiseHeroBgSvg } from '@/src/components/svg/ExpertiseHeroBgSvg';
import { BASE_URL } from '@/src/utils/alias';
import { contentTrimming } from '@/src/utils/contentTrimming';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { Metadata } from 'next';
// import dynamic from 'next/dynamic';
// import Image from 'next/image';
// import { ClientExpertiseItems } from './ClientExpertiseItems';
import { ExpertiseClient } from '@/src/components/Expertise/ExpertiseClient/ExpertiseClient';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { Post } from '@/src/utils/types';

const expertisePosts: Post[] = getExpertiseMetadata();
const sortedExpertisePosts = postsSorting([...expertisePosts]);

// const DynamicInsights = dynamic(() =>
//   import('@/src/components/Main/Insights/Insights').then((mod) => mod.Insights),
// );
// const DynamicTrustUs = dynamic(() =>
//   import('@/src/components/Main/TrustUs/TrustUs').then((mod) => mod.TrustUs),
// );
// const DynamicFeedback = dynamic(() =>
//   import('@/src/components/Main/Feedback/Feedback').then((mod) => mod.Feedback),
// );

const title = pageMetadata.expertise.title;
const description = contentTrimming(pageMetadata.expertise.description, 155);
const keywords = pageMetadata.expertise.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(BASE_URL),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: new URL(`${BASE_URL}/expertise`),
    types: {
      'application/rss+xml': [
        {
          title: 'Bright Byte Expertise',
          url: `${BASE_URL}/expertise/rss`,
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
    url: `${BASE_URL}/expertise`,
  },
  keywords,
};

export default function Expertise() {
  return (
    <main className='bg-white text-text-dark'>
      <Section id='title' className='overflow-x-hidden overflow-y-hidden'>
        <Container className='relative'>
          <ExpertiseTitle />
          <ExpertiseClient expertiseData={sortedExpertisePosts} />
        </Container>
      </Section>
    </main>
  );
}
