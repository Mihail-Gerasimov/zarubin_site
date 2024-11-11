import Back from '@/public/assets/images/icons/back.svg';

interface IButton {
  onClick: () => void;
}

export const TestNextBackButton = ({ onClick }: IButton) => {
  return (
    <div
      className={`mt-[40px] flex w-full items-center justify-between font-proxima text-[20px] font-bold leading-[1]`}
    >
      <button
        type='button'
        onClick={onClick}
        className='flex items-center justify-center gap-[10px]'
      >
        <Back className='w-[24px]' />
        Back
      </button>

      <button
        type='submit'
        className='rounded-[6px] bg-main-blue p-[13px_32px] text-[20px] leading-[1] text-white duration-300 hover:bg-main-blue-hover'
      >
        Next
      </button>
    </div>
  );
};
