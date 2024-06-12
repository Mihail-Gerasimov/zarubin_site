import styles from './Items.module.css';

const expertiseData = [
  {
    id: 1,
    title: 'IT Consulting',
    items: [
      'vCIO',
      'Creating and configuring business processes',
      'Completing projects',
    ],
  },
  {
    id: 2,
    title: 'System analytics and development',
    items: [
      'Custom development',
      'System integration',
      'Scalable architecture',
      'Mobile applications',
    ],
  },
];

export const Items = () => {
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.list}>
        {expertiseData.map((expertise) => (
          <li key={expertise.id} className={styles.item}>
            <h3 className={styles.title}>{expertise.title}</h3>
            <ul className={styles.subList}>
              {expertise.items.map((item, idx) => (
                <li key={idx} className={styles.subItem}>
                  <span className={styles.tag}>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
