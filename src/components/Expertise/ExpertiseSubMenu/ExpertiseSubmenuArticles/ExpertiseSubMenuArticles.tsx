import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ExpertiseMenuCard } from '../../ExpertiseMenuCard/ExpertiseMenuCard';
import { Post } from '@/src/utils/types';
import LinkArrow from '@/public/assets/images/icons/link_arrow.svg';
import useMediaQuery from '@/src/utils/useMediaQuery';

interface IData {
  data: Post[];
}

export const ExpertiseSubmenuArticles = ({ data }: IData) => {
  const isMobile = useMediaQuery('<tablet');
  const isTablen = useMediaQuery('<laptop');

  return (
    <div className='flex w-full flex-col gap-[20px]'>
      <div className='flex items-center justify-between'>
        <p className='font-unbound text-[20px] font-bold uppercase leading-[1.4]'>
          The latest expertise
        </p>
        <Link
          href='/expertise'
          className='flex items-center gap-[10px] whitespace-nowrap font-proxima text-[20px] font-bold leading-[1] text-main-blue'
        >
          All articles
          <LinkArrow className='h-[auto] w-[24px] fill-main-blue' />
        </Link>
      </div>
      <div className='mx-0 flex w-full px-0'>
        <Swiper
          spaceBetween={isMobile ? 20 : 40}
          slidesPerView={isMobile ? 1.2 : isTablen && !isMobile ? 1.5 : 2}
        >
          {data.slice(0, 2).map((post, idx) => (
            <SwiperSlide key={idx} className='w-full'>
              <ExpertiseMenuCard
                title={post.title}
                description={post.description}
                tag={post.tag}
                slug={post.slug}
                subCategory={post.subCategory}
                image={post.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
