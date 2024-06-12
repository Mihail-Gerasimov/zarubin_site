import { PropsWithChildren } from 'react';

export function Container({ children }: PropsWithChildren) {
  return (
    <div className='px-[10px] tablet:px-[40px] desktop:px-[80px]'>
      {children}
    </div>
  );
}
