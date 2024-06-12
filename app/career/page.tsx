import { ContactForm } from '@/src/components/Career/ContactForm/ContactForm';
import { Hero } from '@/src/components/Career/Hero/Hero';
import { Team } from '@/src/components/Career/Team/Team';
import { Vacancies } from '@/src/components/Career/Vacanices/Vacancies';
import { Values } from '@/src/components/Career/Values/Values';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import HeroBg from '@/public/assets/images/career/hero-bg.png';
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
          <Team />
        </Container>
      </Section>
      <Section id='values' light>
        <Container>
          <Values />
        </Container>
      </Section>
      <Section id='vacancies'>
        <Container>
          <Vacancies />
        </Container>
      </Section>
      <Section
        id='contacts'
        className='py-[80px] tablet:py-[80px] desktop:py-[80px]'
        light
      >
        <Container>
          <ContactForm />
        </Container>
      </Section>
    </main>
  );
}
