import Back from '@/public/assets/images/icons/back.svg';
import Link from 'next/link';

interface Props {
  linkName: string;
}

export const BackLink = ({ linkName }: Props) => {
  return (
    <Link
      href={linkName}
      className='fixed bottom-[43px] left-[73px] z-[5] hidden items-center gap-[10px] font-proxima text-[20px] font-bold desktop:flex'
    >
      <Back className='w-[24px]' />
      Back to blog
    </Link>
  );
};
