import { BusinessSolving } from '@/src/components/Main/BusinessSolving/BusinessSolving';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Expertise } from '@/src/components/Main/Expertise/Expertise';
import { Feedback } from '@/src/components/Main/Feedback/Feedback';
import { Hero } from '@/src/components/Main/Hero/Hero';
import { Industries } from '@/src/components/Main/Industries/Industries';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { Intelligence } from '@/src/components/Main/Intelligence/Intelligence';
import { TrustUs } from '@/src/components/Main/TrustUs/TrustUs';
import { Unlock } from '@/src/components/Main/Unlock/Unlock';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import heroBg from '@/public/assets/images/main/hero_bg.png';
import Image from 'next/image';
import bgImage from '@/public/assets/images/main/reviewBg.png';
import insightBg from '@/public/assets/images/main/insight_bg.png';
import unlockBg from '@/public/assets/images/main/group.png';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { ParallaxWrapper } from '@/src/components/shared/ParallaxWrapper/ParalaxWrapper';

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
              className='object-cover object-top'
              fill
              alt=''
            />
          </div>
        </Section>
        <Section id='expertise' className='overflow-hidden'>
          <Container>
            <ScrollAnimationWrapper showOnLoad>
              <Expertise />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
        <Section
          id='unlock'
          className='flex h-screen max-h-[960px] flex-col justify-center overflow-hidden'
        >
          <Container>
            <ScrollAnimationWrapper>
              <ParallaxWrapper speed={-20}>
                <Unlock />
              </ParallaxWrapper>
            </ScrollAnimationWrapper>
          </Container>
          <div className='absolute inset-0'>
            <Image
              src={unlockBg}
              fill
              objectFit='cover'
              objectPosition='bottom'
              alt=''
              className='absolute bottom-0 right-0 object-cover opacity-[3%]'
            />
          </div>
        </Section>
        <Section id='industries' className='!pb-0 tablet:h-[828px]' light>
          <ScrollAnimationWrapper>
            <Industries />
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
            <Insights />
          </ScrollAnimationWrapper>
          <div className='absolute inset-0'>
            <Image src={insightBg} className='absolute inset-0' alt='' />
          </div>
        </Section>
        <Section id='clients'>
          <Container>
            <ScrollAnimationWrapper>
              <TrustUs />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
        <Section id='feedback'>
          <Container>
            <ScrollAnimationWrapper className='relative z-10'>
              <Feedback />
            </ScrollAnimationWrapper>
          </Container>
          <div className='absolute inset-0'>
            <Image
              src={bgImage}
              quality={100}
              fill
              className='absolute inset-0 object-cover'
              alt=''
            />
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
    </>
  );
}
