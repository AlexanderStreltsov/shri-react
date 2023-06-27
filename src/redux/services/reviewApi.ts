import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/utils/api';
import { type TReviews } from '@/types/reviews';

export const reviewApi = createApi({
  reducerPath: 'review',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllReviews: builder.query<TReviews, void>({ query: () => 'reviews' }),
    getFilmReviews: builder.query<TReviews, string>({
      query: (movieId) => `reviews?movieId=${movieId}`,
    }),
  }),
});

export const { useGetAllReviewsQuery, useGetFilmReviewsQuery } = reviewApi;
