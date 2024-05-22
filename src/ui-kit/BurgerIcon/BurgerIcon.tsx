'use client';

import classNames from 'classnames';
import styles from './BurgerIcon.module.css';

interface Props {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const BurgerIcon = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className={styles.burgerWrapper} onClick={setIsOpen}>
      <span className={classNames(styles.burger, isOpen && styles.active)} />
    </div>
  );
};
