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
      className={`relative bg-black p-0 pb-[20px] tablet:p-0 tablet:pb-[40px] desktop:p-0 desktop:pb-[60px]`}
    >
      <div
        className={`gradient-box after:top-0 ${slideIndex === 0 || slideIndex % 2 === 0 ? 'after:left-0' : 'after:right-0'} after:duration-500`}
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
              <div className='w-full overflow-hidden tablet:h-[465px] desktop:h-[589px]'>
                <Image
                  src={item.image}
                  fill
                  objectFit='cover'
                  objectPosition='right'
                  alt=''
                  className='-z-10'
                />
                <Container className='relative z-50 flex h-full w-full flex-col justify-end pt-[40px] text-text-dark tablet:pt-[50px] desktop:z-50 desktop:pt-[67px]'>
                  <h2 className='font-unbound text-[28px] font-bold uppercase leading-[1.16] tablet:text-[50px] tablet:leading-[1.1] desktop-light:text-[70px]'>
                    {item.title}
                  </h2>
                </Container>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Container className='mt-[40px] flex items-center justify-between tablet:mt-[30px] desktop:mt-[40px]'>
          <Link
            href={
              slideData[slideIndex].link
                ? slideData[slideIndex].link
                : '/solutions'
            }
            className='z-30 rounded-[6px] bg-main-orange p-[5px_31px] font-proxima text-[20px] font-bold leading-[2] text-text-dark duration-300 hover:bg-main-orange/80'
          >
            Go to{' '}
            {slideData[slideIndex].linkName
              ? slideData[slideIndex].linkName
              : 'solutions'}
          </Link>
          <div className='z-30 hidden gap-[20px] tablet:flex'>
            {slideData.map((item, idx) => (
              <button
                key={item.linkName}
                type='button'
                onClick={() => swiper?.slidePrev()}
              >
                <span
                  className={`block h-[3px] w-[70px] ${slideIndex === idx ? 'bg-main-orange' : 'bg-black'} duration-300`}
                />
              </button>
            ))}
          </div>
        </Container>
      </div>
    </Section>
  );
};
