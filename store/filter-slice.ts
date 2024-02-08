import { createSlice } from '@reduxjs/toolkit';
import { FilterState } from './interface';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterParams: {
      selectedBrands: [],
      selectedModels: [],
      selectedSortParam: '',
      searchParam: '',
    },
  } as FilterState,
  reducers: {
    updateFilterParams(state, action) {
      state.filterParams = action.payload;
    },
  },
});

export const filterActions = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
