import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './';

interface SliceState {
  isTouched: boolean;
  basket: {
    [key: string]: any;
    qty?: number;
    total?: 0;
  };
}

const initialState: SliceState = {
  isTouched: false,
  basket: {},
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    qtyChange: (state, action) => {
      const { itemId, value, price } = action.payload;
      state.isTouched = true;
      state.basket[itemId] = {
        total: value * price,
        qty: value,
      };
    },
    reset: (state, action) => {
      const { itemId } = action.payload;
      state.isTouched = true;
      state.basket[itemId] = {
        total: 0,
        qty: 0,
      };
    },
    resetAll: state => {
      state.isTouched = true;
      state.basket = {};
    },
  },
});

export const { qtyChange, reset, resetAll } = basketSlice.actions;

export const basketSelector = (state: RootState) => state.basket;

export default basketSlice.reducer;
