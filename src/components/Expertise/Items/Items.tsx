import styles from './Items.module.css';

export const Items = () => {
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>IT Consulting</h3>
          <ul className={styles.subList}>
            <li className={styles.subItem}>
              <span className={styles.tag}>vCIO</span>
            </li>
            <li className={styles.subItem}>
              <span className={styles.tag}>
                Creating and configuring business processes
              </span>
            </li>
            <li className={styles.subItem}>
              <span className={styles.tag}>Completing projects</span>
            </li>
          </ul>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>System analytics and development</h3>
          <ul className={styles.subList}>
            <li className={styles.subItem}>
              <span className={styles.tag}>Custom development</span>
            </li>
            <li className={styles.subItem}>
              <span className={styles.tag}>System integration</span>
            </li>
            <li className={styles.subItem}>
              <span className={styles.tag}>Scalable architecture</span>
            </li>
            <li className={styles.subItem}>
              <span className={styles.tag}>Mobile applications</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
