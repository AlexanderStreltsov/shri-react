import { type FC } from 'react';
import Image from 'next/image';

import { type IReview } from '@/types/review';

import photo from '@/assets/photo.svg';
import styles from './movie-review.module.scss';

export const MovieReview: FC<IReview> = ({ id, name, text, rating }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photo}>
        <figure>
          <Image src={photo} alt={name} sizes="100%" priority fill />
        </figure>
      </div>
      <h2 className={styles.name}>{name}</h2>
      <div className={styles.rating}>
        <h3>Оценка: </h3>
        <p>{rating}</p>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
