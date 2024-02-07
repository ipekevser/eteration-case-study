import { getLocalStorageData, setLocalStorageData } from '@/helpers/utils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, ICartItem } from './interface';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [],
  } as CartState,

  reducers: {
    updateCartData(state, action: PayloadAction<ICartItem>) {
      const newItem = action.payload;
      const _cartData = [...state.cartData];

      const existingItemIndex = _cartData.findIndex((item: ICartItem) => item.id === newItem.id);

      if (existingItemIndex !== -1) {
        _cartData[existingItemIndex].count += 1;
      } else {
        _cartData.push(newItem);
      }
      state.cartData = _cartData;
      setLocalStorageData(_cartData);
    },
    getCartData(state) {
      const localCart: ICartItem[] | null = getLocalStorageData<ICartItem[]>('cartData');
      if (localCart) {
        state.cartData = localCart;
      }
    },
    increaseItemCount(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const item = state.cartData.find((item) => item.id === itemId);
      if (item) {
        item.count++;
      }
      setLocalStorageData(state.cartData);
    },
    decreaseItemCount(state, action: PayloadAction<string>) {
      const itemId = action.payload;
      const itemIndex = state.cartData.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        if (state.cartData[itemIndex].count > 1) {
          state.cartData[itemIndex].count--;
        } else {
          state.cartData.splice(itemIndex, 1);
        }
      }
      setLocalStorageData(state.cartData);
    },
  },
});

export const cartActions = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
