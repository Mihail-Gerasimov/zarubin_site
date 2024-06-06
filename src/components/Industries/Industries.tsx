'use client';

import { IndustriesData } from '@/src/utils/DataLayers/IndustriesData';
import Image from 'next/image';
import { useState } from 'react';
import { IndustriesCard } from '../IndustriesCard/IndustriesCard';

export const Industries = () => {
  const [active, setActive] = useState(1);

  const activeCard = IndustriesData.filter((item) => item.id === active);
  return (
    <div className='relative z-0 flex flex-col gap-[40px] overflow-hidden bg-white px-[10px] pb-[20px] pt-[40px] tablet:px-[40px] tablet:pb-[100px] tablet:pt-[60px] desktop:gap-[80px] desktop:px-[80px]'>
      <div className='hide-scrollbar z-20 overflow-scroll'>
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
      <Image
        src={IndustriesData[active - 1].image}
        width={300}
        height={300}
        alt=''
        className='absolute bottom-0 right-0 z-0 hidden h-[auto] w-[50%] opacity-[80%] tablet:block desktop:max-w-[30%]'
      />
    </div>
  );
};
