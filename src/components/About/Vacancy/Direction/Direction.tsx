import { LinkArrow } from '@/src/ui-kit/LinkArrow/LinkArrow';
import classNames from 'classnames';
import styles from './Direction.module.css';

export const Direction = () => {
  return (
    <div>
      <ul className={styles.directionWrapper}>
        <li>
          <div className={classNames(styles.directionBox, styles.partner)}>
            <h3 className={styles.tag}>To the Partner</h3>
            <p className={styles.description}>
              Do you want to work with us? Leave a request or send an e-mail{' '}
            </p>
            <div className='mt-[32px] hidden w-fit'>
              <LinkArrow title='More' link='#' />
            </div>
          </div>
        </li>
        <li>
          <div className={classNames(styles.directionBox, styles.expert)}>
            <h3 className={styles.tag}>To the expert</h3>
            <p className={styles.description}>
              {`Read about how to get to us and what jobs are available on the
              'Careers' link`}
            </p>
            <div className='mt-[32px] hidden w-fit'>
              <LinkArrow title='More' link='#' />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
