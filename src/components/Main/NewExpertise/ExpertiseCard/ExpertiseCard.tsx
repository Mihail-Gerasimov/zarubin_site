import { GenerateIcon } from '@/src/utils/generateIcon/GenerateIgon';

interface IExpertiseCard {
  data: {
    title: string;
    logo: string;
    description: string;
  };
  idx: number;
}

export const ExpertiseCard = ({ data, idx }: IExpertiseCard) => {
  const { logo, title } = data;

  return (
    <div
      className={`flex flex-col items-start gap-[48px] rounded-[5px] bg-main-beige p-[30px] ${idx % 2 === 0 ? 'gradientR' : 'gradientL'}`}
    >
      <div className='mr-auto flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-main-orange'>
        <GenerateIcon path={logo} color='white' />
      </div>
      <div className='mt-auto flex flex-col gap-[24px]'>
        <h3 className='font-unbound text-[20px] font-bold uppercase leading-[1.1] text-main-bg desktop:text-[28px]'>
          {title}
        </h3>
      </div>
    </div>
  );
};
