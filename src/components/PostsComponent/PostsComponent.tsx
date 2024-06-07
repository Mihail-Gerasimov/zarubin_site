'use client';

import { useState } from 'react';
import { BlogCard } from '../BlogCard/BlogCard';
import { Pagination } from '../Pagination/Pagination';

export interface Posts {
  title: string;
  description: string;
  image: string | undefined;
  type: string | null | undefined;
  slug: string;
  date: string;
  tag: string | undefined;
}

interface Props {
  posts: Posts[];
}

export const PostsComponent = ({ posts }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const isPaginationVisible = posts.length > postsPerPage;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (postNumber: number) => {
    setCurrentPage(postNumber);
  };

  const nextPage = () => {
    if (currentPage >= posts.length / postsPerPage) return;
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className='mx-auto flex max-w-[876px] flex-col items-center gap-[40px] pb-[24px] pt-[30px] tablet:pb-[40px] tablet:pt-[60px] desktop:pb-[60px]'>
      {currentPosts.map((post, idx) => (
        <BlogCard key={idx} post={post} />
      ))}
      {isPaginationVisible && (
        <Pagination
          currentPage={currentPage}
          postsPerPage={postsPerPage}
          postLength={posts.length}
          paginate={paginate}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </div>
  );
};
