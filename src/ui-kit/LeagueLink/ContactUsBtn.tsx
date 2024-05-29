import Link from 'next/link';

export const ContactUsBtn = () => {
  return (
    <Link
      href='#'
      className='font-proxima-reg hidden h-[46px] min-w-[162px] items-center justify-center rounded-[4px] bg-main-blue font-proxima text-[21px] font-bold text-white tablet:rounded-[8px] desktop:flex desktop:rounded-[12px]  '
    >
      Contact us
    </Link>
  );
};
