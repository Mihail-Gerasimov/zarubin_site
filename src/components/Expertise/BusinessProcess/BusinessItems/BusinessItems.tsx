import styles from './BusinessItems.module.css';

export const BusinessItems = () => {
  const businessItems = [
    'Marketing',
    'Development',
    'Сonsistency',
    'Digital',
    'Business',
  ];

  return (
    <div className={styles.mainContainer}>
      <ul className={styles.list}>
        {businessItems.map((item, idx) => (
          <li key={idx} className={styles.item}>
            <p className={styles.meaning}>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
