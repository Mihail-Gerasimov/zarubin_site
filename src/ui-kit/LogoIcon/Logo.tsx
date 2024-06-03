import LogoIcon from '@/public/assets/images/icons/dark_logo.svg';
// import { BASE_URL } from '@/src/utils/alias';

// const URL = process.env.NODE_ENV === 'production' ? BASE_URL : '/';

export const Logo = () => {
  return (
    <a href='/'>
      <LogoIcon className='h-[40px] w-[auto] tablet:h-[62px]' />
    </a>
  );
};
