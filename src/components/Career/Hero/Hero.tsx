import { NextLinePreposition } from '../../NextLinePreposition/NextLinePreposition';
import { Breadcrumb, Breadcrumbs } from '../../shared/Breadcrumbs/Breadcrumbs';

const BREADCRUMBS: Breadcrumb[] = [
  { title: 'Main', link: '/' },
  { title: 'Career' },
];

export const Hero = () => {
  return (
    <div className={`flex flex-col gap-[20px] break-words pb-[60px]`}>
      <Breadcrumbs breadcrumbs={BREADCRUMBS} />
      <h1 className='z-[5] font-unbound text-[32px] font-bold uppercase leading-[1.14] mobile-big:text-[45px] tablet:text-[60px] desktop:text-[80px] desktop:font-black desktop-hard:text-[100px]'>
        <NextLinePreposition tag='span' text='Become a part' className='' />
        <br />
        <span className='text-stroke desktop:leading-[1.22] desktop-hard:text-[100px]'>
          of the research team
        </span>
      </h1>
    </div>
  );
};
