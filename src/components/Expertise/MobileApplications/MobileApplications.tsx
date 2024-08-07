import appImg from '@/public/assets/images/expertise/mobile_aplication.webp';
import { DescriptionContent } from '@/src/ui-kit/DescriptionContent/DescriptionContent';
import { TitleContent } from '@/src/ui-kit/TitleContent/TitleContent';
import Image from 'next/image';
import { ComponentContainer } from '../../ComponentContainer/ComponentContainer';
import styles from './MobileApplication.module.css';

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

export const MobileApplications = () => {
  return (
    <ComponentContainer light>
      <TitleContent title='Mobile Applications' tags={tags} light />
      <div className='flex flex-col gap-[20px]'>
        <DescriptionContent
          description={description.descr1}
          subDescription={description.descr2}
        />
        <div className={styles.imageBox}>
          <Image src={appImg} alt='Mobile Applications' />
        </div>
      </div>
    </ComponentContainer>
  );
};
