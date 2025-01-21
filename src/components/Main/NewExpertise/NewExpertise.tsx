'use client';

import Link from 'next/link';
import { NextLinePreposition } from '../../NextLinePreposition/NextLinePreposition';
import { Container } from '../../shared/Container/Container';
import { Section } from '../../shared/Section/Section';
import { ExpertiseCard } from './ExpertiseCard/ExpertiseCard';

interface IData {
  data: {
    title: string;
    description: string;
    logo: string;
  }[];
}

export const NewExpertise = ({ data }: IData) => {
  const sliceData = data;
  return (
    <Section light>
      <Container>
        <NextLinePreposition
          text={'Our Areas of Expertise'}
          tag={'h2'}
          className={
            'z-50 font-unbound text-[28px] font-bold uppercase leading-[1.25] text-main-bg tablet:text-[40px] desktop-light:text-[50px]'
          }
        />
        <p className='mt-[15px] font-proxima text-[18px] font-bold leading-[1.1] text-light-gray'>
          Innovative solutions for your business: our key areas of work
        </p>
        <div className='mt-[40px] grid grid-cols-1 gap-[20px] tablet:grid-cols-2 desktop:grid-cols-3 desktop:gap-[40px]'>
          {sliceData.map((item, idx) => (
            <ExpertiseCard data={item} key={idx} idx={idx} />
          ))}
          <div
            className={`expertise-item flex flex-col items-start gap-[57px] rounded-[5px] p-[30px] desktop:order-first ${sliceData.length % 2 === 0 ? 'tablet:col-span-2' : ''}`}
          >
            <div
              className={`z-20 mt-auto flex gap-[24px] ${sliceData.length % 2 === 0 ? 'flex-row items-end' : 'flex-col'}`}
            >
              <h3 className='font-unbound text-[20px] font-bold uppercase leading-[1.1] text-white desktop:text-[28px]'>
                Entrust US Custom Software Development of Your Company
              </h3>
              <Link
                href='/solutions'
                className='h-fit w-fit whitespace-nowrap rounded-[6px] bg-main-orange p-[8px_10px] font-proxima text-[20px] font-bold leading-[1.3] text-text-dark duration-300 hover:bg-main-orange/80 tablet:p-[16px_28px] tablet:text-[24px] tablet:leading-[1.16] desktop-big:p-[13px_32px] desktop-big:text-[36px]'
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
