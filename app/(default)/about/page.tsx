import { Cards } from '@/src/components/About/Cards/Cards';
import { Hero } from '@/src/components/About/Hero/Hero';
import { Industries } from '@/src/components/About/Industries/Industries';
import { Insights } from '@/src/components/About/Insights/Insights';
import { Team } from '@/src/components/About/Team/Team';
import { Technology } from '@/src/components/About/Technology/Technology';
import { Direction } from '@/src/components/About/Vacancy/Direction/Direction';
import { Vacancy } from '@/src/components/About/Vacancy/Vacancy';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { Container } from '@/src/components/shared/Container/Container';
import { ScrollAnimationWrapper } from '@/src/components/shared/ScrollAminationWrapper/ScrollAnimationWrapper';
import { Section } from '@/src/components/shared/Section/Section';
import { openGraphImage } from '@/src/utils/openGraphParams';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bright Byte: Architects of Digital Transformation.',
  description:
    "Dive into our story of relentless innovation. Learn how Bright Byte's visionary approach to IT solutions is redefining business success in the digital age",
  metadataBase: new URL('https://www.thebrightbyte.com/'),
  icons: {
    icon: '/assets/images/info/main_meta.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Bright Byte',
    ...openGraphImage,
    title: 'Bright Byte: Architects of Digital Transformation | Bright Byte',
    description:
      "Dive into our story of relentless innovation. Learn how Bright Byte's visionary approach to IT solutions is redefining business success in the digital age",
  },
};

export default function About() {
  return (
    <main className='flex flex-col gap-[60px] overflow-hidden'>
      <Section id='hero' className='py-0 tablet:py-0 desktop:py-0'>
        <ScrollAnimationWrapper showOnLoad>
          <Container className='desktop:px-[20px]'>
            <Hero />
          </Container>
        </ScrollAnimationWrapper>
      </Section>
      <Section id='insights' className='py-0 tablet:py-0 desktop:py-0'>
        <ScrollAnimationWrapper>
          <Container className='tablet:px-[40px] desktop:px-0'>
            <Insights />
          </Container>
        </ScrollAnimationWrapper>
      </Section>
      <Section id='industries' className='py-0 tablet:py-0 desktop:py-0'>
        <ScrollAnimationWrapper>
          <Container className='tablet:px-[40px] desktop:px-0'>
            <Industries />
          </Container>
        </ScrollAnimationWrapper>
      </Section>
      <Section id='team'>
        <ScrollAnimationWrapper>
          <Container>
            <Team />
          </Container>
        </ScrollAnimationWrapper>
      </Section>
      <Section id='cards' className='py-0 tablet:py-0 desktop:py-0'>
        <ScrollAnimationWrapper>
          <Container className='tablet:px-[40px]'>
            <Cards />
          </Container>
        </ScrollAnimationWrapper>
      </Section>
      <Section id='technologies' className='py-0 tablet:py-0 desktop:py-0'>
        <ScrollAnimationWrapper>
          <Container>
            <Technology />
          </Container>
        </ScrollAnimationWrapper>
      </Section>
      <div>
        <Section id='vacancy' className='tablet:pt-[0]'>
          <ScrollAnimationWrapper>
            <Container>
              <Direction />
            </Container>
          </ScrollAnimationWrapper>
        </Section>
        <Section
          id='vacancy'
          className='bg-gradient-to-r from-dark-blue to-main-blue'
        >
          <ScrollAnimationWrapper>
            <Container>
              <Vacancy />
            </Container>
          </ScrollAnimationWrapper>
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
      </div>
    </main>
  );
}
