import HeroBg from '@/public/assets/images/comparison/hero_banner.webp';
import { ContactForm } from '@/src/components/Comparison/ContactForm/ContactForm';
import { Hero } from '@/src/components/Comparison/Hero/Hero';
import Table from '@/src/components/Comparison/Table';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import Image from 'next/image';
import styles from './Comparison.module.css';

export default async function ComparisonPage() {
  return (
    <main className='flex flex-col gap-20 overflow-hidden'>
      <Section id='hero' className={`${styles.heroContainer} relative`}>
        <Container>
          <Hero />
        </Container>
        <div className='absolute inset-0 -z-10'>
          <Image
            src={HeroBg}
            priority
            alt=''
            objectPosition='top'
            objectFit='cover'
            layout='fill'
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
            <ContactForm />
          </Container>
        </Section>
      </div>
    </main>
  );
}
