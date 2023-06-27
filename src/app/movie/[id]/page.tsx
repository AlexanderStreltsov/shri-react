'use client';

import { useGetMovieQuery } from '@/redux/services/movieApi';
import { Spinner } from '@/ui/spinner/spinner';
import { MovieInfo } from '@/components/movie-info/movie-info';
import { MovieReviews } from '@/components/movie-reviews/movie-reviews';

import styles from './page.module.scss';

export default function Movie({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useGetMovieQuery(params.id);

  if (isLoading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <span>Ничего не найдено =(</span>;
  }

  return (
    <section className={styles.wrapper}>
      <MovieInfo {...data} />
      <MovieReviews id={data.id} />
    </section>
  );
}
