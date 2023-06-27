'use client';

import { useAppSelector as useSelector } from '@/redux/hooks';
import { selectAllCartItems } from '@/redux/features/cart/selector';
import { TicketsBlock } from '@/components/tickets-block/tickets-block';
import { CartTotal } from '@/components/cart-total/cart-total';

import styles from './page.module.scss';

export default function Cart() {
  const cartItems = useSelector(selectAllCartItems);

  if (!cartItems.length) {
    return <span>В корзине нет билетов =(</span>;
  }

  return (
    <section className={styles.wrapper}>
      <TicketsBlock tickets={cartItems} isDelete />
      <CartTotal />
    </section>
  );
}
