'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { BusinessProblemsData } from '@/src/utils/DataLayers/BusinessProblemsData';
import useMediaQuery from '@/src/utils/useMediaQuery';
import { useEffect, useRef, useState } from 'react';
import styles from './BusinessSolving.module.css';
import { BusinessSolvingCard } from './BusinessSolvingCard/BusinessSolvingCard';
import { Container } from '../../shared/Container/Container';

export const BusinessSolving = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mediaQuery = useMediaQuery('<tablet');
  console.log(mediaQuery);

  const [scrollStep, setScrollStep] = useState(320);

  useEffect(() => {
    if (!cardRef.current) return;
    setScrollStep(cardRef.current.scrollWidth);
  }, []);

  const nextSlide = () => {
    if (!parentRef.current) return;
    const { scrollLeft } = parentRef.current;
    parentRef.current.scrollTo({
      left: scrollLeft + scrollStep,
      behavior: 'smooth',
    });
  };
  const prevSlide = () => {
    if (!parentRef.current) return;
    const { scrollLeft } = parentRef.current;
    parentRef.current.scrollTo({
      left: scrollLeft - scrollStep,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container>
        <div className='flex items-start justify-between'>
          <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
            Solving business problems
          </h2>
          <div className='hidden items-center gap-[16px] tablet:flex'>
            <NextPrevBtn nextPage={nextSlide} prevPage={prevSlide} />
          </div>
        </div>
      </Container>
      <Container className='max-w-full tablet:max-w-full desktop:max-w-full'>
        <div
          ref={parentRef}
          className={`${styles.solvingList} hide-scrollbar mt-[40px] flex gap-[20px] tablet:gap-[40px]`}
        >
          {BusinessProblemsData.map((item) => (
            <div ref={cardRef} key={item.id}>
              <BusinessSolvingCard
                title={item.title}
                tags={item.tags}
                description={item.description}
                link={item.link}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};
