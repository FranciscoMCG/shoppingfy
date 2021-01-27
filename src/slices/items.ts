import { createSlice } from '@reduxjs/toolkit';

import { RootState } from './';
import { AppDispatch } from '../';

interface Category {
  category: string;
}

export interface Item {
  name: string;
  SKU: number;
  price: number;
  currency: string;
  metadata: Category;
}

interface SliceState {
  items?: Item[];
  loading: boolean;
  hasErrors: boolean;
}

const initialState: SliceState = {
  loading: false,
  hasErrors: false,
  items: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItems: state => {
      state.loading = true;
    },
    getItemsSuccess: (state, { payload }) => {
      state.items = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getItemsFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getItems,
  getItemsSuccess,
  getItemsFailure,
} = itemsSlice.actions;

export const itemsSelector = (state: RootState) => state.items;

export const fetchItems = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(getItems());

    try {
      const response = await fetch('data.json');
      const data = await response.json();

      dispatch(getItemsSuccess(data));
    } catch (error) {
      dispatch(getItemsFailure());
    }
  };
};

export default itemsSlice.reducer;
