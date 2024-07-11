import { ContactForm } from '@/src/components/Comparison/ContactForm/ContactForm';
import { Hero } from '@/src/components/Comparison/Hero/Hero';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import HeroBg from '@/public/assets/images/career/hero-bg.png';
import Image from 'next/image';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import Table from '@/src/components/Comparison/Table';

export default async function ComparisonPage() {
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
      <Container>
        <Table />
      </Container>
      <div>
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
