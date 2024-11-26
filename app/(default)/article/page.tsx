import { ArticlesClient } from '@/src/components/ArticlesClient/ArticlesClient';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';
import { getPostMetadata } from '@/src/utils/getPostMetadata';
import { postsSorting } from '@/src/utils/postsSorting';

const expertiseArticles = getExpertiseMetadata();
const insightsArticles = getPostMetadata('src/posts');
const sortedData = postsSorting([...expertiseArticles, ...insightsArticles]);

export default function Article({
  searchParams,
}: {
  searchParams: { category: string; subCategoru: string; tag: string };
}) {
  return (
    <Section id='article' light>
      <Container className='text-text-dark'>
        <ArticlesClient data={sortedData} searchParams={searchParams} />
      </Container>
    </Section>
  );
}
