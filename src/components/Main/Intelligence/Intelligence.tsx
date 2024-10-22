import Image from 'next/image';
import { Container } from '../../shared/Container/Container';
import { ParallaxWrapper } from '../../shared/ParallaxWrapper/ParalaxWrapper';

export const Intelligence = () => {
  return (
    <div className='relative overflow-hidden text-right'>
      <div className='absolute left-0 top-0 z-[5] h-full w-full bg-linear-shadow'></div>
      <Container className='relative z-10'>
        <ParallaxWrapper speed={-20}>
          <div className='flex h-[650px] flex-col justify-center'>
            <h2 className='font-unbound text-[32px] font-bold uppercase leading-[1.12] tablet:text-[60px] tablet:leading-[1.1] desktop:text-[70px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
              Where Leadership Meets{' '}
            </h2>
            <h2 className='text-stroke font-unbound text-[32px] font-bold uppercase leading-[1.12] tablet:text-[60px] tablet:leading-[1.1] desktop:text-[70px] desktop:leading-[1.22] desktop-hard:text-[90px]'>
              Business Intelligence
            </h2>
          </div>
        </ParallaxWrapper>
      </Container>
      <Image
        width={400}
        height={300}
        src='/assets/images/main/bussines_bg.webp'
        alt='background image'
        className='absolute right-[64px] top-[18px] h-[auto] w-[436px] tablet:right-0 tablet:top-[23px] tablet:w-full desktop:left-[-100px] desktop:h-[728px] desktop:w-[auto]'
      />
    </div>
  );
};
