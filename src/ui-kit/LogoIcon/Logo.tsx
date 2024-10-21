import LightLogoIcon from '@/public/assets/images/icons/logo_dark.svg';
import LogoIcon from '@/public/assets/images/icons/logo_white.svg';

interface Props {
  dark?: boolean;
}

export const Logo = ({ dark = true }: Props) => {
  return (
    <a aria-label='Go to the main page' href='/'>
      {dark ? (
        <LightLogoIcon className='h-[36px] w-[auto] desktop:h-[41px]' />
      ) : (
        <LogoIcon className='h-[36px] w-[auto] desktop:h-[41px]' />
      )}
    </a>
  );
};
