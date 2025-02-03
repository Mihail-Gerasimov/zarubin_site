import { IFeedback } from '@/src/utils/types';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { NewFeedbackCard } from '../NewFeedbackCard/NewFeedbackCard';

interface IFeedbackSwiper {
  feedback: IFeedback[];
  setSwiper: (swiper: SwiperClass) => void;
}

const NewFeedbackSwiper = ({ feedback, setSwiper }: IFeedbackSwiper) => {
  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 1.5,
        },
        1200: {
          slidesPerView: 2.1,
        },
        1440: {
          slidesPerView: 2.3,
        },
        1920: {
          slidesPerView: 3.3,
        },
      }}
      slidesPerView={1}
      onSwiper={setSwiper}
      className='max-w-full'
    >
      {feedback.map((item, index) => (
        <SwiperSlide key={item.id} className='!h-auto'>
          <div className='h-full w-full tablet:pr-[20px] desktop:pr-[40px]'>
            <NewFeedbackCard
              data={item}
              length={feedback.length}
              indexNumber={index + 1}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewFeedbackSwiper;
