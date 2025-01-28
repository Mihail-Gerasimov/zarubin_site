'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Container } from '../../shared/Container/Container';
import { Section } from '../../shared/Section/Section';

interface IHeroProp {
  slideData: {
    title: string;
    image: string;
    link: string;
    linkName: string;
  }[];
}

export const NewHero = ({ slideData }: IHeroProp) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [slideIndex, setActiveSlideIndex] = useState<number>(0);

  useEffect(() => {
    if (swiper) {
      const handleSlideChange = () => {
        setActiveSlideIndex(swiper.realIndex);
      };
      swiper.on('slideChange', handleSlideChange);
      return () => {
        swiper.off('slideChange', handleSlideChange);
      };
    }
  }, [swiper]);

  return (
    <Section
      light
      className={`relative bg-black p-0 pb-[40px] tablet:p-0 tablet:pb-[40px] desktop:p-0 desktop:pb-[60px]`}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={setSwiper}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slideData.map((item) => (
          <SwiperSlide key={item.title}>
            <div
              className={`gradient-box h-[380px] duration-500 tablet:h-[465px] desktop:h-[589px] ${slideIndex === 0 || slideIndex % 2 === 0 ? 'after:left-0' : 'after:right-0'} after:duration-500`}
            >
              <Image
                src={item.image}
                fill
                objectFit='cover'
                objectPosition='center'
                alt=''
                className='-z-10 grayscale'
              />
              <Container className='flex h-full w-full flex-col justify-end pt-[40px] text-text-dark tablet:pt-[50px] desktop:z-50 desktop:pt-[67px]'>
                <h2 className='z-50 font-unbound text-[28px] font-bold uppercase leading-[1.16] tablet:text-[50px] tablet:leading-[1.1] desktop-light:text-[70px]'>
                  {item.title}
                </h2>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Container className='mt-[20px] flex flex-col items-start justify-between gap-[35px] tablet:mt-[30px] tablet:flex-row tablet:items-center desktop:mt-[40px]'>
        <Link
          href={
            slideData[slideIndex].link
              ? slideData[slideIndex].link
              : '/solutions'
          }
          className='z-30 rounded-[6px] bg-main-orange p-[5px_31px] font-proxima text-[20px] font-bold leading-[2] text-text-dark duration-300 hover:bg-main-orange-hover'
        >
          Go to{' '}
          {slideData[slideIndex].linkName
            ? slideData[slideIndex].linkName
            : 'solutions'}
        </Link>
        <div className='z-30 flex w-full gap-[20px] tablet:max-w-[402px] desktop:max-w-[482px]'>
          {slideData.map((item, idx) => (
            <button
              key={idx}
              type='button'
              onClick={() => swiper?.slideTo(idx)}
              className='h-[3px] w-full bg-main-silver'
            >
              <span
                className={`block h-full bg-main-orange ${idx === slideIndex ? 'w-full transition-[width] duration-[3000ms] ease-linear' : 'w-0'}`}
              />
            </button>
          ))}
        </div>
      </Container>
    </Section>
  );
};
