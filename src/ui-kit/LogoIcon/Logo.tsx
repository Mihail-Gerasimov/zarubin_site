import LogoIcon from '@/public/assets/images/icons/logo_white.svg';
import LightLogoIcon from '@/public/assets/images/icons/logo_dark.svg';

interface Props {
  dark?: boolean;
}

export const Logo = ({ dark = true }: Props) => {
  return (
    <a aria-label='Go to the main page' href='/'>
      {dark ? (
        <LightLogoIcon className='h-[40px] w-[auto] tablet:h-[62px]' />
      ) : (
        <LogoIcon className='h-[40px] w-[auto] tablet:h-[62px]' />
      )}
    </a>
  );
};
