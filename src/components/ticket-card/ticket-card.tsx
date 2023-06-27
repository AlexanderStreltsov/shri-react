'use client';

import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { type ITicketCard } from '@/types/ticket-card';
import { CartControls } from '@/components/cart-controls/cart-controls';
import { getRusGenre } from '@/utils/genre';

import styles from './ticket-card.module.scss';

interface ITicketCardProps extends ITicketCard {
  isDelete: boolean;
}

export const TicketCard: FC<ITicketCardProps> = ({
  id,
  title,
  genre,
  posterUrl,
  isDelete,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster}>
        <figure>
          <Image src={posterUrl} alt={title} sizes="100%" priority fill />
        </figure>
      </div>
      <div className={styles.info}>
        <Link href={`/movie/${id}`}>
          <h2 className={styles.title}>{title}</h2>
        </Link>
        <p className={styles.genre}>{getRusGenre(genre)}</p>
      </div>
      <CartControls id={id} isDelete={isDelete} />
    </div>
  );
};
