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

  state.currentPage = action.payload;
  // state.adverts = action.payload;
  state.adverts.push(...action.payload);
  // state.adverts = [
  //   ...state.adverts,
  //   ...action.payload.map(advert => ({ ...advert })),
  // ];

  // state.adverts = [...state.adverts, ...action.payload];
};

const carsSlice = createSlice({
  name: 'adverts',
  initialState: initialState.cars,
  reducers: {
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        car => car.id !== action.payload
      );
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAllCars.pending, handlePending)
      .addCase(fetchAllCars.fulfilled, handleFetchCarsFulfilled)
      .addCase(fetchAllCars.rejected, handleRejected),
});

export const { addToFavorites, removeFromFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
