import Link from 'next/link';

export type Breadcrumb = {
  title: string;
  link?: string;
};

export const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <div className='flex items-center gap-[20px] font-proxima text-[20px] text-white'>
      {breadcrumbs.map(({ title, link }, index) => (
        <>
          {link ? (
            <Link key={title} href={link}>
              {title}
            </Link>
          ) : (
            <div className='text-[var(--main-gray)]' key={title}>
              {title}
            </div>
          )}
          {index !== breadcrumbs.length - 1 && <>/</>}
        </>
      ))}
    </div>
  );
};
