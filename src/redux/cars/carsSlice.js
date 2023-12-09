import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';
import { fetchAllCars } from '../../utils/getApi';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.adverts = [...state.adverts, ...action.payload];
};

const carsSlice = createSlice({
  name: 'adverts',
  initialState: initialState.cars,

  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchAllCars.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
