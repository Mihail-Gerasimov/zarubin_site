import styles from './TitleContent.module.css';

interface Props {
  title: string;
  tags: string[];
}

export const TitleContent = ({ title, tags }: Props) => {
  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {tags.map((tag, idx) => (
          <li key={idx} className={styles.item}>
            <span className={styles.tag}>{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
