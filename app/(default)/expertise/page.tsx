import { ExpertiseTitle } from '@/src/components/Expertise/ExpertiseTitle/ExpertiseTitle';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { FeedbackClient } from '@/src/components/Main/Feedback/FeedbackClient';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { TrustUs } from '@/src/components/Main/TrustUs/TrustUs';
import { FeedbackDataExtertise } from '@/src/utils/DataLayers/FeedbackData';
import { Section } from '@/src/components/shared/Section/Section';
import { Container } from '@/src/components/shared/Container/Container';
import { ClientExpertiseItems } from './ClientExpertiseItems';
import { ExpertiseFeedbackBgSvg } from '@/src/components/svg/ExpertiseFeedbackgBgSvg';
import { ExpertiseHeroBgSvg } from '@/src/components/svg/ExpertiseHeroBgSvg';

export default function Expertise() {
  return (
    <>
      <main className='bg-main-bg text-white'>
        <Section id='title' className='overflow-x-hidden overflow-y-hidden'>
          <Container>
            <ExpertiseTitle />
          </Container>
          <div className='absolute inset-0 flex after:absolute after:inset-0 after:bg-gradient-to-t after:from-main-bg after:to-transparent'>
            <div className='absolute left-1/2 top-[70px] -translate-x-1/2 desktop:left-1/2 desktop:-translate-x-1/3'>
              <ExpertiseHeroBgSvg />
            </div>
          </div>
        </Section>
        <Section id='virtual-cio' className='pt-0 tablet:pt-0 desktop:pt-0'>
          <ClientExpertiseItems />
        </Section>
        <Section id='insights'>
          <Insights />
        </Section>
        <Section>
          <Container>
            <TrustUs />
          </Container>
        </Section>
        <Section
          id='feedback'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <Container>
            <FeedbackClient feedback={FeedbackDataExtertise} />
            <div className='absolute inset-0 bg-[linear-gradient(100deg,#000A25_14.95%,#00248B_92.57%)]'></div>
            <div className='absolute inset-0 max-tablet:-bottom-1/2'>
              <ExpertiseFeedbackBgSvg />
            </div>
          </Container>
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
