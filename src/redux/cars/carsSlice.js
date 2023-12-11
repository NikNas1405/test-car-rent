import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { initialState } from '../initialState';
import { fetchAllCars, fetchFilteredAllCars } from '../../utils/getApi';

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
  state.isFilter = false;
  state.adverts.push(...action.payload);
};

const handleFetchFilteredCarsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.isFilter = true;
  state.adverts = action.payload;
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
      .addCase(fetchAllCars.rejected, handleRejected)
      .addCase(fetchFilteredAllCars.pending, handlePending)
      .addCase(fetchFilteredAllCars.fulfilled, handleFetchFilteredCarsFulfilled)
      .addCase(fetchFilteredAllCars.rejected, handleRejected),
});

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorites'],
};

export const carsReducer = carsSlice.reducer;

export const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const { addToFavorites, removeFromFavorites, clearCarsData } =
  carsSlice.actions;
