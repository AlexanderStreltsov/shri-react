'use client';

import { type FC, useCallback, useState } from 'react';

import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '@/redux/hooks';
import { cartActions } from '@/redux/features/cart';
import { selectTicketCount } from '@/redux/features/cart/selector';
import { Button } from '@/ui/button/button';
import { Icon } from '@/ui/icon/icon';
import { MIN_COUNT, MAX_COUNT } from '@/utils/count';
import {
  MODAL_TITLE_DELETE_TICKET,
  MODAL_QUESTION_DELETE_TICKET,
} from '@/utils/text';
import { Portal } from '@/components/portal/portal';
import { Modal } from '@/ui/modal/modal';

import styles from './cart-controls.module.scss';

interface ICartControls {
  id: string;
  isDelete: boolean;
}

export const CartControls: FC<ICartControls> = ({ id, isDelete }) => {
  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);

  const count = useSelector((state) => selectTicketCount(state, id));

  const handleIncrement = useCallback(
    () => dispatch(cartActions.increment(id)),
    [dispatch, id],
  );

  const handleDecrement = useCallback(
    () => dispatch(cartActions.decrement(id)),
    [dispatch, id],
  );

  const handleDelete = useCallback(
    () => dispatch(cartActions.delete(id)),
    [dispatch, id],
  );

  const handleConfirmDelete = useCallback(() => setOpen(true), []);

  const handleCloseModals = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className={styles.controls}>
        <Button
          isIcon
          onClick={handleDecrement}
          type={count === MIN_COUNT ? 'disabled' : 'primary'}
          disabled={count === MIN_COUNT}
        >
          <Icon type="minus" />
        </Button>
        <span>{count}</span>
        <Button
          isIcon
          onClick={handleIncrement}
          type={count === MAX_COUNT ? 'disabled' : 'primary'}
          disabled={count === MAX_COUNT}
        >
          <Icon type="plus" />
        </Button>
      </div>
      {isDelete && (
        <Button type="transparent" isIcon onClick={handleConfirmDelete}>
          <Icon type="close" />
        </Button>
      )}
      {isOpen && (
        <Portal>
          <Modal
            handleCloseModals={handleCloseModals}
            title={MODAL_TITLE_DELETE_TICKET}
          >
            <div className={styles.modalWrapper}>
              <p className={styles.modalDescription}>
                {MODAL_QUESTION_DELETE_TICKET}
              </p>
              <div className={styles.modalControls}>
                <Button onClick={handleDelete}>Да</Button>
                <Button onClick={handleCloseModals} type="secondary">
                  Нет
                </Button>
              </div>
            </div>
          </Modal>
        </Portal>
      )}
    </>
  );
};
