'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { IFeedback } from '@/src/utils/types';
import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Container } from '../../shared/Container/Container';
import styles from './Feedback.module.css';
import { FeedbackCard } from './FeedbackCard/FeedbackCard';

interface Props {
  feedback: IFeedback[];
}

export const FeedbackClient = ({ feedback }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className='flex flex-col gap-[30px]'>
      <Container className='desktop-hard:px-[80px]'>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Feedback</h2>

          <div className='hidden tablet:block'>
            <NextPrevBtn
              nextPage={() => swiper?.slideNext()}
              prevPage={() => swiper?.slidePrev()}
            />
          </div>
        </div>
      </Container>
      <Swiper
        breakpoints={{
          1440: {
            slidesPerView: 2.3,
          },
        }}
        slidesPerView={1.3}
        onSwiper={setSwiper}
        className='max-w-full'
      >
        {feedback.map((item, index) => (
          <SwiperSlide key={item.id} className='!h-auto'>
            <Container className='h-full desktop-hard:px-[80px]'>
              <FeedbackCard
                data={item}
                length={feedback.length}
                indexNumber={index + 1}
              />
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
