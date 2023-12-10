import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { fetchAllCarsForFiltersForm } from '../../utils/getApi';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    carsFilter(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCarsForFiltersForm.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCarsForFiltersForm.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allAdvertsForFiltration = action.payload;
      })
      .addCase(fetchAllCarsForFiltersForm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { carsFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
