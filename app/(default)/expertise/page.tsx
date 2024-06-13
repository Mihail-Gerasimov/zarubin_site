import { BusinessProcess } from '@/src/components/Expertise/BusinessProcess/BusinessProcess';
import { CostumDevelopment } from '@/src/components/Expertise/CostumDevelopment/CostumDevelopment';
import { ExpertiseTitle } from '@/src/components/Expertise/ExpertiseTitle/ExpertiseTitle';
import { Items } from '@/src/components/Expertise/Items/Items';
import { MobileApplications } from '@/src/components/Expertise/MobileApplications/MobileApplications';
import { ProjectsRisks } from '@/src/components/Expertise/ProjectsRisks/ProjectsRisks';
import { ScalableArchitecture } from '@/src/components/Expertise/ScalableArchitecture/ScalableArchitecture';
import { SystemIntegration } from '@/src/components/Expertise/SystemIntegration/SystemIntegration';
import { Virtual } from '@/src/components/Expertise/Virtual/Virtual';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { FeedbackClient } from '@/src/components/Main/Feedback/FeedbackClient';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { TrustUs } from '@/src/components/Main/TrustUs/TrustUs';
import { FeedbackDataExtertise } from '@/src/utils/DataLayers/FeedbackData';
import styles from './expertise.module.css';
import { Section } from '@/src/components/shared/Section/Section';
import { Container } from '@/src/components/shared/Container/Container';

export default function Expertise() {
  return (
    <>
      <main className='mt-[80px] bg-main-bg text-white'>
        <Section id='title'>
          <Container>
            <ExpertiseTitle />
          </Container>
        </Section>
        <Section id='items' className='pb-0 tablet:pb-0 desktop:pb-0'>
          <Container>
            <Items />
          </Container>
        </Section>
        <Section id='virtual-cio' className='pt-0 tablet:pt-0 desktop:pt-0'>
          <Container>
            <div className={styles.contentContainer}>
              <Virtual />
              <BusinessProcess />
              <ProjectsRisks />
              <CostumDevelopment />
              <SystemIntegration />
              <ScalableArchitecture />
              <MobileApplications />
            </div>
          </Container>
        </Section>
        <Section id='insights' className='mt-[40px]'>
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
