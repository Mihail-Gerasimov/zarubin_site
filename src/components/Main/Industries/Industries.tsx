'use client';

import { IndustriesData } from '@/src/utils/DataLayers/IndustriesData';
import Image from 'next/image';
import { useState } from 'react';
import { IndustriesCard } from './IndustriesCard/IndustriesCard';
import { Container } from '../../shared/Container/Container';

export const Industries = () => {
  const [active, setActive] = useState(1);

  const activeCard = IndustriesData.filter((item) => item.id === active);
  return (
    <Container className='z-0 flex h-full flex-col gap-[40px] desktop:gap-[80px]'>
      <div className='hide-scrollbar z-20 shrink-0 overflow-x-scroll'>
        <ul className='flex h-full items-start gap-[20px]'>
          {IndustriesData.map((item) => (
            <li key={item.id} className='flex flex-col gap-[8px]'>
              <span
                className={`block w-[156px] rounded-full tablet:w-[216px] desktop:w-[336px] ${item.id === active ? 'h-[4px] bg-main-blue' : 'h-[2px] bg-main-disabled'}`}
              />
              <button
                type='button'
                className={`text-left font-proxima text-[20px] font-bold leading-[1] ${item.id === active ? 'text-text-dark' : 'text-main-disabled'}`}
                onClick={() => setActive(item.id)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {activeCard.map((item) => (
        <IndustriesCard
          key={item.id}
          title={item.title}
          link={item.link}
          data={item.data}
        />
      ))}
      <div className='absolute bottom-0 right-0 z-0 hidden h-3/4 w-[50%] opacity-[80%] tablet:block desktop:max-w-[900px]'>
        <Image
          src={IndustriesData[active - 1].image}
          alt=''
          fill
          className='object-contain object-bottom'
        />
      </div>
    </Container>
  );
};
