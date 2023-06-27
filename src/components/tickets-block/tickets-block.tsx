'use client';

import { type FC } from 'react';

import { TicketCard } from '@/components/ticket-card/ticket-card';
import { type TMovies } from '@/types/movies';

import styles from './tickets-block.module.scss';

interface ITicketsBlock {
  tickets: TMovies;
  isDelete?: boolean;
}

export const TicketsBlock: FC<ITicketsBlock> = ({
  tickets,
  isDelete = false,
}) => {
  return (
    <ul className={styles.block}>
      {tickets.map(({ id, title, posterUrl, genre }) => (
        <li key={id}>
          <TicketCard
            id={id}
            title={title}
            posterUrl={posterUrl}
            genre={genre}
            isDelete={isDelete}
          />
        </li>
      ))}
    </ul>
  );
};
