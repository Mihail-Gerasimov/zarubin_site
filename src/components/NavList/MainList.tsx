import { LeagueLink } from '@/src/ui-kit/LeagueLink/LeagueLink';
import { Logo } from '@/src/ui-kit/LogoIcon/Logo';

export const MainList = () => {
  return (
    <ul className='mx-[auto] grid grid-cols-2 desktop:grid-cols-2'>
      <li className='flex items-center'>
        <Logo />
      </li>
      <li className='flex items-center justify-end'>
        <LeagueLink />
      </li>
    </ul>
  );
};
