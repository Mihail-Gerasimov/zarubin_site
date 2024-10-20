import LogoIcon from '@/public/assets/images/icons/dark_logo.svg';
import LightLogoIcon from '@/public/assets/images/icons/light_logo.svg';
// import { BASE_URL } from '@/src/utils/alias';

// const URL = process.env.NODE_ENV === 'production' ? BASE_URL : '/';

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
