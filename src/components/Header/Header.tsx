import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Main</Link>
            <Link href={'#'}>Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
