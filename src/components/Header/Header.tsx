import Link from 'next/link';

export const Header = () => {
  return (
    <header className='px-[14px] py-[20px] bg-black'>
      <nav>
        <ul className='flex gap-[12px] text-white'>
          <li>
            <Link href={'/'} className='hover:text-blue-600 '>
              Main
            </Link>
          </li>
          <li>
            <Link href={'#'} className='hover:text-blue-600'>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
