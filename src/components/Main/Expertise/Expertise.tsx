import { ExpertiseCard } from '@/src/components/Main/Expertise/ExpertiseCard/ExpertiseCard';
import { ExpertiseData } from '@/src/utils/DataLayers/ExpertiseData';
import { NextLinePreposition } from '../../NextLinePreposition/NextLinePreposition';

export const Expertise = () => {
  return (
    <div>
      <NextLinePreposition
        tag='h2'
        text='Expertise and experience'
        className='font-unbound text-[32px] font-bold uppercase leading-[1] mobile-big:text-[45px] tablet:text-[50px] tablet:leading-[1.3] desktop:text-[70px] desktop:leading-[1.1]'
      />
      <ul className='mt-[20px] flex flex-col gap-[20px] tablet:mt-[8px] tablet:gap-0 desktop:mt-[40px]'>
        {ExpertiseData.map((item) => (
          <li key={item.id}>
            <ExpertiseCard
              isEven={item.id % 2 === 0}
              title={item.title}
              link={item.link}
              subData={item.data}
              image={item.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
