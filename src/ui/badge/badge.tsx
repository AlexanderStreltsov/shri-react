import { type FC } from 'react';

import styles from './badge.module.scss';

export const Badge: FC<{ count: number }> = ({ count }) => {
  return <div className={styles.badge}>{count}</div>;
};
