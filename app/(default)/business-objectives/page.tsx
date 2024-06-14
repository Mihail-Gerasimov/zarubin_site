import { Cases } from '@/src/components/BusinessObjectives/Cases/Cases';
import { Hero } from '@/src/components/BusinessObjectives/Hero/Hero';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { Container } from '@/src/components/shared/Container/Container';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import { getCaseMetadata } from '@/src/utils/getCaseMetadata';

export default async function BusinessObjectivesPage() {
  const casesMetadata = getCaseMetadata('src/cases');
  return (
    <main className='flex flex-col gap-20 overflow-hidden'>
      <Section id='hero' className='relative py-0 tablet:py-0 desktop:pb-0'>
        <Container>
          <Hero />
        </Container>
      </Section>
      <Section className='!pt-0'>
        <Container>
          <ScrollAnimationWrapper showOnLoad>
            <Cases cases={casesMetadata} />
          </ScrollAnimationWrapper>
        </Container>
      </Section>
      <Section id='insights'>
        <ScrollAnimationWrapper>
          <Insights />
        </ScrollAnimationWrapper>
      </Section>
    </main>
  );
}
