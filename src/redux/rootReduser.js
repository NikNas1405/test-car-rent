import { combineReducers } from '@reduxjs/toolkit';
import { persistedCarsReducer } from './cars/carsSlice';

export const rootReducer = combineReducers({
  cars: persistedCarsReducer,
  // filters: filtersReducer,
});
