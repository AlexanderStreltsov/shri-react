import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ICartState {
  [key: string]: number;
}

const initialState: ICartState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const count = state[payload] || 0;
      state[payload] = count + 1;
    },
    decrement: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    delete: (state, action: PayloadAction<string>) => {
      const { payload } = action;

      if (!state[payload]) {
        return;
      }

      delete state[payload];
    },
    reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
