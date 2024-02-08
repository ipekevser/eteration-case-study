import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { FetchContentArgs, FetchDetailContentArgs, ListState, Product } from './interface';
import { filterByIDFunc, filterFunc, sortItems } from '@/helpers/utils';

export const fetchContent = createAsyncThunk('content/fetchContent', async (page: FetchContentArgs) => {
  const res = await axios.get<Product[]>('https://5fc9346b2af77700165ae514.mockapi.io/products');
  return res.data;
});

export const fetchDetailContent = createAsyncThunk('content/fetchDetailContent', async (id: FetchDetailContentArgs) => {
  const res = await axios.get<Product[]>('https://5fc9346b2af77700165ae514.mockapi.io/products');
  return res.data;
});

const listSlice = createSlice({
  name: 'list',
  initialState: {
    items: [],
    brands: [],
    models: [],
    totalCount: 0,
    selectedProduct: null,
    isLoading: true,
    error: null,
    page: 1,
  } as ListState,

  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.isLoading = false;

        const response = action.payload;

        const page = action.meta.arg.page;

        const searchParam = action.meta.arg.searchParam;
        const selectedBrands = action.meta.arg.selectedBrands;
        const selectedModels = action.meta.arg.selectedModels;
        const selectedSortParam = action.meta.arg.selectedSortParam;

        const filteredResponse = filterFunc(response, searchParam.trim(), selectedBrands, selectedModels);
        const sortedResponse = sortItems(filteredResponse, selectedSortParam);
        const _items = sortedResponse.slice((page - 1) * 12, page * 12);
        state.items = _items;
        state.totalCount = filteredResponse.length;
        state.brands = Array.from(new Set(action.payload.map((item: Product) => item.brand)));
        state.models = Array.from(new Set(action.payload.map((item: Product) => item.model)));
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      })
      .addCase(fetchDetailContent.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDetailContent.fulfilled, (state, action) => {
        state.isLoading = false;

        const response = action.payload;
        const id = action.meta.arg.id;

        const filteredResponseByID = filterByIDFunc(id, response);

        state.selectedProduct = filteredResponseByID;
      })
      .addCase(fetchDetailContent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message as string;
      });
  },
});

export const listActions = listSlice.actions;

export const listReducer = listSlice.reducer;
