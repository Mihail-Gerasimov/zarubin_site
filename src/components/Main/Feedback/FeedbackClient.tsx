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
  () => import('./FeedbackSwiper/FeedbackSwiper'),
);

export const FeedbackClient = ({ feedback }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className='flex flex-col gap-[30px]'>
      <Container className='desktop-hard:px-[80px]'>
        <div className='relative flex w-full items-center justify-between'>
          <h2 className='font-unbound text-[45px] font-bold uppercase'>
            Feedback
          </h2>

          <div className='hidden tablet:block'>
            <NextPrevBtn
              nextPage={() => swiper?.slideNext()}
              prevPage={() => swiper?.slidePrev()}
            />
          </div>
        </div>
      </Container>
      <Suspense fallback={<div></div>}>
        <LazyFeedbackSwiper setSwiper={setSwiper} feedback={feedback} />
      </Suspense>
    </div>
  );
};
