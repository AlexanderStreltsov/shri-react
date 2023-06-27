import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/utils/api';
import { type TMovies } from '@/types/movies';
import { type IMovie } from '@/types/movie';

export const movieApi = createApi({
  reducerPath: 'movie',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getMovies: builder.query<TMovies, void>({ query: () => 'movies' }),
    getMovie: builder.query<IMovie, string>({
      query: (movieId) => `movie?movieId=${movieId}`,
    }),
    getMoviesByCinema: builder.query<TMovies, string>({
      query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetMoviesByCinemaQuery,
} = movieApi;
