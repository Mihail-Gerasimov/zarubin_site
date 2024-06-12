import classNames from 'classnames';
import React from 'react';
import styles from './ComponentContainer.module.css';

interface Props {
  children: React.ReactNode;
  light?: boolean;
}

export const ComponentContainer = ({ children, light = false }: Props) => {
  return (
    <div
      className={classNames(
        styles.mainContainer,
        light ? styles.light : styles.dark,
      )}
    >
      {children}
    </div>
  );
};
