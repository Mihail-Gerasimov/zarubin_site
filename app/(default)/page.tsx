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
import bgImage from '@/public/assets/images/main/group.png';

export default function Home() {
  return (
    <>
      <main>
        <Section id='hero' className='overflow-hidden'>
          <Container>
            <Hero />
          </Container>
          <div className='absolute inset-2.5 h-full bg-[linear-gradient(to_top,var(--primary)_200px,var(--main-blue))] opacity-80 tablet:inset-[20px]'></div>
          <div className='absolute inset-2.5 -z-10 tablet:inset-[20px]'>
            <Image src={heroBg} className='object-cover' fill alt='' />
          </div>
        </Section>
        <Section id='expertise' className='overflow-hidden'>
          <Container>
            <Expertise />
          </Container>
        </Section>
        <Section
          id='unlock'
          className='flex h-screen max-h-[960px] flex-col justify-center overflow-hidden'
        >
          <Container>
            <Unlock />
          </Container>
        </Section>
        <Section id='industries' className='tablet:h-[828px]' light>
          <Industries />
        </Section>
        <Section id='business-problems'>
          <BusinessSolving />
        </Section>
        <Section
          id='business-intelligence'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[100px]'
        >
          <Intelligence />
        </Section>
        <Section id='insights'>
          <Insights />
        </Section>
        <Section id='clients'>
          <Container>
            <TrustUs />
          </Container>
        </Section>
        <Section id='feedback'>
          <Container>
            <Feedback />
          </Container>
          <div className='absolute inset-0 bg-[linear-gradient(100deg,#000a25_14.95%,#00248b_92.57%)]'>
            <Image
              src={bgImage}
              className='absolute inset-0 opacity-30 mix-blend-overlay'
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
            <ContactForm />
          </Container>
        </Section>
      </main>
    </>
  );
}
