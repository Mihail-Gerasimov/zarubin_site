import Link from 'next/link';

export const Header = () => {
  return (
    <header className='px-[14px] py-[40px] backdrop-blur-md sticky top-0 bg-slate-900/30'>
      <nav>
        <ul className='flex items-center justify-center gap-[12px] '>
          <li>
            <Link href={'/'} className=' '>
              Blog home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
