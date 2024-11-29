import { ArticlesClient } from '@/src/components/ArticlesClient/ArticlesClient';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { BASE_URL } from '@/src/utils/alias';
import { contentTrimming } from '@/src/utils/contentTrimming';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { postsSorting } from '@/src/utils/postsSorting';
import { Metadata } from 'next';

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
    canonical: new URL(`${BASE_URL}/news`),
    types: {
      'application/rss+xml': [
        {
          title: 'Bright Byte Expertise',
          url: `${BASE_URL}/rss`,
        },
      ],
    },
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title,
    description,
    url: `${BASE_URL}/news`,
  },
  keywords,
};

const expertiseArticles = getExpertiseMetadata();
const insightsArticles = getPostMetadata('src/posts');
const sortedData = postsSorting([...expertiseArticles, ...insightsArticles]);

export default function Article() {
  return (
    <Section id='article' light>
      <Container className='px-[10px] text-text-dark tablet:px-[40px] laptop-big:px-[50px] desktop:px-[60px] desktop-hard:px-[75px]'>
        <ArticlesClient data={sortedData} />
      </Container>
    </Section>
  );
}
