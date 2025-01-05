'use client';

import firstImage from '@/public/assets/images/main/heroSlide/first.webp';
import secondImage from '@/public/assets/images/main/heroSlide/second.webp';
import useMediaQuery from '@/src/utils/useMediaQuery';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Container } from '../../shared/Container/Container';
import { Section } from '../../shared/Section/Section';

interface IIconsProp {
  icons: {
    id: number;
    name: string;
    logo: string;
  }[];
}

export const NewHero = ({ icons }: IIconsProp) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mediaQuety = useMediaQuery('<tablet');

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper, activeIndex]);

  return (
    <Section
      light
      className='relative p-0 pb-[20px] tablet:p-0 tablet:pb-[40px] desktop:p-0 desktop:pb-[60px]'
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={setSwiper}
        className=''
      >
        <SwiperSlide className=''>
          <div
            className='relative h-[332px] w-full overflow-hidden tablet:h-[465px] desktop:h-[589px]'
            style={{
              background: 'linear-gradient(to top, #fff , #F8AE3C33 80%)',
            }}
          >
            <Image
              src={firstImage}
              fill
              objectFit='cover'
              objectPosition='right'
              alt=''
              className='-z-10'
            />
            <Container className='flex h-full w-full flex-col justify-between  pt-[40px] text-text-dark  tablet:pt-[50px]  desktop:pt-[67px]'>
              <div className='relative flex'>
                {icons.map(({ id, name, logo }, idx) => (
                  <div
                    key={id}
                    className={`absolute flex h-[40px] w-[40px] items-center justify-center rounded-full border-[1px] border-gray-400 bg-white tablet:h-[50px] tablet:w-[50px]`}
                    style={{ left: `${mediaQuety ? idx * 35 : idx * 45}px` }}
                  >
                    <Image
                      src={logo}
                      width={24}
                      height={24}
                      alt={name}
                      className='h-[20px] w-[20px] tablet:h-[26px] tablet:w-[26px]'
                    />
                  </div>
                ))}
              </div>
              <h2 className='z-30 font-unbound text-[30px] font-bold uppercase leading-[1.16] tablet:text-[50px] tablet:leading-[1.1]'>
                Welcome to home of sports & game consulting
              </h2>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='relative h-[332px] w-full overflow-hidden tablet:h-[465px] desktop:h-[589px]'
            style={{
              background: 'linear-gradient(to top, #fff , #F8AE3C33 80%)',
            }}
          >
            <Image
              src={secondImage}
              fill
              objectFit='cover'
              objectPosition='right'
              alt=''
              className='-z-10'
            />
            <Container className='flex h-full w-full flex-col justify-between pt-[40px] text-text-dark tablet:pt-[50px] desktop:pt-[67px]'>
              <h2 className='mt-auto font-unbound text-[30px] font-bold uppercase leading-[1.16] text-text-dark tablet:text-[50px] tablet:leading-[1.1]'>
                Structured business processes in Entertainment & Finances
              </h2>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
      <Container className='mt-[40px] flex items-center justify-between tablet:mt-[30px] desktop:mt-[40px]'>
        <Link
          href='/solutions'
          className='rounded-[6px] bg-main-orange p-[5px_31px] font-proxima text-[20px] font-bold leading-[2] text-text-dark duration-300 hover:bg-main-orange/80'
        >
          Go to solution
        </Link>
        <div className='hidden gap-[20px] tablet:flex '>
          <button type='button' onClick={() => swiper?.slidePrev()}>
            <span
              className={`block h-[3px] w-[70px] ${activeIndex === 0 ? 'bg-main-orange' : 'bg-black'} duration-300`}
            />
          </button>
          <button type='button' onClick={() => swiper?.slideNext()}>
            <span
              className={`block h-[3px] w-[70px] ${activeIndex === 1 ? 'bg-main-orange' : 'bg-black'} duration-300`}
            />
          </button>
        </div>
      </Container>
    </Section>
  );
};
