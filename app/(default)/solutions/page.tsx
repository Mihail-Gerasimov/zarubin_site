import insightBg from '@/public/assets/images/main/insight_bg.png';
import { Cases } from '@/src/components/BusinessObjectives/Cases/Cases';
import { Hero } from '@/src/components/BusinessObjectives/Hero/Hero';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { Container } from '@/src/components/shared/Container/Container';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import { getCaseMetadata } from '@/src/utils/getCaseMetadata';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Bright Byte - Solutions and cases',
  description: 'Case studies, research and experience in detail',
  metadataBase: new URL('https://www.thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Bright Byte',
    ...openGraphImage,
    title: 'Bright Byte - Solutions and cases | Bright Byte',
    description:
      'Zarubin & Company is a consulting agency specializing in innovation in development and system integration. We use modern and cost-effective solutions for complex challenges.',
  },
};

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
          <ContactForm />
        </Container>
      </Section>
    </main>
  );
}
