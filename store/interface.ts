import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { makeStore } from './store';

export interface Product {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
}

export interface ListState {
  items: Product[];
  brands: string[];
  models: string[];
  totalCount: number;
  selectedProduct: Product | null;
  isLoading: boolean;
  error: string | null;
  page: number;
}

export interface FilterState {
  filterParams: FilterParams;
}

interface FilterParams {
  selectedBrands: string[];
  selectedModels: string[];
  selectedSortParam: string;
  searchParam: string;
}

export interface FetchContentArgs {
  page: number;
  selectedBrands: string[];
  selectedModels: string[];
  selectedSortParam: string;
  searchParam: string;
}

export interface FetchDetailContentArgs {
  id: string;
}

export interface ICartItem {
  id: string;
  name: string;
  price: string;
  count: number;
}

export interface CartState {
  cartData: ICartItem[];
}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
