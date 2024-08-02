import { TechnologyData } from '@/src/utils/DataLayers/TechnologyData';
import styles from './Technology.module.css';
import { TechnologyCard } from './TechnologyCard/TechnologyCard';

export const Technology = () => {
  return (
    <div className='relative flex flex-col gap-[40px]'>
      <h2 className={styles.title}>Technology Stack</h2>
      <div className='hide-scrollbar flex items-center gap-[20px] overflow-auto laptop:justify-center desktop:gap-0 desktop:overflow-visible'>
        {TechnologyData.map((item) => (
          <TechnologyCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
