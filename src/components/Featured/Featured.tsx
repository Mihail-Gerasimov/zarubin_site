'use client';

import Arrow from '@/public/assets/images/icons/arrow.svg';
import { Post } from '@/src/utils/types';
import Link from 'next/link';
import { useState } from 'react';
import { SmallBlogCard } from '../BlogCard/SmallBlogCard';

interface Props {
  slug?: string;
  posts: Post[];
}

export const Featured = ({ slug, posts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);
  // const currentPosts = posts.slice(currentPage, currentPage + 2);

  const nextPage = () => {
    if (currentPage >= posts.length / postsPerPage) return;
    setCurrentPage((prev) => prev + 1);
    // const nextIndex = currentPage + 2 < posts.length ? currentPage + 2 : 0;
    // setCurrentPage(nextIndex);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => prev - 1);
    // const previousIndex =
    //   currentPage - 2 >= 0 ? currentPage - 2 : posts.length - 2;
    // setCurrentPage(previousIndex);
  };

  return (
    <div className='flex flex-col gap-[40px] border border-t-4 border-text-dark'>
      <div className='relative flex items-center justify-between border-4 border-text-dark pt-[20px] before:absolute before:left-0 before:top-0 before:h-[1px] before:w-full before:bg-text-gray'>
        {slug && (
          <p className='font-unbound text-[24px] font-bold uppercase '>
            Featured
          </p>
        )}
        <div className='flex items-center gap-[16px]'>
          <button
            type='button'
            className='flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-main-blue'
            onClick={prevPage}
          >
            <Arrow className='rotate-[180deg] fill-white' />
          </button>
          <button
            type='button'
            className='flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-main-blue'
            onClick={nextPage}
          >
            <Arrow className='fill-white' />
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-[20px] tablet:grid tablet:grid-cols-2'>
        {currentPosts.map((item) => (
          <Link
            key={item.slug}
            href={`/blog/${item.slug}`}
            className='flex flex-1'
          >
            <SmallBlogCard
              tag={item.tag ? item.tag : ''}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
