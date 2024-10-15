'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import useMediaQuery from '@/src/utils/useMediaQuery';
import { useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Container } from '../../shared/Container/Container';
import styles from './Insights.module.css';
import { InsightsCard } from './InsightsCard/InsightsCard';

interface Post {
  title: string;
  description: string;
  tag: string | undefined;
  downloadLink: string | undefined;
  slug: string;
  type: string | undefined | null;
  image: string | undefined | null;
}
interface Props {
  posts: Post[];
}

export const InsightsClient = ({ posts }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const mobile = useMediaQuery('<tablet');
  const tablet = useMediaQuery('<laptop');
  const isStilTablet = useMediaQuery('>mobile');
  const isTablet = tablet === isStilTablet;

  return (
    <div className='h-600 relative z-10 flex flex-col gap-[40px] pb-20'>
      <Container className='desktop-hard:px-[80px]'>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>Insights</h2>
          <div className={styles.arrowWrapper}>
            <NextPrevBtn
              nextPage={() => swiper?.slideNext()}
              prevPage={() => swiper?.slidePrev()}
            />
          </div>
        </div>
      </Container>
      <Container className='flex max-w-full p-0 pl-[10px] tablet:p-0 tablet:pl-[40px] laptop:px-[40px] desktop-big:px-[80px]'>
        <Swiper
          spaceBetween={mobile ? 20 : 40}
          slidesPerView={mobile ? 1.13 : isTablet ? 1.56 : 3}
          onSwiper={setSwiper}
        >
          {posts.slice(0, 6).map((post, idx) => (
            <SwiperSlide key={idx}>
              <InsightsCard
                title={post.title}
                description={post.description}
                tag={post.tag}
                slug={post.slug}
                type={post.type}
                image={post.image}
                downloadLink={post.downloadLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
