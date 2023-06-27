import { useEffect, type FC, type PropsWithChildren } from 'react';

import { Button } from '@/ui/button/button';
import { Icon } from '@/ui/icon/icon';
import { ModalOverlay } from '@/ui/modal-overlay/modal-overlay';

import styles from './modal.module.scss';

interface IModal extends PropsWithChildren {
  title?: string;
  handleCloseModals: () => void;
}

export const Modal: FC<PropsWithChildren<IModal>> = ({
  title = '',
  handleCloseModals,
  children,
}) => {
  useEffect(() => {
    const handleEscKey = (evt: KeyboardEvent) =>
      evt.key === 'Escape' && handleCloseModals();
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleCloseModals]);

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.titleWrapper}>
          <h2>{title}</h2>
          <Button type="transparent" isIcon onClick={handleCloseModals}>
            <Icon type="close" />
          </Button>
        </div>
        {children}
      </div>
      <ModalOverlay handleOverlayClick={handleCloseModals} />
    </>
  );
};
