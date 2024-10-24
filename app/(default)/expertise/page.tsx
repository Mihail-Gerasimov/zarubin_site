import bgImage from '@/public/assets/images/main/group.png';
import insightBg from '@/public/assets/images/main/insight_bg.png';
import { ExpertiseTitle } from '@/src/components/Expertise/ExpertiseTitle/ExpertiseTitle';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Container } from '@/src/components/shared/Container/Container';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import { ExpertiseHeroBgSvg } from '@/src/components/svg/ExpertiseHeroBgSvg';
import { contentTrimming } from '@/src/utils/contentTrimming';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { pageMetadata } from '@/src/utils/pageMetadata';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ClientExpertiseItems } from './ClientExpertiseItems';

const DynamicInsights = dynamic(() =>
  import('@/src/components/Main/Insights/Insights').then((mod) => mod.Insights),
);
const DynamicTrustUs = dynamic(() =>
  import('@/src/components/Main/TrustUs/TrustUs').then((mod) => mod.TrustUs),
);
const DynamicFeedback = dynamic(() =>
  import('@/src/components/Main/Feedback/Feedback').then((mod) => mod.Feedback),
);

const title = contentTrimming(pageMetadata.expertise.title, 105);
const description = contentTrimming(pageMetadata.expertise.description, 155);
const ogTitle = contentTrimming(pageMetadata.expertise.title, 90);
const keywords = pageMetadata.expertise.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://www.thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  alternates: {
    canonical: 'https://www.thebrightbyte.com/expertise',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title: ogTitle,
    description,
    url: 'https://www.thebrightbyte.com/expertise',
  },
  keywords,
};

export default function Expertise() {
  return (
    <main className='bg-main-bg text-white'>
      <Section id='title' className='overflow-x-hidden overflow-y-hidden'>
        <Container className='relative z-10'>
          <ExpertiseTitle />
        </Container>
        <div className='absolute inset-0 flex after:absolute after:inset-0 after:bg-gradient-to-t after:from-main-bg after:to-transparent'>
          <div className='absolute left-1/2 top-[70px] -translate-x-1/2 desktop:left-1/2 desktop:-translate-x-1/3'>
            <ExpertiseHeroBgSvg />
          </div>
        </div>
      </Section>
      <Section id='virtual-cio' className='pt-0 tablet:pt-0 desktop:pt-0'>
        <ScrollAnimationWrapper showOnLoad>
          <ClientExpertiseItems />
        </ScrollAnimationWrapper>
      </Section>
      <Section id='insights'>
        <ScrollAnimationWrapper>
          <DynamicInsights />
        </ScrollAnimationWrapper>
        <div className='absolute inset-0'>
          <Image
            src={insightBg}
            className='absolute inset-0 min-h-[600px]'
            alt='background image'
          />
        </div>
      </Section>
      <Section>
        <Container>
          <ScrollAnimationWrapper>
            <DynamicTrustUs />
          </ScrollAnimationWrapper>
        </Container>
      </Section>
      <Section id='feedback'>
        <Container>
          <ScrollAnimationWrapper className='relative z-10'>
            <DynamicFeedback />
          </ScrollAnimationWrapper>
        </Container>
        <div className='absolute inset-0 bg-[linear-gradient(100deg,#000a25_14.95%,#00248b_92.57%)]'>
          <Image
            src={bgImage}
            className='absolute inset-0 opacity-30 mix-blend-overlay'
            alt='background image'
          />
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
