import Arrow from '@/public/assets/images/icons/arrow.svg';
import { BusinessProblemsData } from '@/src/utils/DataLayers/BusinessProblemsData';
import { BusinessSolvingCard } from './BusinessSolvingCard/BusinessSolvingCard';

export const BusinessSolving = () => {
  return (
    <div>
      <div className='flex items-start justify-between'>
        <h2 className='font-unbound text-[45px] font-bold uppercase leading-[1] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'>
          Solving business problems
        </h2>
        <div className='hidden items-center gap-[16px] tablet:flex'>
          <button className='rounded-[6px] bg-main-blue'>
            <Arrow className='h-[50px] w-[50px] rotate-[180deg] fill-white' />
          </button>
          <button className='rounded-[6px] bg-main-blue'>
            <Arrow className='w-[50px]] h-[50px] fill-white' />
          </button>
        </div>
      </div>
      <div className='hide-scrollbar mt-[40px] flex gap-[20px] overflow-scroll tablet:gap-[40px]'>
        {BusinessProblemsData.map((item) => (
          <BusinessSolvingCard
            key={item.id}
            title={item.title}
            tags={item.tags}
            description={item.description}
            link={item.link}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
