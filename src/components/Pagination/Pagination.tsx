import Arrow from '@/public/assets/images/icons/arrow.svg';

interface Props {
  currentPage: number;
  postsPerPage: number;
  postLength: number;
  paginate: (arg: number) => void;
  prevPage: () => void;
  nextPage: () => void;
}

export const Pagination = ({
  currentPage,
  postsPerPage,
  postLength,
  paginate,
  prevPage,
  nextPage,
}: Props) => {
  const postNumbers = [];
  const buttons = Math.ceil(postLength / postsPerPage);

  for (let i = 1; i <= buttons; i++) {
    postNumbers.push(i);
  }

  const isNextDisable = currentPage < postLength / postsPerPage;
  const isPrevtDisable = currentPage !== 1;

  return (
    <div className='w-full flex items-center justify-center gap-[4px]'>
      <button
        type='button'
        onClick={prevPage}
        className='paginationBtn flex items-center gap-[4px] text-[18px] leading-[1.3]'
        disabled={!isPrevtDisable}
      >
        <Arrow
          className={`w-[20px] h-[auto] fill-text-dark rotate-[180deg] ${isPrevtDisable ? 'opacity-[100%]' : 'opacity-[40%]'}`}
        />
        <span
          className={`text-[18px] leading-[1.3] ${isPrevtDisable ? 'opacity-[100%]' : 'opacity-[40%]'}`}
        >
          Prev
        </span>
      </button>
      {
        <ul className='flex gap-[4px]'>
          {postNumbers.map((item) => (
            <li key={item}>
              <button
                type='button'
                className={`px-[16px] py-[12px] h-[48px] text-[18px] text-text-dark bg-btn-col rounded-[8px] ${currentPage === item && 'bg-white'}`}
                onClick={() => paginate(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      }
      <button
        type='button'
        onClick={nextPage}
        className='paginationBtn h-[48px] flex items-center gap-[4px]'
        disabled={!isNextDisable}
      >
        <span
          className={`text-[18px] leading-[1.3] ${isNextDisable ? 'opacity-[100%]' : 'opacity-[40%]'}`}
        >
          Next
        </span>
        <Arrow
          className={`w-[20px] fill-text-dark ${isNextDisable ? 'opacity-[100%]' : 'opacity-[40%]'}`}
        />
      </button>
    </div>
  );
};
