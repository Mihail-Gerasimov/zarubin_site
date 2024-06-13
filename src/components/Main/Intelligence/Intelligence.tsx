import Image from 'next/image';
import { Container } from '../../shared/Container/Container';

export const Intelligence = () => {
  return (
    <div className='bussinesBg overflow-hidden text-right'>
      <Container>
        <div className='relative z-30'>
          <h2 className='font-unbound text-[32px] font-bold uppercase leading-[1.1] tablet:text-[60px] tablet:leading-[1] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
            Where Leadership Meets{' '}
          </h2>
          <h2 className='text-stroke font-unbound text-[32px] font-bold uppercase leading-[1.1] tablet:text-[60px] tablet:leading-[1] desktop:mb-[330px] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
            Business Intelligence
          </h2>
        </div>
      </Container>
      <Image
        width={400}
        height={300}
        src='/assets/images/main/bussines_bg.png'
        alt=''
        className='absolute right-[64px] top-[18px] h-[auto] w-[436px] tablet:right-0 tablet:top-[23px] tablet:w-full desktop:left-[-100px] desktop:h-[728px] desktop:w-[auto]'
      />
    </div>
  );
};
