'use client';

import { PropsWithChildren } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export function ParallaxWrapper({
  children,
  speed = -10,
}: PropsWithChildren<{ speed?: number }>) {
  return (
    <ParallaxProvider>
      <Parallax speed={speed}>{children}</Parallax>
    </ParallaxProvider>
  );
}
