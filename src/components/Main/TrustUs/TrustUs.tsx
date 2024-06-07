import Image from 'next/image';
import styles from './TrustUs.module.css';

export const TrustUs = () => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>Trust us</h2>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src='/assets/images/main/gazprom.png'
              width={100}
              height={50}
              alt='logo'
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <Image
              src='/assets/images/main/hk_traktor.png'
              width={100}
              height={50}
              alt='logo'
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <Image
              src='/assets/images/main/hk_avangard.png'
              width={100}
              height={50}
              alt='logo'
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <Image
              src='/assets/images/main/hk_traktor.png'
              width={100}
              height={50}
              alt='logo'
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <Image
              src='/assets/images/main/hk_avangard.png'
              width={100}
              height={50}
              alt='logo'
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <Image
              src='/assets/images/main/hk_traktor.png'
              width={100}
              height={50}
              alt='logo'
              className={styles.image}
            />
          </li>
          <li className={styles.item}>
            <Image
              src='/assets/images/main/gazprom.png'
              width={100}
              height={50}
              alt='logo'
              className={styles.image}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
