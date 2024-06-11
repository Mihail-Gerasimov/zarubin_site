import styles from './Items.module.css';

export const Items = () => {
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>IT Consulting</h3>
          <ul className={styles.subList}>
            <li className={styles.subItem}>vCIO</li>
            <li className={styles.subItem}>
              Creating and configuring business processes
            </li>
            <li className={styles.subItem}>Completing projects</li>
          </ul>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>System analytics and development</h3>
          <ul className={styles.subList}>
            <li className={styles.subItem}>Custom development</li>
            <li className={styles.subItem}>Scalable architecture</li>
            <li className={styles.subItem}>Mobile applications</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
