import bg from '@/public/assets/images/expertise/scalable.png';
import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import Image from 'next/image';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import { ExpertiseScalableObjectsSvg } from '../../svg/ExpertiseScalableObjectsSvg';

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

export const ScalableArchitecture = () => {
  return (
    <ComponentContainer light className='!flex flex-col !gap-[16px]'>
      <div className='flex flex-col gap-[40px] desktop:grid desktop:grid-cols-[42%_1fr] desktop:gap-0'>
        <TitleContent title='Scalable Architecture' tags={tags} light />
        <div className='flex flex-col gap-[20px]'>
          <DescriptionContent
            description={description.descr1}
            subDescription={description.descr2}
          />
        </div>
      </div>
      <div className='relative w-full desktop:h-[408px]'>
        <ExpertiseScalableObjectsSvg />
        <Image
          src={bg}
          alt='background image'
          className='absolute inset-0 h-full object-cover object-center'
        />
      </div>
    </ComponentContainer>
  );
};
