import Image from 'next/image';
import { imageData } from './imageData';
import styles from './TrustUs.module.css';

export const TrustUs = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Trust us</h2>
      <div className={styles.listWrapper}>
        <div className={styles.list}>
          <div className={styles.item}>
            {imageData.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                width={150}
                height={50}
                alt={item.alt}
                className={styles.image}
              />
            ))}
          </div>
          <div className={styles.item}>
            {imageData.map((item) => (
              <Image
                key={item.id}
                src={item.image}
                width={150}
                height={50}
                alt={item.alt}
                className={styles.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
