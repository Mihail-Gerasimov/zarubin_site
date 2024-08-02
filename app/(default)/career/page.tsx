import HeroBg from '@/public/assets/images/career/hero-bg.png';
import { ContactForm } from '@/src/components/Career/ContactForm/ContactForm';
import { Hero } from '@/src/components/Career/Hero/Hero';
import { Team } from '@/src/components/Career/Team/Team';
import { Vacancies } from '@/src/components/Career/Vacanices/Vacancies';
import { Values } from '@/src/components/Career/Values/Values';
import { Container } from '@/src/components/shared/Container/Container';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import Image from 'next/image';

export default async function CareerPage() {
  return (
    <main className='flex flex-col gap-20 overflow-hidden'>
      <Section id='hero' className='relative'>
        <Container>
          <Hero />
        </Container>
        <div className='absolute inset-0 -z-10'>
          <Image
            className='absolute right-0 max-w-[1030px] max-tablet:right-1/2 max-tablet:translate-x-1/2'
            src={HeroBg}
            alt=''
            width={1030}
            height={560}
          />
        </div>
      </Section>
      <Section id='team'>
        <Container>
          <ScrollAnimationWrapper showOnLoad>
            <Team />
          </ScrollAnimationWrapper>
        </Container>
      </Section>
      <div>
        <Section
          id='values'
          className='py-[80px] tablet:py-[80px] desktop:py-[80px]'
          light
        >
          <Container>
            <ScrollAnimationWrapper>
              <Values />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
        <Section
          id='vacancies'
          className='bg-[linear-gradient(99.79deg,#000A25_14.95%,#00248B_92.57%)] py-[80px] tablet:py-[80px] desktop:py-[80px]'
        >
          <Container>
            <ScrollAnimationWrapper>
              <Vacancies />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
        <Section
          id='contacts'
          className='py-[80px] tablet:py-[80px] desktop:py-[80px]'
          light
        >
          <Container>
            <ScrollAnimationWrapper>
              <ContactForm />
            </ScrollAnimationWrapper>
          </Container>
        </Section>
      </div>
    </main>
  );
}
