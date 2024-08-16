import classNames from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

export const ContactUsBtn = ({ dark }: { dark: boolean }) => {
  return (
    <Link
      href='#contacts'
      className={twMerge(
        classNames(
          'font-proxima-reg hidden h-[46px] min-w-[162px] items-center justify-center rounded-[4px] font-proxima text-[20px] font-bold transition tablet:rounded-[8px] laptop-big:flex desktop:rounded-[6px]',
          dark
            ? 'border-2 border-solid border-emerald-300 hover:border-[#7CFFCD] hover:bg-[#7CFFCD] hover:text-text-dark'
            : 'bg-main-blue text-white hover:bg-main-blue-hover',
        ),
      )}
    >
      Contact us
    </Link>
  );
};
