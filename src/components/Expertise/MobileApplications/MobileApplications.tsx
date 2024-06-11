import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';

export const MobileApplications = () => {
  const tags = [
    'Increased customer engagement',
    'Improved service delivery',
    'Enhanced operational efficiency',
  ];

  const description = {
    descr1:
      'Mobile Applications enhance customer engagement and operational efficiency by providing on-the-go access to your services and internal systems.',
    descr2:
      "Mobile Applications are crucial for modern businesses, enabling both customers and employees to access services and systems on the go. Our custom mobile app development services ensure that your applications are user-friendly, secure, and tailored to meet your specific business needs.  Mobile applications also support remote work and real-time data access, which are essential in today's fast-paced business environment.",
  };

  return (
    <ComponentContainer>
      <TitleContent title='Mobile Applications' tags={tags} />
      <DescriptionContent
        description={description.descr1}
        subDescription={description.descr2}
      />
    </ComponentContainer>
  );
};
