import styles from './ProjectRiskImg.module.css';

export const ProjectRiskImg = () => {
  return (
    <div className={styles.imageWrapper}>
      <ul className={styles.imageList}>
        <li className={styles.imageItem}>
          <p className={styles.imageTitle}>Analyzing the current situation</p>
        </li>
        <li className={styles.imageItem}>
          <p className={styles.imageTitle}>Making an action plan</p>
        </li>
      </ul>
    </div>
  );
};
