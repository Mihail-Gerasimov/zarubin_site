import { Container } from '../../shared/Container/Container';
import { NewForm } from './NewForm/NewForm';

export const NewContactForm = () => {
  return (
    <div className='video-container'>
      <video
        autoPlay
        muted
        loop
        className='absolute left-0 top-0 h-full w-full object-cover'
      >
        <source src='/assets/video/bg-video.mp4' type='video/mp4' />
        <source src='/assets/video/bg-video.webm' type='video/webm' />
      </video>
      <div className='relative z-20 laptop-big:w-[50%]'>
        <Container className='py-[70px] tablet:py-[80px] desktop-light:py-[100px]'>
          <NewForm />
        </Container>
      </div>
    </div>
  );
};
