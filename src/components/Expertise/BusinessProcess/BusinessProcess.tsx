import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import { BusinessItems } from './BusinessItems/BusinessItems';
import styles from './BusinessProcess.module.css';

const tags = [
  'Process optimization',
  'Cost reduction',
  'Improved service quality',
  'Increased customer satisfaction',
];

const description = {
  descr1:
    'Business Process Management focuses on optimizing and automating operations, reducing costs, improving service quality, and increasing customer satisfaction.',
  descr2:
    'Effective Business Process Management helps identify and eliminate bottlenecks in your operations. Our experts will analyze your current processes, suggest optimization paths, and implement automated solutions. As a result, you will reduce costs associated with routine tasks, improve the quality of services provided, and increase customer satisfaction. All of this leads to increased revenue and strengthened market position.',
};

export const BusinessProcess = () => {
  return (
    <ComponentContainer>
      <TitleContent title='Business Process Management' tags={tags} />
      <div className={styles.descriptionWrapper}>
        <DescriptionContent
          description={description.descr1}
          subDescription={description.descr2}
        />
        <BusinessItems />
      </div>
    </ComponentContainer>
  );
};
