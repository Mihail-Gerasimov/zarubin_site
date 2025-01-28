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
            className={`expertise-item flex flex-1 flex-col items-start gap-[57px] rounded-[5px] p-[30px] tablet:col-span-2 tablet:min-h-[186px] desktop:order-first`}
          >
            <div
              className={`z-20 mt-auto flex w-full flex-col gap-[24px] tablet:flex-row tablet:justify-between tablet:gap-0 laptop:items-end`}
            >
              <h3 className='font-unbound text-[20px] font-bold uppercase leading-[1.1] text-white tablet:max-w-[302px] laptop:max-w-[652px] desktop:text-[28px]'>
                Investing in sports and AI, creating innovative products
              </h3>
              <Link
                href='/solutions'
                className='hover:bg-main-orange-hover h-fit w-fit whitespace-nowrap rounded-[6px] bg-main-orange p-[8px_10px] font-proxima text-[20px] font-bold leading-[1.3] text-text-dark duration-300 tablet:p-[16px_28px] tablet:text-[24px] tablet:leading-[1.16] desktop-big:p-[13px_32px] desktop-big:text-[36px]'
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
