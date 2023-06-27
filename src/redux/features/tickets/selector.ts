import { type RootState } from '@/redux/store';

const selectTicketsState = (state: RootState) => state.tickets;

export const selectAllTickets = (state: RootState) =>
  selectTicketsState(state).allTickets;

export const selectFilteredTickets = (state: RootState) =>
  selectTicketsState(state).filteredTickets;
