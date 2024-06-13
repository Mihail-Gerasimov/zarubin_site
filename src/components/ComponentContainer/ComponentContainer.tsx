import classNames from 'classnames';
import React from 'react';
import styles from './ComponentContainer.module.css';
import { twMerge } from 'tailwind-merge';

interface Props {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export const ComponentContainer = ({
  children,
  light = false,
  className,
}: Props) => {
  return (
    <div
      className={twMerge(
        classNames(
          styles.mainContainer,
          light ? styles.light : styles.dark,
          className,
        ),
      )}
    >
      {children}
    </div>
  );
};
