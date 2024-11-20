import Link from 'next/link';

export const ContactWrapper = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={`flex flex-col gap-[20px]`}>
      <Link
        href='/brief'
        onClick={onClick}
        className={`flex w-fit items-center justify-center rounded-[6px] border-[1px] border-[#7cffcd] p-[14px_32px] font-proxima text-[20px] font-bold leading-[1] text-white`}
      >
        Free strategy session
      </Link>
      <Link
        href='mailto:access@thebrightbyte.com '
        className={`font-proxima text-[22px] font-bold leading-[1.1] text-white tablet:text-[32px]`}
      >
        access@thebrightbyte.com
      </Link>
    </div>
  );
};
