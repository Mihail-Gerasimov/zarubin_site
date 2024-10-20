import { IFeedback } from '@/src/utils/types';
import dynamic from 'next/dynamic';
import { SwiperClass } from 'swiper/react';
import { Container } from '../../../shared/Container/Container';
import { FeedbackCard } from '../FeedbackCard/FeedbackCard';

interface IFeedbackSwiper {
  feedback: IFeedback[];
  setSwiper: (swiper: SwiperClass) => void;
}

const DynamicSwiper = dynamic(() =>
  import('swiper/react').then((mod) => mod.Swiper),
);
const DynamicSwiperSlide = dynamic(() =>
  import('swiper/react').then((mod) => mod.SwiperSlide),
);

const FeedbackSwiper = ({ feedback, setSwiper }: IFeedbackSwiper) => {
  return (
    <DynamicSwiper
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
        <DynamicSwiperSlide key={item.id} className='!h-auto'>
          <Container className='h-full desktop-hard:px-[80px]'>
            <FeedbackCard
              data={item}
              length={feedback.length}
              indexNumber={index + 1}
            />
          </Container>
        </DynamicSwiperSlide>
      ))}
    </DynamicSwiper>
  );
};

export default FeedbackSwiper;
