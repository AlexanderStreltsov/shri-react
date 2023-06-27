import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './features/cart';
import { ticketsReducer } from './features/tickets';
import { movieApi } from './services/movieApi';
import { reviewApi } from './services/reviewApi';
import { cinemaApi } from './services/cinemaApi';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
    cart: cartReducer,
    tickets: ticketsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware,
      reviewApi.middleware,
      cinemaApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
