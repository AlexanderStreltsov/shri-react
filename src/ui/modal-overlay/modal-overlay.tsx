import { type FC } from 'react';

import styles from './modal-overlay.module.scss';

interface IModalOverlay {
  handleOverlayClick: () => void;
}

export const ModalOverlay: FC<IModalOverlay> = ({ handleOverlayClick }) => {
  return <div className={styles.overlay} onClick={handleOverlayClick} />;
};
