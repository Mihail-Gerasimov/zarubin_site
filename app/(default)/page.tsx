import unlockBg from '@/public/assets/images/main/group.webp';
import heroBg from '@/public/assets/images/main/hero_bg.webp';
import insightBg from '@/public/assets/images/main/insight_bg.webp';
import bgImage from '@/public/assets/images/main/reviewBg.webp';
import { BusinessSolving } from '@/src/components/Main/BusinessSolving/BusinessSolving';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Expertise } from '@/src/components/Main/Expertise/Expertise';
import { Hero } from '@/src/components/Main/Hero/Hero';
import { Intelligence } from '@/src/components/Main/Intelligence/Intelligence';
import { Unlock } from '@/src/components/Main/Unlock/Unlock';
import { Container } from '@/src/components/shared/Container/Container';
import { ParallaxWrapper } from '@/src/components/shared/ParallaxWrapper/ParalaxWrapper';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DynamicInsights = dynamic(() =>
  import('@/src/components/Main/Insights/Insights').then((mod) => mod.Insights),
);
const DynamicIndustries = dynamic(() =>
  import('@/src/components/Main/Industries/Industries').then(
    (mod) => mod.Industries,
  ),
);
const DynamicFeedback = dynamic(() =>
  import('@/src/components/Main/Feedback/Feedback').then((mod) => mod.Feedback),
);
const DynamicTrustUs = dynamic(() =>
  import('@/src/components/Main/TrustUs/TrustUs').then((mod) => mod.TrustUs),
);

export default function Home() {
  return (
    <>
      <main>
        <Section id='hero' className='overflow-hidden'>
          <Container>
            <Hero />
          </Container>
          <div className='absolute inset-2.5 h-full bg-[linear-gradient(to_top,var(--primary)_200px,blue)] opacity-75 mix-blend-hard-light tablet:inset-[20px]'></div>
          <div className='absolute inset-2.5 -z-10 tablet:inset-[20px]'>
            <Image
              src={heroBg}
              priority
              className='object-cover'
              sizes='100vw'
              fill
              alt='Hero'
              quality={30}
            />
          </div>
        </Section>
        <Section id='expertise' className='overflow-hidden'>
          <Container className='desktop-hard:px-[80px]'>
            <ScrollAnimationWrapper showOnLoad>
              <Expertise />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
        <Section
          id='unlock'
          className='flex h-screen max-h-[960px] flex-col justify-center overflow-hidden'
        >
          <Container className='desktop-hard:px-[80px]'>
            <ScrollAnimationWrapper>
              <ParallaxWrapper speed={-10}>
                <Unlock />
              </ParallaxWrapper>
            </ScrollAnimationWrapper>
          </Container>
          <div className='absolute inset-0'>
            <Image
              src={unlockBg}
              fill
              placeholder='blur'
              sizes='100vw'
              alt=''
              className='absolute bottom-0 right-0 object-cover opacity-[3%]'
              priority
            />
          </div>
        </Section>
        <Section id='industries' className='!pb-0' light>
          <ScrollAnimationWrapper>
            <DynamicIndustries />
          </ScrollAnimationWrapper>
        </Section>
        <Section id='business-problems'>
          <ScrollAnimationWrapper>
            <BusinessSolving />
          </ScrollAnimationWrapper>
        </Section>
        <Section
          id='business-intelligence'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[100px]'
        >
          <ScrollAnimationWrapper>
            <Intelligence />
          </ScrollAnimationWrapper>
        </Section>
        <Section id='insights'>
          <ScrollAnimationWrapper>
            <DynamicInsights />
          </ScrollAnimationWrapper>
          <div className='absolute inset-0'>
            <Image
              src={insightBg}
              sizes='100vw'
              className='absolute inset-0'
              alt='building'
              loading='lazy'
            />
          </div>
        </Section>
        <Section id='clients'>
          <Container className='desktop-hard:px-[80px]'>
            <ScrollAnimationWrapper>
              <DynamicTrustUs />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
        <Section id='feedback'>
          <ScrollAnimationWrapper className='relative z-10'>
            <DynamicFeedback />
          </ScrollAnimationWrapper>
          <div className='absolute inset-0'>
            <Image
              src={bgImage}
              quality={100}
              fill
              sizes='100vw'
              className='absolute inset-0 object-cover'
              alt='background'
              loading='lazy'
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
    </>
  );
}
