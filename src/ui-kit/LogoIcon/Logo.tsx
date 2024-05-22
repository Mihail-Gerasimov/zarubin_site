import LogoIcon from '@/public/assets/images/icons/dark_logo.svg';

export const Logo = () => {
  return (
    <a href='/'>
      <LogoIcon className='h-[40px] w-[auto] tablet:h-[62px]' />
    </a>
  );
};
