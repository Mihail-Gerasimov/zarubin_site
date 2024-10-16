import classNames from 'classnames';
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = forwardRef<
  HTMLDivElement,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        classNames(
          'mobile-big:py[20px] mx-auto px-[10px] tablet:container tablet:px-[20px] desktop:px-[20px]',
          className,
        ),
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';
