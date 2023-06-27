import { type FC } from 'react';
import Image from 'next/image';

import { CartControls } from '@/components/cart-controls/cart-controls';
import { type IMovie } from '@/types/movie';
import { getRusGenre } from '@/utils/genre';

import styles from './movie-info.module.scss';

export const MovieInfo: FC<IMovie> = ({
  id,
  title,
  genre,
  posterUrl,
  releaseYear,
  description,
  rating,
  director,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.poster}>
        <figure>
          <Image src={posterUrl} alt={title} sizes="100%" priority fill />
        </figure>
      </div>
      <div className={styles.info}>
        <div className={styles.block}>
          <div className={styles.descBlock}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.list}>
              <li>
                <h3>Жанр: </h3>
                <p>{getRusGenre(genre)}</p>
              </li>
              <li>
                <h3>Год выпуска: </h3>
                <p>{releaseYear}</p>
              </li>
              <li>
                <h3>Рейтинг: </h3>
                <p>{rating}</p>
              </li>
              <li>
                <h3>Режиссер: </h3>
                <p>{director}</p>
              </li>
            </ul>
          </div>
          <CartControls id={id} isDelete={false} />
        </div>
        <div className={styles.description}>
          <h3>Описание </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
