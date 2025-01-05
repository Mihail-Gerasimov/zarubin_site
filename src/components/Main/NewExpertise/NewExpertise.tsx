// import { areasData } from '@/src/utils/DataLayers/NewExpertiseData';
import Image from 'next/image';
import Link from 'next/link';
import { NextLinePreposition } from '../../NextLinePreposition/NextLinePreposition';
import { Container } from '../../shared/Container/Container';
import { Section } from '../../shared/Section/Section';

interface IData {
  data: {
    title: string;
    description: string;
    logo: string;
  }[];
}

export const NewExpertise = ({ data }: IData) => {
  return (
    <Section light>
      <Container>
        <NextLinePreposition
          text={'Our Areas of Expertise'}
          tag={'h2'}
          className={
            'z-50 font-unbound text-[28px] font-bold uppercase leading-[1.25] text-main-bg'
          }
        />
        <p className='mt-[15px] font-proxima text-[18px] font-bold leading-[1.1] text-light-gray'>
          Innovative solutions for your business: our key areas of work
        </p>
        <div className='mt-[40px] grid grid-cols-1 gap-[20px] tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-[40px]'>
          {data.map(({ title, description, logo }, idx) => (
            <div
              key={idx}
              className='flex flex-col items-start gap-[57px] rounded-[5px] bg-main-beige p-[30px] duration-300'
            >
              <Image
                src={logo}
                width={60}
                height={60}
                alt=''
                className='ml-auto'
              />
              <div className='mt-auto flex flex-col gap-[24px]'>
                <h3 className='font-unbound text-[20px] font-bold uppercase leading-[1.1] text-main-bg desktop:text-[28px]'>
                  {title}
                </h3>
                <p className='font-proxima text-[16px] leading-[1.16] text-second-gray desktop:text-[24px]'>
                  {description}
                </p>
              </div>
            </div>
          ))}
          <div className='flex flex-col items-start gap-[57px] rounded-[5px] bg-main-bg p-[30px]'>
            <div className='mt-auto flex flex-col gap-[24px]'>
              <h3 className='font-unbound text-[20px] font-bold uppercase leading-[1.1] text-white desktop:text-[28px]'>
                Entrust US Custom Software Development of Your Company
              </h3>
              <Link
                href='/solutions'
                className='w-fit rounded-[6px] bg-main-orange p-[5px_31px] font-proxima text-[20px] font-bold leading-[2] text-text-dark duration-300 hover:bg-main-orange/80'
              >
                Go to solutions
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
