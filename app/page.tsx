import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
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

export default function Home() {
  return (
    <>
      <Header />
      <main className='mt-[80px] bg-main-bg text-white'>
        <section id='hero'>
          <Hero />
        </section>
        <section
          id='expertise'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <Expertise />
        </section>
        <section
          id='unlock'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <Unlock />
        </section>
        <section id='industries'>
          <div>
            <Industries />
          </div>
        </section>
        <section
          id='business-problems'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <div className='px-[10px] tablet:px-[40px] desktop:px-[80px]'>
            <BusinessSolving />
          </div>
        </section>
        <section
          id='business-intelligence'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <Intelligence />
        </section>
        <section
          id='insights'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <div>
            <Insights />
          </div>
        </section>
        <section id='clients'>
          <TrustUs />
        </section>
        <section
          id='feedback'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <Feedback />
        </section>
        <section id='contacts'>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
