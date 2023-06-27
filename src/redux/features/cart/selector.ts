import { createSelector } from 'reselect';

import { type RootState } from '@/redux/store';
import { selectAllTickets } from '@/redux/features/tickets/selector';
import { type IMovie } from '@/types/movie';
import { type TMovies } from '@/types/movies';

const selectCartState = (state: RootState) => state.cart;

export const selectTicketCount = (state: RootState, id: string) =>
  selectCartState(state)[id] || 0;

export const selectAllTicketCount = (state: RootState) => {
  const cartState = selectCartState(state);

  let count = 0;
  for (const key in cartState) {
    count += cartState[key];
  }

  return count;
};

export const selectAllCartItems = createSelector(
  selectCartState,
  selectAllTickets,
  (cartState, allTickets) => {
    const allTicketsHash: Record<string, IMovie> = {};

    allTickets.forEach((item) => {
      allTicketsHash[item.id] = item;
    });

    const cartItems: TMovies = [];
    for (const key in cartState) {
      cartItems.push(allTicketsHash[key]);
    }

    return cartItems;
  },
);
