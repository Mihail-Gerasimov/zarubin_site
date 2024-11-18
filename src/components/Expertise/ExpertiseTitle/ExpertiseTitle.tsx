import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'Expertise' },
];
export const ExpertiseTitle = () => {
  return (
    <div className='flex flex-col gap-[20px] break-words pb-[60px]'>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} light />
      <h1 className='z-[5] font-unbound text-[40px] font-bold uppercase leading-[1.1] tablet:text-[60px] desktop:text-[80px] desktop:font-black desktop-hard:text-[100px]'>
        Expertise
      </h1>
    </div>
  );
};
