import Figma from '@/public/assets/images/case/technology/figma.svg';
import Flutter from '@/public/assets/images/case/technology/flutter.svg';
import Go from '@/public/assets/images/case/technology/go.svg';
import PHP from '@/public/assets/images/case/technology/php.svg';
import React from '@/public/assets/images/case/technology/react.svg';
import Ruby from '@/public/assets/images/case/technology/ruby.svg';
import type { FC } from 'react';

type IconComponentType = FC<React.SVGProps<SVGSVGElement>>;

export type InstrumentIconsType = {
  [key in
    | 'flutter'
    | 'figma'
    | 'react'
    | 'php'
    | 'go'
    | 'ruby']: IconComponentType;
};

export const InstrumentIcons: InstrumentIconsType = {
  flutter: Flutter,
  figma: Figma,
  react: React,
  php: PHP,
  go: Go,
  ruby: Ruby,
};
