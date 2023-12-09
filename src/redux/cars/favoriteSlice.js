import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';

const favoriteSlice = createSlice({
  name: 'favorites',
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
});

export const favoritesReducer = favoriteSlice.reducer;

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
