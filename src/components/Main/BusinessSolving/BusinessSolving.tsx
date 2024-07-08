'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { BusinessProblemsData } from '@/src/utils/DataLayers/BusinessProblemsData';
import useMediaQuery from '@/src/utils/useMediaQuery';
import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Container } from '../../shared/Container/Container';
import { BusinessSolvingCard } from './BusinessSolvingCard/BusinessSolvingCard';

export const BusinessSolving = () => {
  const [swiper, setSwiper] = useState<SwiperClass | null>();
  const mobile = useMediaQuery('<tablet');

  const nextSlide = () => {
    if (swiper) swiper.slideNext();
  };
  const prevSlide = () => {
    if (swiper) swiper.slidePrev();
  };

  return (
    <div className='flex flex-col gap-[40px]'>
      <Container>
        <div className='flex items-start justify-between'>
          <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
            Solving business problems
          </h2>
          <div className='hidden items-center gap-[16px] tablet:flex'>
            <NextPrevBtn nextPage={nextSlide} prevPage={prevSlide} />
          </div>
        </div>
      </Container>
      <Container className='max-w-full'>
        <Swiper
          spaceBetween={40}
          slidesPerView={mobile ? 1 : 2}
          onSwiper={setSwiper}
          wrapperClass='items-stretch'
        >
          {BusinessProblemsData.map((item) => (
            <SwiperSlide className='!h-auto' key={item.id}>
              <BusinessSolvingCard
                title={item.title}
                tags={item.tags}
                description={item.description}
                link={item.link}
                image={item.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
