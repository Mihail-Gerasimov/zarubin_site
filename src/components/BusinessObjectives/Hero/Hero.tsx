import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'Solutions' },
];

export const Hero = () => {
  return (
    <div className='flex flex-col gap-[20px] break-words pb-[60px]'>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <h1 className='z-[5] font-unbound text-[40px] font-bold uppercase leading-[1.1] tablet:text-[60px] desktop:text-[80px] desktop:font-black desktop-hard:text-[100px] desktop-hard:text-[100px]'>
        Solutions
      </h1>
    </div>
  );
};
