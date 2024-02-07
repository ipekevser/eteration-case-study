'use client';

import { configureStore } from '@reduxjs/toolkit';

import { listReducer } from './list-slice';
import { filterReducer } from './filter-slice';
import { cartReducer } from './cart-slice';

export const makeStore = () => {
  return configureStore({
    reducer: { list: listReducer, filter: filterReducer, cart: cartReducer},
  });
};
