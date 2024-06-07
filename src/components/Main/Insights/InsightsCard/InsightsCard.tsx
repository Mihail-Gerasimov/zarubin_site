import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import styles from './InsightsCard.module.css';

interface Props {
  title: string;
  tag: string | undefined;
  description: string;
  downloadLink?: string;
}

export const InsightsCard = ({
  tag,
  title,
  description,
  downloadLink = '/',
}: Props) => {
  const tags = tag?.split(' ');

  return (
    <div className={styles.cardContainer}>
      {tags && (
        <div className={styles.tagWrapper}>
          {tags.map((item, idx) => (
            <span key={idx} className={styles.tag}>
              {item}
            </span>
          ))}
        </div>
      )}
      <h3 className={`${styles.title}`}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {tag === 'Management' && (
        <div className='mt-[25px]'>
          <DownloadLink link={downloadLink} />
        </div>
      )}
    </div>
  );
};
