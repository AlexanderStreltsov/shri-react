'use client';

import { useEffect } from 'react';

import { useGetMoviesQuery } from '@/redux/services/movieApi';
import { useAppDispatch as useDispatch } from '@/redux/hooks';
import { ticketsActions } from '@/redux/features/tickets';
import { Filter } from '@/components/filter/filter';
import { FilteredTickets } from '@/components/filtered-tickets/filtered-tickets';
import { Spinner } from '@/ui/spinner/spinner';

import styles from './page.module.scss';

export default function Home() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetMoviesQuery();

  useEffect(() => {
    if (!!data) {
      dispatch(ticketsActions.setAllTickets(data));
      dispatch(ticketsActions.setFilteredTickets(data));
    }
  }, [dispatch, data]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>Ничего не найдено</span>;
  }

  return (
    <section className={styles.wrapper}>
      <Filter />
      <FilteredTickets />
    </section>
  );
}
