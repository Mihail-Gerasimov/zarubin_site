'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
// import ym from 'react-yandex-metrika';

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(pathname);

    // const url = `${pathname}?${searchParams}`;
    // ym('68177191', 'hit', url);
  }, [pathname, searchParams]);

  return null;
}
