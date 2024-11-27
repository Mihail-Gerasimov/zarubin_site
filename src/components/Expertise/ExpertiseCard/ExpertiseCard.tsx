'use client';

import defaultImg from '@/public/assets/images/banner/default_insights.webp';
import { Post } from '@/src/utils/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface IData {
  data: Post;
}

const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  laptop_small: 1200,
  laptop: 1280,
  desktop: 1440,
  desktop_big: 1920,
};

const descrFontSize = 16;
const descrLineHeight = 1.25;

const getLine = (
  container: HTMLDivElement | null,
  title: HTMLHeadingElement | null,
) => {
  if (!container || !title) return 0;

  const totalContentHeight = container.offsetHeight;
  const totalTitleHeight = title.offsetHeight;
  const difference = totalContentHeight - totalTitleHeight - 40;

  if (difference < descrFontSize * descrLineHeight) return 0;

  const line = Math.floor(difference / (descrFontSize * descrLineHeight));

  return line;
};

export const ExpertiseCard = ({ data }: IData) => {
  const { title, description, slug, image } = data;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const [descrLine, setDescrLine] = useState(0);
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth > 0 && windowWidth < BREAKPOINTS.tablet) {
        setWindowSize(BREAKPOINTS.mobile);
      } else if (
        windowWidth < BREAKPOINTS.laptop_small &&
        windowWidth >= BREAKPOINTS.tablet
      ) {
        setWindowSize(BREAKPOINTS.tablet);
      } else if (
        windowWidth < BREAKPOINTS.laptop &&
        windowWidth >= BREAKPOINTS.laptop_small
      ) {
        setWindowSize(BREAKPOINTS.laptop_small);
      } else if (
        windowWidth < BREAKPOINTS.desktop &&
        windowWidth >= BREAKPOINTS.laptop
      ) {
        setWindowSize(BREAKPOINTS.laptop);
      } else if (
        windowWidth < BREAKPOINTS.desktop_big &&
        windowWidth >= BREAKPOINTS.desktop
      ) {
        setWindowSize(BREAKPOINTS.desktop);
      } else {
        setWindowSize(BREAKPOINTS.desktop_big);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (titleRef.current && containerRef.current) {
      const line = getLine(containerRef.current, titleRef.current);
      setDescrLine(line);
    }
  }, [windowSize]);

  return (
    <Link
      href={`/expertise/${slug}`}
      className='flex h-full flex-col rounded-[5px] bg-card-bg'
    >
      <div className='relative aspect-[16/9] w-full overflow-hidden rounded-tl-[5px] rounded-tr-[5px]'>
        <Image
          src={image || defaultImg}
          alt={title || 'post image'}
          width={450}
          height={250}
          className='h-full w-full object-cover object-center'
          quality={80}
        />
      </div>
      <div
        ref={containerRef}
        className='flex h-full max-h-[160px] min-h-[160px] w-full flex-1 flex-col overflow-hidden rounded-b-[5px] px-[10px] py-[20px] tablet:px-[20px]'
      >
        <h3
          ref={titleRef}
          className='line-clamp-5 overflow-hidden font-unbound text-[18px] font-bold uppercase leading-[1.3] text-text-dark tablet:text-[18px] tablet:leading-[1.4] desktop:line-clamp-4 desktop:text-[20px]'
        >
          {title}
        </h3>
        {!!descrLine && (
          <p
            className={`mt-[auto] text-[16px] leading-[1.25]`}
            style={{
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: descrLine,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};
