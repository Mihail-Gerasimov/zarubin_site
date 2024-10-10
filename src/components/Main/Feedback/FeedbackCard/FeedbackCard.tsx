import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { IImage } from '@/src/utils/types';
import useMediaQuery from '@/src/utils/useMediaQuery';
import classNames from 'classnames';
import Image from 'next/image';
import { useSwiper } from 'swiper/react';
import styles from './FeedbackCard.module.css';

interface Data {
  id: number;
  name: string;
  job: string;
  image: IImage;
  feedback: string;
}

interface Props {
  data: Data;
  length: number;
  indexNumber: number;
}

export const FeedbackCard = ({ data, length, indexNumber }: Props) => {
  const mediaQuery = useMediaQuery('<tablet');
  const swiper = useSwiper();
  return (
    <div className={styles.cardContainer}>
      <div className={classNames(styles.mainContainer)}>
        <Image
          src={data.image}
          quality={80}
          width={560}
          height={485}
          alt={data.name}
          className={styles.image}
          loading='lazy'
        />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h3 className={styles.name}>{data.name}</h3>
            <span className={styles.job}>{data.job}</span>
            <p className={styles.description}>{data.feedback}</p>
          </div>
          <div className={styles.cardNavigation}>
            <div className={styles.positionWrapper}>
              <span className={styles.position}>{indexNumber}</span>
              <span className={styles.slash}>{` / `}</span>
              <span className={styles.length}>{length}</span>
            </div>
            {mediaQuery && (
              <NextPrevBtn
                nextPage={() => swiper.slideNext()}
                prevPage={() => swiper.slidePrev()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
