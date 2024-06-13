'use client';

import { PropsWithChildren } from 'react';
import { TEAnimation } from 'tw-elements-react';

export const ScrollAnimationWrapper = ({
  children,
  showOnLoad,
  className,
}: PropsWithChildren<{ showOnLoad?: boolean; className?: string }>) => {
  return (
    <TEAnimation
      animation='slide-in'
      start={showOnLoad ? 'onLoad' : 'onScroll'}
      className={className}
    >
      {children}
    </TEAnimation>
  );
};
