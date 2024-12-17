'use client';

import { underscopeReverter } from '@/src/utils/formatter/underscopeFormatter';
import { Post } from '@/src/utils/types';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Pagination } from '../Pagination/Pagination';
import { PlaybookCard } from './PlaybookCard/PlaybookCard';

interface IArticle {
  data: Post[];
}

const postsPerPage = 8;

export const PlaybookClient = ({ data }: IArticle) => {
  const [filteredData, setFilteredData] = useState(data);

  const searchParams = useSearchParams();
  const subCategory = searchParams.get('sub-category');
  const tag = searchParams.get('tag');
  const searchQuery = searchParams.get('search-query');

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

  useEffect(() => {
    const subCategoryFilteredData = data.filter((item) => {
      if (!subCategory) return item;
      return (
        item.subCategory?.toLowerCase() ===
        underscopeReverter(subCategory).toLowerCase()
      );
    });

    const tagFilteredData = subCategoryFilteredData.filter((item) => {
      if (!tag) return item;
      if (!item.tag) return false;
      return item.tag
        .toLowerCase()
        .includes(underscopeReverter(tag).toLowerCase());
    });

    const searchQueryFilterData = tagFilteredData.filter((item) => {
      if (!searchQuery) return item;
      return item.title.toLowerCase().includes(searchQuery?.toLowerCase());
    });

    setFilteredData(searchQueryFilterData);
  }, [data, subCategory, tag, searchQuery]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ behavior: 'smooth', top: 0 });
    }
  }, [currentPage]);

  return (
    <div className='w-full'>
      <div className='flex flex-col gap-[24px] tablet:gap-[40px] laptop-big:flex-row laptop-big:gap-[30px]'>
        <div className='flex w-full items-center'>
          {currentPosts.length !== 0 ? (
            <ul>
              {currentPosts.map((item) => (
                <li
                  key={item.slug}
                  className='border-b-[1px] border-main-disabled p-[40px_0] first:pt-0'
                >
                  <PlaybookCard data={item} />
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
      <div className='mt-[40px] overflow-hidden'>
        {isPaginationVisible && currentPosts.length !== 0 && (
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
