import { BusinessProcess } from '@/src/components/Expertise/BusinessProcess/BusinessProcess';
import { CostumDevelopment } from '@/src/components/Expertise/CostumDevelopment/CostumDevelopment';
import { Items } from '@/src/components/Expertise/Items/Items';
import { MobileApplications } from '@/src/components/Expertise/MobileApplications/MobileApplications';
import { ProjectsRisks } from '@/src/components/Expertise/ProjectsRisks/ProjectsRisks';
import { ScalableArchitecture } from '@/src/components/Expertise/ScalableArchitecture/ScalableArchitecture';
import { SystemIntegration } from '@/src/components/Expertise/SystemIntegration/SystemIntegration';
import { Virtual } from '@/src/components/Expertise/Virtual/Virtual';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { ContactForm } from '@/src/components/Main/ContactForm/ContactForm';
import { FeedbackClient } from '@/src/components/Main/Feedback/FeedbackClient';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { TrustUs } from '@/src/components/Main/TrustUs/TrustUs';
import { FeedbackDataExtertise } from '@/src/utils/DataLayers/FeedbackData';
import styles from './expertise.module.css';

export default function Expertise() {
  return (
    <>
      <Header />
      <main className='mt-[80px] bg-main-bg text-white'>
        <section id='title' className='pt-[40px]'>
          <div className='px-[10px]'>
            <h1 className='font-unbound text-[50px] font-bold uppercase leading-[1.16] tablet:text-[90px] desktop:text-[100px]'>
              Expertise
            </h1>
          </div>
        </section>
        <section id='items'>
          <Items />
        </section>
        <section id='virtual-cio'>
          <div className={styles.contentContainer}>
            <Virtual />
            <BusinessProcess />
            <ProjectsRisks />
            <CostumDevelopment />
            <SystemIntegration />
            <ScalableArchitecture />
            <MobileApplications />
          </div>
        </section>
        <section id='insights' className='mt-[40px]'>
          <Insights />
        </section>
        <section>
          <TrustUs />
        </section>
        <section
          id='feedback'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <FeedbackClient feedback={FeedbackDataExtertise} />
        </section>
        <section id='contacts'>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
