import { LinkArrow } from '@/src/ui-kit/LinkArrow/LinkArrow';
import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';
import styles from './Hero.module.css';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'About' },
];
export const Hero = () => {
  return (
    <div className={styles.mainContainer}>
      <div className='z-[5]'>
        <Breadcrumbs breadcrumbs={BREADCRUMBS} />
        <h1 className={styles.title}>
          About <span className={`white-stroke`}>us</span>
        </h1>
      </div>
      <div className={styles.handbookWrapper}>
        <h2 className={styles.handbookTitle}>Handbook</h2>
        <p className={styles.handbookDescr}>
          A guide to help you understand the intricacies of our work
        </p>
        <div className={styles.linkBox}>
          <LinkArrow
            target='_blank'
            title='Go to the HandBook'
            link='https://drive.google.com/file/d/1M3qPsWPJAUPYu3_z80EvnKNeEPJGgxLI/view'
          />
        </div>
      </div>
    </div>
  );
};
