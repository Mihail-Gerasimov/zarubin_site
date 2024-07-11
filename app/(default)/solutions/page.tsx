import { Cases } from '@/src/components/BusinessObjectives/Cases/Cases';
import { Hero } from '@/src/components/BusinessObjectives/Hero/Hero';
import { Insights } from '@/src/components/Main/Insights/Insights';
import insightBg from '@/public/assets/images/main/insight_bg.png';
import { Container } from '@/src/components/shared/Container/Container';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import Image from 'next/image';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { getCaseMetadata } from '@/src/utils/getCaseMetadata';
import { Suspense } from 'react';

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
          <Suspense>
            <ScrollAnimationWrapper showOnLoad>
              <Cases cases={casesMetadata} />
            </ScrollAnimationWrapper>
          </Suspense>
        </Container>
      </Section>
      <Section id='insights'>
        <ScrollAnimationWrapper>
          <Insights />
        </ScrollAnimationWrapper>
        <div className='absolute inset-0'>
          <Image src={insightBg} className='absolute inset-0' alt='' />
        </div>
      </Section>
      <Section
        id='contacts'
        light
        className='py-[40px] tablet:py-[80px] desktop:py-[80px]'
      >
        <Container>
          <ScrollAnimationWrapper>
            <ContactForm />
          </ScrollAnimationWrapper>
        </Container>
      </Section>
    </main>
  );
}
