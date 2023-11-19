import React, { forwardRef } from 'react';
import styles from './Button.module.css';

type Props = { className?: string } & React.ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, Props>(function ButtonBase(
  { className, children, ...props },
  ref
) {
  const buttonClass = className
    ? `${styles.button} ${className}`
    : styles.button;

  return (
    <button {...props} ref={ref} className={buttonClass}>
      {children}
    </button>
  );
});
