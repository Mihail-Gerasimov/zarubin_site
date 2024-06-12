import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import { VirtualCioData } from '@/src/utils/DataLayers/VirtualCioData';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import styles from './Virtual.module.css';
import { VirtualTable } from './VirtualTable/VirtualTable';

const tags = [
  'Cost savings on hiring an IT director',
  'Access to expert knowledge',
  'Optimization of IT strategy and costs',
];

const description = {
  descr1:
    'A Virtual CIO helps businesses make strategic IT decisions without the need for a full-time, in-house IT director. This optimizes costs and provides access to expert knowledge aimed at growth and efficiency.',
  descr2:
    'A Virtual CIO provides your business with access to highly skilled IT experts who will help you formulate and implement an IT development strategy. This solution allows you to save on hiring a full-time IT director while receiving comprehensive support in making crucial technology decisions. With a Virtual CIO, you can optimize your IT costs, enhance data security, and improve overall company efficiency.',
};

export const Virtual = () => {
  return (
    <ComponentContainer>
      <TitleContent title='Virtual CIO' tags={tags} />
      <div>
        <div className={styles.descriptionWrapper}>
          <DescriptionContent
            description={description.descr1}
            subDescription={description.descr2}
          />
          <VirtualTable data={VirtualCioData} />
        </div>
      </div>
    </ComponentContainer>
  );
};
