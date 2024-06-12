import styles from './DescriptionContent.module.css';

interface Props {
  description: string;
  subDescription: string;
}

export const DescriptionContent = ({ description, subDescription }: Props) => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.mainDescription}>{description}</p>
      <p className={styles.secondDescription}>{subDescription}</p>
    </div>
  );
};
