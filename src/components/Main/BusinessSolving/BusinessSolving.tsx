'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { BusinessProblemsData } from '@/src/utils/DataLayers/BusinessProblemsData';
import { useRef } from 'react';
import styles from './BusinessSolving.module.css';
import { BusinessSolvingCard } from './BusinessSolvingCard/BusinessSolvingCard';

export const BusinessSolving = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const scrollStep = 688;

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
    <div>
      <div className='flex items-start justify-between'>
        <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
          Solving business problems
        </h2>
        <div className='hidden items-center gap-[16px] tablet:flex'>
          <NextPrevBtn nextPage={nextSlide} prevPage={prevSlide} />
        </div>
      </div>
      <div
        className={`${styles.solvingList} hide-scrollbar mt-[40px] flex gap-[20px] overflow-scroll tablet:gap-[40px]`}
        ref={parentRef}
      >
        {BusinessProblemsData.map((item) => (
          <BusinessSolvingCard
            key={item.id}
            title={item.title}
            tags={item.tags}
            description={item.description}
            link={item.link}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
