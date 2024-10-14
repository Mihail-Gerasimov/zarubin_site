import HeroBg from '@/public/assets/images/comparison/hero_banner.webp';
import { ContactForm } from '@/src/components/Comparison/ContactForm/ContactForm';
import { Hero } from '@/src/components/Comparison/Hero/Hero';
import Table from '@/src/components/Comparison/Table';
import { Container } from '@/src/components/shared/Container/Container';
import { Section } from '@/src/components/shared/Section/Section';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { Metadata } from 'next';
import Image from 'next/image';
import styles from './Comparison.module.css';

import { contentTrimming } from '@/src/utils/contentTrimming';
import { pageMetadata } from '@/src/utils/pageMetadata';

const title = contentTrimming(pageMetadata.comparison.title, 105);
const description = contentTrimming(pageMetadata.comparison.description, 155);
const ogTitle = contentTrimming(pageMetadata.comparison.title, 90);
const keywords = pageMetadata.comparison.keywords;

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://www.thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BrightByte.com',
    ...openGraphImage,
    title: ogTitle,
    description,
    url: 'https://www.thebrightbyte.com/comparison',
  },
  keywords,
};

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
