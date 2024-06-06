import LinkArrowIcon from '@/public/assets/images/icons/link_arrow.svg';
import solutionBg from '@/public/assets/images/main/solution_bg.png';
import { BusinessSolving } from '@/src/components/BusinessSolving/BusinessSolving';
import { ExpertiseCard } from '@/src/components/ExpertiseCard/ExpertiseCard';
import { Footer } from '@/src/components/Footer/Footer';
import { Header } from '@/src/components/Header/Header';
import { Industries } from '@/src/components/Industries/Industries';
import { Insights } from '@/src/components/Main/Insights/Insights';
import { TrustUs } from '@/src/components/Main/TrustUs/TrustUs';
import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import { LinkArrow } from '@/src/ui-kit/LinkArrow/LinkArrow';
import { ExpertiseData } from '@/src/utils/DataLayers/ExpertiseData';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className='mt-[80px] bg-main-bg text-white'>
        <section>
          <div className='px-[10px] tablet:px-[20px] desktop:pt-[60px]'>
            <div
              className='relative flex flex-col gap-[60px] bg-cover px-[20px] py-[40px] before:absolute before:inset-0 before:bg-main-blue/80 before:content-[""] tablet:px-[40px] desktop:flex-row desktop:px-[60px] desktop:py-[145px]'
              style={{
                backgroundImage: 'url(/assets/images/main/hero_bg.png)',
              }}
            >
              <div className='z-[5] flex flex-col gap-[12px] tablet:gap-[24px] desktop:gap-[30px] desktop:py-[px]'>
                <h1 className='desctop-hard:text-[100px] z-[5] font-unbound text-[28px] font-bold leading-[1.14] tablet:text-[60px]'>
                  Business solutions and expertise
                </h1>
                <p className='z-[5] font-proxima text-[28px] font-bold leading-[1.14] tablet:text-[36px]'>
                  Digital business transformation
                </p>
                <Link
                  href='#'
                  className='z-[5] w-fit rounded-[6px] bg-[#7CFFCD] px-[32px] py-[13px] font-proxima text-[20px] font-bold leading-[1] text-text-dark'
                >
                  Go to Insights
                </Link>
              </div>
              <div className='z-[5] flex flex-col gap-[21px]'>
                <div className='relative z-[5] overflow-hidden rounded-[5px] bg-gradient-to-br from-[#000A25] to-[#000A25]/60 bg-cover p-[20px]'>
                  <h3 className='font-unbound text-[24px] font-bold uppercase leading-[1.16]'>
                    Success Solutions
                  </h3>
                  <p className='mt-[12px] font-proxima text-[20px] leading-[1.2]'>{`The stories of solving our clients' cases`}</p>
                  <Link
                    href='#'
                    className='mt-[40px] flex h-[30px] w-fit items-center justify-center gap-[10px] rounded-[6px] bg-main-blue px-[10px] font-proxima text-[18px] font-bold leading-[1.33] tablet:h-[50px]'
                  >
                    Go to solutions
                    <LinkArrowIcon className='h-[18px] w-[18px]' />
                  </Link>
                  <Image
                    src={solutionBg}
                    width={200}
                    height={150}
                    alt='solution'
                    className='absolute bottom-0 right-0 z-[-1] w-full opacity-[50%] tablet:w-[50%]'
                  />
                </div>
                <div className='z-[5] rounded-[5px] bg-white p-[20px]'>
                  <div className='max-w-[500px]'>
                    <h3 className='font-unbound text-[24px] font-bold uppercase leading-[1.16] text-text-dark tablet:text-[22px] tablet:leading-[1.1]'>
                      Top 15 Best Practices for Improving Metrics in Sports
                    </h3>
                    <p className='mt-[12px] font-proxima text-[20px] leading-[1.2] text-text-dark desktop:mt-[19px]'>
                      Implement it in order to increase metrics and change the
                      attitude of the audience to the brand
                    </p>
                  </div>
                  <div className='mt-[20px] flex flex-col gap-[25px] tablet:flex-row desktop:mt-[25px]'>
                    <DownloadLink link='/' />

                    <div className='h-[64px] w-[232px]'>
                      <LinkArrow title='Go to the research' link='/' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='expertise'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <div className='px-[10px] tablet:px-[40px] tablet:pb-[40px] desktop:px-[80px] desktop:py-[35px]'>
            <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
              Expertise and expirence
            </h2>
            <ul className='mt-[20px] flex flex-col gap-[20px] tablet:mt-[8px] tablet:gap-0 desktop:mt-[40px]'>
              {ExpertiseData.map((item) => (
                <li key={item.id}>
                  <ExpertiseCard
                    isEven={item.id % 2 === 0}
                    title={item.title}
                    subData={item.data}
                    image={item.image}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section
          id='unlock'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <div className='relative overflow-hidden p-[100px_10px] tablet:p-[100px_40px] desktop:p-[100px_80px]'>
            <Image
              src='/assets/images/main/group.png'
              layout='fill'
              objectFit='cover'
              objectPosition='bottom'
              alt=''
              className='absolute bottom-0 right-0 opacity-[3%]'
            />
            <h2 className='z-[5] font-unbound text-[40px] font-bold uppercase tablet:text-[60px] desktop:text-[90px]'>
              Unlock Your Business Potential with Our Expertise and
              <span className='text-stroke text-[40px] tablet:text-[60px] desktop:text-[90px]'>
                {' '}
                Strategic Insights
              </span>
            </h2>
          </div>
        </section>
        <section id='industries'>
          <div>
            <Industries />
          </div>
        </section>
        <section id='business-problems' className='mt-[20px]'>
          <div className='px-[10px] tablet:px-[40px] desktop:px-[80px]'>
            <BusinessSolving />
          </div>
        </section>
        <section
          id='business-intelligence'
          className='mt-[40px] tablet:mt-[60px] desktop:mt-[80px]'
        >
          <div className='bussinesBg overflow-hidden px-[10px] py-[60px] text-right tablet:px-[40px] tablet:pb-[170px] tablet:pt-0 desktop:px-[80px] desktop:py-[100px]'>
            <div className='relative z-30'>
              <h2 className='font-unbound text-[32px] font-bold uppercase leading-[1.1] tablet:text-[60px] tablet:leading-[1] desktop-big:text-[90px]'>
                Where Leadership Meets{' '}
              </h2>
              <h2 className='text-stroke font-unbound text-[32px] font-bold uppercase leading-[1.1] tablet:text-[60px] tablet:leading-[1] desktop:mb-[230px] desktop-big:text-[90px]'>
                Business Intelligence
              </h2>
            </div>
            <Image
              width={400}
              height={300}
              src='/assets/images/main/bussines_bg.png'
              alt=''
              className='absolute right-[64px] top-[18px] h-[auto] w-[436px] tablet:right-0 tablet:top-[23px] tablet:w-full desktop:left-[-100px] desktop:h-[728px] desktop:w-[auto]'
            />
          </div>
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
        <section id='feedback'>
          <div>
            <div>
              <h2>Feedback</h2>
              <div></div>
              <button>{'<'}</button>
              <button>{'>'}</button>
            </div>
            <div>
              <Image src={'/'} width={355} height={251} alt='feedback' />
              <div>
                <h3>Dmitriy</h3>
                <span>Co-Founder Orbita.vc</span>
                <p>
                  Vitaly is a very motivated entrepreneur and technical
                  director. He has the vision necessary for startups to make the
                  most effective and quick decisions.
                </p>
                <span>1/2</span>
              </div>
            </div>
          </div>
        </section>
        <section id='contacts'>
          <div>
            <div>
              <h2>
                We are always glad to have new partners and ambitious tasks.
              </h2>
              <div>
                <Image src={'/'} width={80} height={80} alt='author' />
                <div>
                  <p>Vitaly Z.</p>
                  <span>«The road arises under the steps of walking»</span>
                </div>
                <Link href='mailto:hello@digitalburo.tech'>
                  hello@digitalburo.tech
                </Link>
              </div>
            </div>
            <form>
              <h3>
                Fill out the form and click the blue button to get in touch with
                you!
              </h3>

              <input placeholder='Name' />
              <input placeholder='E-mail' />
              <input placeholder='Phone' />
              <input placeholder='Project details' />
              <button type='submit'>Blue button</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
