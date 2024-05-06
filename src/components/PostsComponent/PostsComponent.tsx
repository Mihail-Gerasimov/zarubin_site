'use client';

import Arrow from '@/public/assets/images/icons/double_arrow.svg';
import { useState } from 'react';
import { BlogCard } from '../BlogCard/BlogCard';

interface Posts {
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
}

interface Props {
  posts: Posts[];
}

export const PostsComponent = ({ posts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const nextPage = () => {
    if (currentPage >= posts.length / postsPerPage) return;
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className='mx-auto pt-[180px] pb-[24px] max-w-[876px] flex flex-col items-center gap-[16px] tablet:pt-[240px] tablet:pb-[40px] tablet:gap-[24px] desktop:pb-[60px] desktop:gap-[40px] desktop:pt-[300px] desktop-big:pt-[380px]'>
      {currentPosts.map((post, idx) => (
        <BlogCard key={idx} post={post} />
      ))}
      <div className='w-full flex items-center'>
        {currentPage !== 1 && (
          <button
            type='button'
            onClick={prevPage}
            className='flex items-center gap-[10px] tablet:text-[16px]'
          >
            <Arrow className='w-[24px]' />
            Prev
          </button>
        )}
        {currentPage < posts.length / postsPerPage && (
          <button
            type='button'
            onClick={nextPage}
            className='ml-[auto] flex items-center gap-[10px] tablet:text-[16px]'
          >
            Next
            <Arrow className='w-[24px] transform rotate-[180deg]' />
          </button>
        )}
      </div>
    </div>
  );
};
