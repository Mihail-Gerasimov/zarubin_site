import { NextPrevBtn } from '@/src/ui-kit/NextPrevBtn/NextPrevBtn';
import { IImage } from '@/src/utils/types';
import useMediaQuery from '@/src/utils/useMediaQuery';
import classNames from 'classnames';
import Image from 'next/image';
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
  fade: boolean;
  length: number;
  indexNumber: number;
  next: () => void;
  prev: () => void;
}

export const FeedbackCard = ({
  data,
  fade,
  length,
  indexNumber,
  next,
  prev,
}: Props) => {
  const mediaQuery = useMediaQuery('<tablet');
  return (
    <div className={styles.cardContainer}>
      <div className={classNames(styles.mainContainer)}>
        <Image
          src={data.image}
          width={355}
          height={251}
          alt={data.name}
          unoptimized
          className={classNames(
            styles.image,
            fade ? styles.fadeOut : styles.fadeIn,
          )}
        />
        <div className={styles.contentWrapper}>
          <div
            className={classNames(
              styles.content,
              fade ? styles.fadeOut : styles.fadeIn,
            )}
          >
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
            {mediaQuery && <NextPrevBtn nextPage={next} prevPage={prev} />}
          </div>
        </div>
      </div>
    </div>
  );
};
