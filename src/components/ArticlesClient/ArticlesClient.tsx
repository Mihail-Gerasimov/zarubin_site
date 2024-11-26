'use client';

import SearchImage from '@/public/assets/images/icons/search.svg';
import { Post } from '@/src/utils/types';
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { ArticleCard } from './ArticleCard/ArticleCard';
import { ArticlesCategory } from './ArticlesCategory/ArticlesCategory';

interface IArticle {
  data: Post[];
  searchParams: {
    category: string | undefined;
    subCategoru: string | undefined;
    tag: string | undefined;
  };
}

const postsPerPage = 8;

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

export const ArticlesClient = ({ data, searchParams }: IArticle) => {
  const [filteredData, setFilteredData] = useState(data);
  const [hasData, setHasData] = useState(true);
  const [selectedCategiry, setSelectedCategory] = useState(
    searchParams.category || 'all',
  );
  const [selectedSubCategiry, setSelectedSubCategory] = useState(
    searchParams.subCategoru || '',
  );
  const [selectedTag, setSelectedTag] = useState(searchParams.tag || '');
  const [inputValue, setInputValue] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const isPaginationVisible = filteredData.length > postsPerPage;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

  const paginate = (postNumber: number) => {
    setCurrentPage(postNumber);
  };

  const nextPage = () => {
    if (currentPage >= filteredData.length / postsPerPage) return;
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const expertiseCategory = useMemo(
    () => getUniqueArticlesSubCategory(data, 'expertise'),
    [data],
  );
  const insightsCategory = useMemo(
    () => getUniqueArticlesSubCategory(data, 'insights'),
    [data],
  );
  const articlesCategory = [expertiseCategory, insightsCategory];

  useEffect(() => {
    setSelectedCategory('all');
    setSelectedSubCategory('');
    setSelectedTag('');
    setCurrentPage(1);
    const newFilteredData = data.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase()),
    );
    if (newFilteredData.length === 0) {
      setHasData(false);
    } else {
      setFilteredData(newFilteredData);
      setHasData(true);
    }
  }, [inputValue, data]);

  const handleChangeTag = (value: string) => {
    setSelectedTag(value);
  };

  useEffect(() => {
    const categotyFilteredData = data.filter((item) => {
      if (selectedCategiry.toLowerCase() === 'all') return item;
      return item.category.toLowerCase() === selectedCategiry.toLowerCase();
    });

    const subCategoryFilteredData = categotyFilteredData.filter((item) => {
      if (selectedSubCategiry.toLocaleLowerCase() === '') return item;
      return (
        item.subCategory?.toLowerCase() === selectedSubCategiry.toLowerCase()
      );
    });

    const tagFolteredData = subCategoryFilteredData.filter((item) => {
      if (selectedTag.toLowerCase() === '') return true;
      if (!item.tag) return false;
      return item.tag.toLowerCase().includes(selectedTag.toLowerCase());
    });
    setFilteredData(tagFolteredData);
  }, [selectedCategiry, data, selectedSubCategiry, selectedTag]);

  return (
    <div className='w-full'>
      <h2 className='w-full border-b-[1px] border-text-dark/60 pb-[40px] font-unbound text-[45px] capitalize'>
        {selectedCategiry === 'all' ? 'All articles' : selectedCategiry}{' '}
        {selectedSubCategiry && `/ ${selectedSubCategiry}`}{' '}
        {selectedTag && `/ ${selectedTag}`}
      </h2>

      <div className='mt-[80px] flex flex-col gap-[40px] laptop-big:flex-row'>
        <div className='flex min-w-[320px] flex-col gap-[20px]'>
          <div className='relative w-full laptop-big:w-fit'>
            <input
              placeholder='Search article'
              value={inputValue}
              className='w-full border-b-[1px] border-main-blue py-[10px] outline-none'
              onChange={(e) => setInputValue(e.target.value)}
            />
            <SearchImage className='absolute right-0 top-[50%] w-[16px] translate-y-[-50%] fill-main-blue' />
          </div>
          <div className='hidden laptop-big:block'>
            <p className='font-proxima text-[16px] uppercase text-text-dark/60'>
              category:
            </p>
            {articlesCategory && articlesCategory.length !== 0 && (
              <ArticlesCategory
                onClick={setSelectedCategory}
                category={articlesCategory}
                setSelectedSubCategory={setSelectedSubCategory}
                setSelectedTag={setSelectedTag}
                setCurrentPage={setCurrentPage}
              />
            )}
          </div>
        </div>
        <div className='flex w-full items-center'>
          {hasData ? (
            <ul>
              {currentPosts.map((item) => (
                <li
                  key={item.slug}
                  className='border-b-[1px] border-text-dark/60 p-[40px_0] first:pt-0'
                >
                  <ArticleCard
                    data={item}
                    onClick={handleChangeTag}
                    setCurrentPage={setCurrentPage}
                  />
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
      <div className='mt-[40px]'>
        {isPaginationVisible && hasData && (
          <Pagination
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            postLength={filteredData.length}
            paginate={paginate}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </div>
    </div>
  );
};
