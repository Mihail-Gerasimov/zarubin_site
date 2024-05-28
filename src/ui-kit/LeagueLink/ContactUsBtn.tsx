import Link from 'next/link';

export const ContactUsBtn = () => {
  return (
    <Link
      href='#'
      className='hidden min-w-[162px] h-[46px] font-proxima font-bold text-white bg-main-blue desktop:flex items-center justify-center rounded-[4px] font-proxima-reg text-[21px] tablet:rounded-[8px] desktop:rounded-[12px]  '
    >
      Contact us
    </Link>
  );
};
