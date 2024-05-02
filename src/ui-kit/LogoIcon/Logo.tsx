import LogoIcon from '@/public/assets/images/icons/logo_blog.svg';

export const Logo = () => {
  return (
    <a href={'https://stocks.soccer/'}>
      <LogoIcon className='h-[16px] w-[auto] tablet:h-[26px] desktop:h-[34px]' />
    </a>
  );
};
