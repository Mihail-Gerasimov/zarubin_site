import { ExpertiseClient } from '@/src/components/Expertise/ExpertiseClient/ExpertiseClient';
import { ExpertiseTitle } from '@/src/components/Expertise/ExpertiseTitle/ExpertiseTitle';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { BASE_URL } from '@/src/utils/alias';
import { contentTrimming } from '@/src/utils/contentTrimming';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { Post } from '@/src/utils/types';
import { Metadata } from 'next';

const expertisePosts: Post[] = getExpertiseMetadata();
const sortedExpertisePosts = postsSorting([...expertisePosts]);

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
