'use client';

import SearchImage from '@/public/assets/images/icons/search.svg';
import { Post } from '@/src/utils/types';
import useMediaQuery from '@/src/utils/useMediaQuery';
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { ArticleCard } from './ArticleCard/ArticleCard';
import { ArticlesCategory } from './ArticlesCategory/ArticlesCategory';
import { CategoryDropDown } from './CategoryDropDown/CategoryDropDown';

interface IArticle {
  data: Post[];
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

export const ArticlesClient = ({ data }: IArticle) => {
  const [filteredData, setFilteredData] = useState(data);
  const [hasData, setHasData] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategiry, setSelectedSubCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [inputValue, setInputValue] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const isLaptop = useMediaQuery('>=laptop-big');

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
      if (selectedCategory.toLowerCase() === 'all') return item;
      return item.category.toLowerCase() === selectedCategory.toLowerCase();
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
  }, [selectedCategory, data, selectedSubCategiry, selectedTag]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ behavior: 'smooth', top: 0 });
    }
  }, [currentPage]);

  return (
    <div className='w-full'>
      <h2 className='w-full text-center font-unbound text-[24px] uppercase leading-[1.16] tablet:text-[45px] tablet:leading-[1] laptop-big:text-start laptop-big:text-[45px]'>
        {selectedCategory === 'all' ? 'All articles' : selectedCategory}{' '}
        <span className='text-[18px] leading-[1.3] text-main-blue tablet:text-[20px] tablet:leading-[1.2]'>
          {selectedSubCategiry && `/ ${selectedSubCategiry}`}
        </span>{' '}
        <span className='text-[18px] leading-[1.3] text-main-blue tablet:text-[20px] tablet:leading-[1.2]'>
          {selectedTag && `/ ${selectedTag}`}
        </span>
      </h2>

      <div className='mt-[24px] flex flex-col gap-[24px] tablet:mt-[40px] tablet:gap-[40px]  laptop-big:mt-[80px] laptop-big:flex-row laptop-big:gap-[30px]'>
        <div className='flex w-full flex-col gap-[12px] tablet:flex-row tablet:items-end tablet:gap-[64px] laptop-big:w-[30%] laptop-big:flex-col laptop-big:items-start laptop-big:gap-[10px]'>
          <div className='relative w-full laptop-big:w-full'>
            <input
              placeholder='Search article'
              value={inputValue}
              className='w-full border-b-[1px] border-main-blue py-[10px] text-[12px] outline-none tablet:text-[16px]'
              onChange={(e) => setInputValue(e.target.value)}
            />
            <SearchImage className='absolute right-0 top-[50%] w-[16px] translate-y-[-50%] fill-main-blue' />
          </div>
          <div className='flex flex-col items-start'>
            {articlesCategory && articlesCategory.length !== 0 && (
              <>
                {isLaptop ? (
                  <div>
                    <ArticlesCategory
                      category={articlesCategory}
                      onClick={setSelectedCategory}
                      setSelectedSubCategory={setSelectedSubCategory}
                      setSelectedTag={setSelectedTag}
                      setCurrentPage={setCurrentPage}
                      selectedCategory={selectedCategory}
                      selectedSubCategory={selectedSubCategiry}
                    />
                  </div>
                ) : (
                  <CategoryDropDown
                    categories={articlesCategory}
                    onClick={setSelectedCategory}
                    setSelectedSubCategory={setSelectedSubCategory}
                    setSelectedTag={setSelectedTag}
                    setCurrentPage={setCurrentPage}
                    selectetCategory={selectedCategory}
                    selectetSubCategory={selectedSubCategiry}
                  />
                )}
              </>
            )}
          </div>
        </div>
        <div className='flex w-full items-center'>
          {hasData ? (
            <ul>
              {currentPosts.map((item) => (
                <li
                  key={item.slug}
                  className='border-b-[1px] border-main-disabled p-[40px_0] first:pt-0'
                >
                  <ArticleCard
                    data={item}
                    selectedTag={selectedTag}
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
