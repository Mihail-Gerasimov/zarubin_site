'use client';

import SearchImage from '@/public/assets/images/icons/search.svg';
import { postsSorting } from '@/src/utils/postsSorting';
import { Post } from '@/src/utils/types';
import React, { useState } from 'react';
import { ArticleCard } from './ArticleCard/ArticleCard';

interface IArticle {
  data: Post[];
}

export const ArticlesClient = ({ data }: IArticle) => {
  const sortedData = postsSorting(data);
  const category = data
    .map((item) => (item.subCategory ? item.subCategory : ''))
    .filter(
      (value, index, arr) => arr.indexOf(value) === index && value !== '',
    );

  const [filteredData, setFilteredData] = useState(sortedData);
  const [hasData, setHasData] = useState(true);
  const [selectedCategiry, setSelectedCategory] = useState('all');
  const [inputValue, setInputValue] = useState('');

  const handleKetDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    handleSearch();
  };

  const handleSearch = () => {
    console.log(inputValue);
    const newFilteredData = sortedData.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase()),
    );
    if (newFilteredData.length === 0) {
      setHasData(false);
    } else {
      setFilteredData(newFilteredData);
      setHasData(true);
    }
  };

  return (
    <div className='w-full'>
      <h2 className='w-full border-b-[1px] border-text-dark/60 pb-[40px] font-unbound text-[45px]'>
        {selectedCategiry === 'all' ? 'All articles' : selectedCategiry}
      </h2>

      <div className='mt-[80px] flex flex-col gap-[40px] laptop-big:flex-row'>
        <div className='flex min-w-[320px] flex-col gap-[20px]'>
          <div className='relative w-full laptop-big:w-fit'>
            <input
              placeholder='Search article'
              value={inputValue}
              className='w-full border-b-[1px] border-main-blue py-[10px] outline-none'
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKetDown}
            />
            <button type='button' onClick={handleSearch} className=''>
              <SearchImage className='absolute right-0 top-[50%] w-[16px] translate-y-[-50%] fill-main-blue' />
            </button>
          </div>
          <div className='hidden laptop-big:block'>
            <p className='font-proxima text-[16px] uppercase text-text-dark/60'>
              category:
            </p>
            {category && category.length !== 0 && (
              <ul className='flex flex-col'>
                <li className=''>
                  <button
                    type='button'
                    name='all'
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      const target = e.target as HTMLButtonElement;
                      setSelectedCategory(target.name);
                    }}
                    className='font-proxima text-[16px] capitalize'
                  >
                    all
                  </button>
                </li>
                {category.map((item) => (
                  <li key={item} className=''>
                    <button
                      type='button'
                      name={item}
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        const target = e.target as HTMLButtonElement;
                        setSelectedCategory(target.name);
                      }}
                      className='font-proxima text-[16px]'
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className='flex w-full items-center'>
          {hasData ? (
            <ul>
              {filteredData.map((item) => (
                <li
                  key={item.slug}
                  className='border-b-[1px] border-text-dark/60 p-[40px_0] first:pt-0'
                >
                  <ArticleCard data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <p className='ml-[80px] font-unbound text-[28px] text-text-dark'>
              Sorry, there is no data for your request
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
