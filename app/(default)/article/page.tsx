import { ArticlesClient } from '@/src/components/ArticlesClient/ArticlesClient';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { BASE_URL } from '@/src/utils/alias';
import { Metadata } from 'next';
import { contentTrimming } from '@/src/utils/contentTrimming';

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

const expertiseArticles = getExpertiseMetadata();
const insightsArticles = getPostMetadata('src/posts');
const sortedData = postsSorting([...expertiseArticles, ...insightsArticles]);

export default function Article() {
  return (
    <Section id='article' light>
      <Container className='text-text-dark'>
        <ArticlesClient data={sortedData} />
      </Container>
    </Section>
  );
}
