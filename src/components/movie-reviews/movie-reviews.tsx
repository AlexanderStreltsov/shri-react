'use client';

import { type FC } from 'react';

import { useGetFilmReviewsQuery } from '@/redux/services/reviewApi';
import { Spinner } from '@/ui/spinner/spinner';
import { MovieReview } from '@/components/movie-review/movie-review';

import styles from './movie-reviews.module.scss';

interface IMovieReviews {
  id: string;
}

export const MovieReviews: FC<IMovieReviews> = ({ id }) => {
  const { data, isLoading, error } = useGetFilmReviewsQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>Ничего не найдено</span>;
  }

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id}>
          <MovieReview {...item} />
        </li>
      ))}
    </ul>
  );
};
