'use client';

import carImage from '@/public/assets/images/main/auto.png';
import sportImage from '@/public/assets/images/main/bassketball.png';
import retailImage from '@/public/assets/images/main/cart.png';
import mediaImage from '@/public/assets/images/main/cup.png';
import serviceImage from '@/public/assets/images/main/lamp.png';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
import styles from './Industries.module.css';
import { IndustriesCard } from './IndustriesCard/IndustriesCard';
import { Welcome } from './Welcome/Welcome';

export interface IIndustries {
  id: number;
  title: string;
  description: string;
  link: string;
  image: StaticImageData;
}

const INDUSTRIES: IIndustries[] = [
  {
    id: 1,
    title: 'Car',
    description: 'digital products for Retail',
    link: '#',
    image: carImage,
  },
  {
    id: 2,
    title: 'Service',
    description: 'digital products for Service improvement',
    link: '#',
    image: serviceImage,
  },
  {
    id: 3,
    title: 'Media',
    description: 'digital products for Car industry',
    link: '#',
    image: mediaImage,
  },
  {
    id: 4,
    title: 'Retail',
    description: 'digital products for MEDIA & Entertainment',
    link: '#',
    image: retailImage,
  },
  {
    id: 5,
    title: 'Sport',
    description: 'digital products for sports business',
    link: '#',
    image: sportImage,
  },
];

export const Industries = () => {
  const [activeId, setActiveId] = useState<null | number>(null);
  return (
    <div className='flex flex-col gap-[40px] tablet:gap-[20px]'>
      <div className='flex flex-col desktop:flex-row desktop:items-center desktop:gap-[60px] desktop:px-[80px] desktop-hard:gap-[256px]'>
        <div>
          <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px]'>
            Industries
          </h2>
          <p className='mt-[12px] font-proxima text-[20px] leading-[1.2] tablet:text-[24px] desktop:mt-[24px] desktop:w-[532px]'>
            Our expertise covers all industries. We have the most experience in
            the sports, FMCG, E-commerce industries
          </p>
          <div
            className={`${styles.allIndustries} mt-[156px] hidden w-[240px] p-[54px_0_29px_27px] desktop:block`}
          >
            <h3 className='font-unbound text-[24px] font-bold uppercase leading-[1.16] '>
              All industries
            </h3>
          </div>
        </div>
        <div
          className={`${''} relative mb-[500px] mt-[40px] h-fit laptop:mb-[650px] desktop:mt-[60px] desktop:w-fit desktop-hard:mb-[900px]`}
        >
          {INDUSTRIES.map((item) => (
            <IndustriesCard
              key={item.id}
              data={item}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
      <Welcome />
    </div>
  );
};
