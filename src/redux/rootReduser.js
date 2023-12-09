import { combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';
import { favoritesReducer } from './cars/favoriteSlice';

export const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: favoritesReducer,
  // filters: filtersReducer,
});
