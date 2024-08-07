import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'Career' },
];

export const Hero = () => {
  return (
    <div className={`flex flex-col gap-[20px] break-words pb-[60px]`}>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <h1 className='z-[5] font-unbound text-[50px] font-bold uppercase leading-[1.14] tablet:text-[60px] desktop:text-[80px] desktop:font-black desktop-hard:text-[100px]'>
        Become a part
        <br />
        <span className='text-stroke text-[50px] tablet:text-[60px] desktop:text-[80px] desktop:leading-[1.22] desktop-hard:text-[100px]'>
          of the consultancy team
        </span>
      </h1>
    </div>
  );
};
