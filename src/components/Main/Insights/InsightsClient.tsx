'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { useState } from 'react';
import styles from './Insights.module.css';
import { InsightsCard } from './InsightsCard/InsightsCard';
import { Container } from '../../shared/Container/Container';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import useMediaQuery from '@/src/utils/useMediaQuery';

interface Post {
  title: string;
  description: string;
  tag: string | undefined;
  downloadLink: string | undefined;
  slug: string;
  type: string | undefined | null;
}
interface Props {
  posts: Post[];
}

export const InsightsClient = ({ posts }: Props) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const mediaQuery = useMediaQuery('<desktop');

  return (
    <div className='relative z-10 flex flex-col gap-[40px]'>
      <Container>
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
      <Container className='max-w-full'>
        <Swiper
          spaceBetween={40}
          slidesPerView={mediaQuery ? 1.5 : 3}
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
                downloadLink={post.downloadLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
