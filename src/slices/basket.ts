import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../index';

const initialState = {};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    amountChange: (state, action) => {
      const { itemId, value } = action.payload;
      // @ts-ignore
      state[itemId] = value;
    },
    reset: (state, action) => {
      const { itemId } = action.payload;
      // @ts-ignore
      state[itemId] = 0;
    },
    resetAll: state => initialState,
  },
});

export const { amountChange, reset, resetAll } = basketSlice.actions;

export const basketSelector = (state: AppDispatch) => state;

export default basketSlice.reducer;
