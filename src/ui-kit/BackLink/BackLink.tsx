import Back from '@/public/assets/images/icons/back.svg';
import Link from 'next/link';

interface Props {
  linkName: string;
}

export const BackLink = ({ linkName }: Props) => {
  return (
    <Link
      href={linkName}
      className='hidden fixed left-[73px] bottom-[43px] font-proxima font-bold text-[20px] desktop:flex items-center gap-[10px] z-[5]'
    >
      <Back className='w-[24px]' />
      Back to blog
    </Link>
  );
};
