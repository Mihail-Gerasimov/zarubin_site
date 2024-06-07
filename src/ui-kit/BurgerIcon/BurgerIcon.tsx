'use client';

import classNames from 'classnames';
import styles from './BurgerIcon.module.css';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
  dark?: boolean;
}

export const BurgerIcon = ({ isOpen, setIsOpen, dark = true }: Props) => {
  return (
    <div className={styles.burgerWrapper} onClick={setIsOpen}>
      <span
        className={classNames(
          styles.burger,
          isOpen && styles.active,
          dark ? styles.burgerLight : styles.burgerDark,
        )}
      />
    </div>
  );
};
