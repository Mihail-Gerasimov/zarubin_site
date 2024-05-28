import Link from 'next/link';

interface Props {
  list: List[];
}

interface List {
  id: number;
  name: string;
  link: string;
}

export const MainList = ({ list }: Props) => {
  return (
    <ul className='hidden desktop:flex justify-center gap-[44px]'>
      {list.map((item) => (
        <li key={item.id}>
          <Link
            href={item.link}
            className='text-[black] font-proxima text-[16px] leading-[1.87]'
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
