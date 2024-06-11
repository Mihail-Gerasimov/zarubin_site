import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import Link from 'next/link';
import styles from './InsightsCard.module.css';

interface Props {
  title: string;
  tag: string | undefined;
  description: string;
  downloadLink: string | undefined;
  slug: string;
  type: string | undefined | null;
}

export const InsightsCard = ({
  tag,
  title,
  description,
  downloadLink,
  slug,
  type,
}: Props) => {
  const tags = tag?.split(' ');

  return (
    <Link href={`/blog/${slug}`} className={styles.cardContainer}>
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
      {type === 'Research' && downloadLink && (
        <div className='mt-[25px]'>
          <DownloadLink link={downloadLink} />
        </div>
      )}
    </Link>
  );
};
