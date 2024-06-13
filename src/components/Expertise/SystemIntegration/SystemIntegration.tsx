import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import { SystemIntegrationCards } from './SystemIntegrationCards/SystemIntegrationCards';

const tags = [
  'Seamless connectivity',
  'Improved data flow',
  'Reduced redundancy',
];

const description = {
  descr1:
    'System integration ensures seamless connectivity between various IT systems, improving data flow, operational efficiency, and reducing redundancy.',
  descr2:
    'System integration is essential for ensuring that different IT systems within your organization communicate effectively with each other. Our experts will integrate your disparate systems to create a unified infrastructure, enhancing data flow and operational efficiency. ',
};

export const SystemIntegration = () => {
  return (
    <ComponentContainer light={true}>
      <TitleContent title='System Integration' tags={tags} light />
      <div className='flex flex-col gap-[20px]'>
        <DescriptionContent
          description={description.descr1}
          subDescription={description.descr2}
        />
        <SystemIntegrationCards />
      </div>
    </ComponentContainer>
  );
};
