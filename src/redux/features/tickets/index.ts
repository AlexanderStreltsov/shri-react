import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TMovies } from '@/types/movies';

interface ITicketsState {
  allTickets: TMovies;
  filteredTickets: TMovies;
}

const initialState: ITicketsState = { allTickets: [], filteredTickets: [] };

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setAllTickets: (state, action: PayloadAction<TMovies>) => {
      return { ...state, allTickets: action.payload };
    },
    setFilteredTickets: (state, action: PayloadAction<TMovies>) => {
      return { ...state, filteredTickets: action.payload };
    },
    resetTickets: () => initialState,
  },
});

export const ticketsReducer = ticketsSlice.reducer;
export const ticketsActions = ticketsSlice.actions;
