import type { HTMLProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './button.module.scss';

export interface IButton extends HTMLProps<HTMLButtonElement> {
  type?: 'primary' | 'secondary' | 'disabled' | 'transparent';
  isIcon?: boolean;
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  type = 'primary',
  isIcon = false,
  children,
  ...props
}) => {
  let typeClass;

  switch (type) {
    case 'primary':
      typeClass = styles.button_primary;
      break;
    case 'secondary':
      typeClass = styles.button_secondary;
      break;
    case 'disabled':
      typeClass = styles.button_disabled;
      break;
    case 'transparent':
      typeClass = styles.button_transparent;
      break;
    default:
      typeClass = '';
      break;
  }

  const withIconClass = isIcon ? styles['button__with-icon'] : '';

  return (
    <button
      className={classNames(styles.button, typeClass, withIconClass)}
      {...props}
    >
      {children}
    </button>
  );
};
