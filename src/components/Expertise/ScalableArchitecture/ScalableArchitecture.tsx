import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';

export const ScalableArchitecture = () => {
  const tags = [
    'Long-term sustainability',
    'Cost-efficiency',
    'Preparedness for future growth',
  ];

  const description = {
    descr1:
      'Scalable Architecture allows your IT infrastructure to grow with your business needs, ensuring long-term sustainability and cost-efficiency.',
    descr2:
      'Scalable Architecture is designed to support the growth of your business by allowing your IT infrastructure to expand as needed. This approach ensures that your systems can handle increased loads and new functionalities without requiring a complete overhaul. This prepares your business for future growth, reduces downtime, and ensures that your IT systems can adapt to changing business requirements.',
  };
  return (
    <ComponentContainer light>
      <TitleContent title='Scalable Architecture' tags={tags} />
      <DescriptionContent
        description={description.descr1}
        subDescription={description.descr2}
      />
    </ComponentContainer>
  );
};
