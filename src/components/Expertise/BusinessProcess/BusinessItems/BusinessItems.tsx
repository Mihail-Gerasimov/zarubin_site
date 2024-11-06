import styles from './BusinessItems.module.css';

const businessItems = [
  'Marketing',
  'Development',
  'Сonsistency',
  'Digital',
  'Business',
];

export const BusinessItems = () => {
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.list}>
        {businessItems.map((item, idx) => (
          <li key={idx} className={styles.item}>
            <p className={`${styles.meaning} font-proxima`}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
