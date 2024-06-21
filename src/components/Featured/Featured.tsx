'use client';

import Arrow from '@/public/assets/images/icons/arrow.svg';
import { Post } from '@/src/utils/types';
import Link from 'next/link';
import { useState } from 'react';
import { SmallBlogCard } from '../BlogCard/SmallBlogCard';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

interface Props {
  slug?: string;
  posts: Post[];
}

export const Featured = ({ slug, posts }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className='flex flex-col gap-[40px] border-t-[1px] border-text-dark'>
      <div className='relative flex items-center justify-between border-text-dark pt-[20px] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-text-gray'>
        {slug && (
          <p className='font-unbound text-[24px] font-bold uppercase'>
            Featured
          </p>
        )}
        <div className='flex items-center gap-[16px]'>
          <button
            type='button'
            className='flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-main-blue hover:bg-main-blue-hover'
            onClick={() => swiper?.slidePrev()}
          >
            <Arrow className='rotate-[180deg] fill-white' />
          </button>
          <button
            type='button'
            className='flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-main-blue hover:bg-main-blue-hover'
            onClick={() => swiper?.slideNext()}
          >
            <Arrow className='fill-white' />
          </button>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={2}
        spaceBetween={40}
        className='max-w-full'
      >
        {posts.map((item) => (
          <SwiperSlide key={item.slug}>
            <Link href={`/blog/${item.slug}`} className='flex flex-1'>
              <SmallBlogCard
                tag={item.tag ? item.tag : ''}
                title={item.title}
                description={item.description}
                date={item.date}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
