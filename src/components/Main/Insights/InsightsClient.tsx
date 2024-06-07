'use client';

import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import styles from './Insights.module.css';
import { InsightsCard } from './InsightsCard/InsightsCard';

interface Post {
  title: string;
  description: string;
  tag: string | undefined;
  downloadLink?: string;
}
interface Props {
  posts: Post[];
}

export const InsightsClient = ({ posts }: Props) => {
  const nextBtn = () => {
    console.log('next');
  };

  const prevBtn = () => {
    console.log('prev');
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Insights</h2>
        <div className={styles.arrowWrapper}>
          <NextPrevBtn nextPage={nextBtn} prevPage={prevBtn} />
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {posts.slice(6).map((post, idx) => (
          <InsightsCard
            key={idx}
            title={post.title}
            description={post.description}
            tag={post.tag}
          />
        ))}
      </div>
    </div>
  );
};
