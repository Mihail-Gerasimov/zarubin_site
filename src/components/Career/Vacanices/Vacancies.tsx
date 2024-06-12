'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import styles from './Vacanices.module.css';
import { VacanciesCard } from './VacanicesCard/VacanciesCard';
import { VacanciesData } from '@/src/utils/DataLayers/VacanciesData';
import classNames from 'classnames';

export const Vacancies = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [scrollStep, setScrollStep] = useState(320);

  const [selectedTag, setSelectedTag] = useState('All');

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

  const tags = new Set(VacanciesData.flatMap((item) => item.tags));

  const filteredVacanicesData = VacanciesData.filter(
    (item) => selectedTag === 'All' || item.tags.includes(selectedTag),
  );

  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='flex items-start justify-between'>
        <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
          Active vacancies
        </h2>
        <div className='hidden items-center gap-[16px] tablet:flex'>
          <NextPrevBtn nextPage={nextSlide} prevPage={prevSlide} />
        </div>
      </div>
      <div>
        <div className='flex gap-[14px]'>
          <Tag selected={selectedTag === 'All'} onClick={setSelectedTag}>
            All
          </Tag>
          {[...tags].map((item) => (
            <Tag
              selected={selectedTag === item}
              key={item}
              onClick={setSelectedTag}
            >
              {item}
            </Tag>
          ))}
        </div>
      </div>
      <div
        className={`${styles.solvingList} hide-scrollbar mt-[40px] flex gap-[20px] tablet:gap-[40px]`}
        ref={parentRef}
      >
        {filteredVacanicesData.map((item) => (
          <div ref={cardRef} key={item.id}>
            <VacanciesCard
              title={item.title}
              tags={item.tags}
              description={item.description}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Tag = ({
  children,
  selected,
  className,
  onClick,
  ...rest
}: Omit<HTMLAttributes<HTMLButtonElement>, 'children' | 'onClick'> & {
  selected?: boolean;
  children: string;
  onClick?: (tag: string) => void;
}) => (
  <button
    className={classNames(
      `flex h-[38px] items-center justify-center rounded-[2px] border border-[1px] border-solid border-white px-[10px] font-proxima font-bold uppercase`,
      className,
      { 'bg-white text-text-dark': selected },
    )}
    onClick={() => onClick && onClick(children)}
    {...rest}
  >
    {children}
  </button>
);
