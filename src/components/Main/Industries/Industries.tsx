'use client';

import { IndustriesData } from '@/src/utils/DataLayers/IndustriesData';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Container } from '../../shared/Container/Container';
import { IndustriesCard } from './IndustriesCard/IndustriesCard';

export const Industries = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    liRefs.current[selectedIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }, [selectedIndex]);

  return (
    <Container className='z-0 flex h-full flex-col gap-[40px] desktop:gap-[80px] desktop-hard:px-[80px]'>
      <div className='hide-scrollbar z-20 shrink-0 overflow-x-scroll'>
        <ul className='flex h-full items-start gap-[20px] pt-[5px] tablet:justify-between'>
          {IndustriesData.map((item, index) => (
            <li
              key={item.id}
              ref={(el) => {
                liRefs.current[index] = el;
              }}
              className='group flex w-fit flex-col gap-[8px]'
            >
              <div
                className={`w-[156px] rounded-full bg-main-disabled tablet:w-[216px] desktop-hard:w-[336px]  ${index === selectedIndex ? 'h-[4px]' : 'h-[2px] group-hover:bg-main-bg/70'}`}
              >
                <span
                  className={`block h-full rounded-full bg-main-blue ${index === selectedIndex ? 'w-full transition-[width] duration-[4000ms] ease-linear' : 'w-0'}`}
                />
              </div>
              <button
                type='button'
                className={`text-left font-proxima text-[20px] font-bold leading-[1] group-hover:text-text-dark ${index === selectedIndex ? 'text-text-dark' : 'text-main-disabled'}`}
                onClick={() => {
                  swiper?.slideTo(index);
                }}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Swiper
        className='max-w-full overflow-y-visible'
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
        wrapperClass='items-stretch'
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
      >
        {IndustriesData.map((item) => (
          <SwiperSlide
            key={item.id}
            className='!h-auto pb-[40px] tablet:pb-[60px] desktop:pb-[80px]'
          >
            <IndustriesCard
              key={item.id}
              title={item.title}
              link={item.link}
              data={item.data}
            />
            <div className='absolute bottom-0 right-0 z-0 hidden h-3/4 w-[50%] opacity-[80%] tablet:block desktop:max-w-[900px]'>
              <Image
                src={item.image}
                alt=''
                fill
                priority
                className='object-contain object-bottom'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
