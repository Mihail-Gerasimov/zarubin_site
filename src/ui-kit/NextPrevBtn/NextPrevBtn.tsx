import Arrow from '@/public/assets/images/icons/arrow.svg';

interface Props {
  prevPage: () => void;
  nextPage: () => void;
}

export const NextPrevBtn = ({ prevPage, nextPage }: Props) => {
  return (
    <div>
      <div className='flex items-center gap-[16px]'>
        <button
          type='button'
          className='flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-main-blue'
          onClick={prevPage}
        >
          <Arrow className='rotate-[180deg] fill-white' />
        </button>
        <button
          type='button'
          className='flex h-[50px] w-[50px] items-center justify-center rounded-[6px] bg-main-blue'
          onClick={nextPage}
        >
          <Arrow className='fill-white' />
        </button>
      </div>
    </div>
  );
};
