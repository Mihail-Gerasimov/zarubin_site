import Link from 'next/link';

export type Breadcrumb = {
  title: string;
  link?: string;
};

export const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <div className='flex flex-wrap items-center gap-x-[20px] gap-y-[10px] font-proxima text-[20px] text-white'>
      {breadcrumbs.map(({ title, link }, index) => (
        <>
          {index !== 0 && <>/</>}
          {link ? (
            <Link key={title} href={link}>
              {title}
            </Link>
          ) : (
            <div className='text-[var(--main-gray)] opacity-80' key={title}>
              {title}
            </div>
          )}
        </>
      ))}
    </div>
  );
};
