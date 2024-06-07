'use client';

import bgImage from '@/public/assets/images/main/group.png';
import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { FeedbackData } from '@/src/utils/DataLayers/FeedbackData';
import useMediaQuery from '@/src/utils/useMediaQuery';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Feedback.module.css';
import { FeedbackCard } from './FeedbackCard/FeedbackCard';

export const FeedbackClient = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const mediaQuery = useMediaQuery('<tablet');

  const feedback = FeedbackData;
  console.log(feedback[contentIndex]);

  const next = () => {
    if (fade) return;
    setFade(true);
    setTimeout(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % feedback.length);
      setFade(false);
    }, 500);
  };
  const prev = () => {
    if (fade) return;
    setFade(true);
    setTimeout(() => {
      setContentIndex(
        (prevIndex) => (prevIndex - 1 + feedback.length) % feedback.length,
      );
      setFade(false);
    }, 500);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Feedback</h2>
        {!mediaQuery && <NextPrevBtn nextPage={next} prevPage={prev} />}
      </div>
      <FeedbackCard
        data={feedback[contentIndex]}
        fade={fade}
        length={feedback.length}
        indexNumber={contentIndex + 1}
        next={next}
        prev={prev}
      />
      <Image
        src={bgImage}
        width={200}
        height={150}
        alt='bg-image'
        className={styles.bgImage}
        unoptimized
      />
    </div>
  );
};
