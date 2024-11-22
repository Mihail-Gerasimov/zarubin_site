import { ArticlesClient } from '@/src/components/ArticlesClient/ArticlesClient';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { getExpertiseMetadata } from '@/src/utils/getExpertiseMetadata';

export default function Article() {
  const expertiseArticles = getExpertiseMetadata();

  return (
    <Section id='article' light>
      <Container className='text-text-dark'>
        {/* <h1 className=''>Articles</h1> */}
        <ArticlesClient data={expertiseArticles} />
      </Container>
    </Section>
  );
}
