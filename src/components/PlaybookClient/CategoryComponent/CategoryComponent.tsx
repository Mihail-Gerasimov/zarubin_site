'use client';

import SearchImage from '@/public/assets/images/icons/search.svg';
import { Post } from '@/src/utils/types';
import useMediaQuery from '@/src/utils/useMediaQuery';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useMemo } from 'react';
import { PlaybookCategory } from '../PlaybookCategory/PlaybookCategory';
import { PlaybookCategoryDropDown } from '../PlaybookCategoryDropDown/PlaybookCategoryDropDown';

const getUniqueArticlesSubCategory = (array: Post[], word: string) => {
  const category = array.filter((item) => item.category.toLowerCase() === word);
  const subCategory = category.map((item) => item.subCategory);
  const uniqueSubCategory = subCategory.filter(
    (value, idx, arr) => arr.indexOf(value) === idx,
  );

  return {
    category: word,
    subCategory: uniqueSubCategory,
  };
};

interface ICategory {
  category: Post[];
}

export const CategoryComponent = ({ category }: ICategory) => {
  const isLaptop = useMediaQuery('>=laptop-big');
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search-query');

  const expertiseCategory = useMemo(
    () => getUniqueArticlesSubCategory(category, 'expertise'),
    [category],
  );
  const insightsCategory = useMemo(
    () => getUniqueArticlesSubCategory(category, 'insights'),
    [category],
  );

  const articlesCategory = [expertiseCategory, insightsCategory];

  const handleChangeSearchQuery = (searchQuery: string) => {
    const query = new URLSearchParams();
    query.set('search-query', searchQuery);
    router.push(`/playbook?${query.toString()}`);
  };

  return (
    <div className='flex w-full flex-col gap-[12px] tablet:flex-row tablet:items-end tablet:gap-[64px] laptop-big:w-[30%] laptop-big:flex-col laptop-big:items-start laptop-big:gap-[10px]'>
      <div className='relative w-full laptop-big:w-full'>
        <input
          placeholder='Search article'
          value={searchQuery ? searchQuery : ''}
          className='w-full border-b-[1px] border-main-blue py-[10px] text-[12px] outline-none tablet:text-[16px]'
          onChange={(e) => handleChangeSearchQuery(e.target.value)}
        />
        <SearchImage className='absolute right-0 top-[50%] w-[16px] translate-y-[-50%] fill-main-blue' />
      </div>
      <div className='flex flex-col items-start'>
        {articlesCategory && articlesCategory.length !== 0 && (
          <>
            {isLaptop ? (
              <div>
                <Suspense fallback={<div>Loading category....</div>}>
                  <PlaybookCategory category={articlesCategory} />
                </Suspense>
              </div>
            ) : (
              <Suspense fallback={<div>Loading category....</div>}>
                <PlaybookCategoryDropDown categories={articlesCategory} />
              </Suspense>
            )}
          </>
        )}
      </div>
    </div>
  );
};
