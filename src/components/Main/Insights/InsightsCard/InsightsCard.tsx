import defaultImg from '@/public/assets/images/banner/default_insights.webp';
import { DownloadLink } from '@/src/ui-kit/DownloadLink/DownloadLink';
import Image from 'next/image';
import Link from 'next/link';
import styles from './InsightsCard.module.css';

interface Props {
  title: string;
  tag: string | undefined;
  description: string;
  downloadLink: string | undefined;
  slug: string;
  type: string | undefined | null;
  image: string | undefined | null;
}

export const InsightsCard = ({
  tag,
  title,
  description,
  downloadLink,
  slug,
  type,
  image,
}: Props) => {
  const tags = tag?.split(',');

  return (
    <Link href={`/blog/${slug}`} className='flex h-full flex-col'>
      <div className='relative w-full overflow-hidden'>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className='h-[auto] w-full'
            quality={80}
          />
        ) : (
          <Image
            src={defaultImg}
            alt={title}
            width={500}
            height={300}
            className='h-[auto] w-full'
            quality={80}
          />
        )}
      </div>
      <div className={`${styles.cardContainer}`}>
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
      </div>
    </Link>
  );
};
