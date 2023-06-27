'use client';

import { useMemo, useCallback, useRef } from 'react';

import {
  useAppSelector as useSelector,
  useAppDispatch as useDispatch,
} from '@/redux/hooks';
import { ticketsActions } from '@/redux/features/tickets';
import { selectAllTickets } from '@/redux/features/tickets/selector';
import { Input } from '@/ui/input/input';
import { DropDown } from '@/ui/dropdown/dropdown';
import { getRusGenre } from '@/utils/genre';
import { FILTER_TITLE, FILTER_GENRE, FILTER_SEARCH_TITLE } from '@/utils/text';

import styles from './filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();

  const allTickets = useSelector((state) => selectAllTickets(state));

  const titleRef = useRef<string>('');
  const genreRef = useRef<string>(FILTER_GENRE);

  const genre = useMemo(
    () =>
      allTickets.reduce((arr: string[], ticket) => {
        const rus = getRusGenre(ticket.genre);
        if (!arr.includes(rus)) {
          arr.push(rus);
        }
        return arr;
      }, []),
    [allTickets],
  );

  const filterTickets = useCallback(
    (option: string, str: string) => {
      const filtered = allTickets
        .filter(
          (ticket) =>
            getRusGenre(ticket.genre) === option || option === FILTER_GENRE,
        )
        .filter((ticket) =>
          ticket.title.toLowerCase().includes(str.trim().toLowerCase()),
        );
      dispatch(ticketsActions.setFilteredTickets(filtered));
    },
    [allTickets, dispatch],
  );

  const handleTitleFilter = useCallback(
    (str: string) => {
      titleRef.current = str;
      filterTickets(genreRef.current, str);
    },
    [filterTickets, genreRef],
  );

  const handleGenreFilter = useCallback(
    (option: string) => {
      genreRef.current = option;
      filterTickets(option, titleRef.current);
    },
    [filterTickets, titleRef],
  );

  return (
    <div className={styles.filter}>
      <h2 className={styles.title}>{FILTER_TITLE}</h2>
      <div className={styles.block}>
        <Input
          label="Название"
          name="name"
          placeholder={FILTER_SEARCH_TITLE}
          id="name"
          handleFilter={handleTitleFilter}
        />
        <DropDown
          label="Жанр"
          placeholder={FILTER_GENRE}
          items={[...genre, FILTER_GENRE]}
          handleFilter={handleGenreFilter}
        />
      </div>
    </div>
  );
};
