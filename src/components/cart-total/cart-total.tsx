'use client';

import { useAppSelector as useSelector } from '@/redux/hooks';
import { selectAllTicketCount } from '@/redux/features/cart/selector';
import { CART_TOTAL_TEXT } from '@/utils/text';

import styles from './cart-total.module.scss';

export const CartTotal = () => {
  const count = useSelector((state) => selectAllTicketCount(state));

  if (!count) {
    return null;
  }

  return (
    <div className={styles.total}>
      <span>{CART_TOTAL_TEXT}</span>
      <span>{count}</span>
    </div>
  );
};
