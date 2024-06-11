'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { useRef } from 'react';
import styles from './Insights.module.css';
import { InsightsCard } from './InsightsCard/InsightsCard';

interface Post {
  title: string;
  description: string;
  tag: string | undefined;
  downloadLink: string | undefined;
  slug: string;
  type: string | undefined | null;
}
interface Props {
  posts: Post[];
}

export const InsightsClient = ({ posts }: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const nextBtn = () => {
    if (!parentRef.current) return;
    const { scrollLeft } = parentRef.current;
    parentRef.current.scrollTo({
      left: scrollLeft + 452,
      behavior: 'smooth',
    });
  };

  const prevBtn = () => {
    if (!parentRef.current) return;
    const { scrollLeft } = parentRef.current;
    parentRef.current.scrollTo({
      left: scrollLeft - 452,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Insights</h2>
        <div className={styles.arrowWrapper}>
          <NextPrevBtn nextPage={nextBtn} prevPage={prevBtn} />
        </div>
      </div>
      <div className={styles.cardsWrapper} ref={parentRef}>
        {posts.slice(6).map((post, idx) => (
          <InsightsCard
            key={idx}
            title={post.title}
            description={post.description}
            tag={post.tag}
            slug={post.slug}
            type={post.type}
            downloadLink={post.downloadLink}
          />
        ))}
      </div>
    </div>
  );
};
