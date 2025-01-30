'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { IFeedback } from '@/src/utils/types';
import dynamic from 'next/dynamic';
import { Suspense, useState } from 'react';
import { SwiperClass } from 'swiper/react';
import { Container } from '../../shared/Container/Container';

interface Props {
  feedback: IFeedback[];
}

const LazyFeedbackSwiper = dynamic(
  () => import('./NewFeedbackSwiper/NewFeedbackSwiper'),
);

export const NewFeedbackClient = ({ feedback }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className='flex flex-col gap-[30px]'>
      <Container className='w-full desktop-hard:px-[80px]'>
        <div className='relative flex w-full items-start justify-between desktop:items-center'>
          <div className='flex flex-col gap-[16px]'>
            <h2 className='font-unbound text-[28px] font-bold uppercase leading-[1.25] tablet:text-[40px] tablet:leading-[1.2] desktop:leading-[1.1] desktop-light:text-[50px]'>
              Feedback
            </h2>
            <p className='font-proxima text-[18px] font-bold leading-[1.1] text-light-gray tablet:text-[20px] tablet:leading-[1.2] desktop:leading-[1]'>
              Honest words of our partners about cooperation
            </p>
          </div>

          <div className=''>
            <NextPrevBtn
              nextPage={() => swiper?.slideNext()}
              prevPage={() => swiper?.slidePrev()}
              bg='dark'
            />
          </div>
        </div>
      </Container>
      <Suspense fallback={<div></div>}>
        <Container className='overflow-visible'>
          <LazyFeedbackSwiper setSwiper={setSwiper} feedback={feedback} />
        </Container>
      </Suspense>
    </div>
  );
};
