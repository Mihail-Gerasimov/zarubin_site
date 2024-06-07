import Link from 'next/link';

interface Props {
  list: List[];
  dark?: boolean;
}

interface List {
  id: number;
  name: string;
  link: string;
}

export const MainList = ({ list, dark = true }: Props) => {
  return (
    <ul className='hidden justify-center gap-[44px] desktop:flex'>
      {list.map((item) => (
        <li key={item.id}>
          <Link
            href={item.link}
            className={`font-proxima text-[16px] leading-[1.87] ${dark ? 'text-white' : 'text-[black]'}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
