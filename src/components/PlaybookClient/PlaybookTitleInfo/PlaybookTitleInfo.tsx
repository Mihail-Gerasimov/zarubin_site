'use client';

import { useParams, usePathname } from 'next/navigation';

export const PlaybookTitleInfo = () => {
  //   console.log('props', props);

  const params = useParams();
  const pathname = usePathname();

  console.log('useParams', params);
  console.log('pathName', pathname);

  const pathnameArr = pathname.split('/').filter((item) => item !== '');
  console.log('pathnameArr', pathnameArr);

  const urlName = pathnameArr.length === 1 ? 'all' : pathnameArr[1];

  return (
    <div>
      <h2>
        <span>{urlName}</span>
      </h2>
    </div>
  );
};
