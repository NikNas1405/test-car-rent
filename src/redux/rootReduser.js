import { combineReducers } from '@reduxjs/toolkit';

import { persistedCarsReducer } from './cars/carsSlice';
import { filterReducer } from './filters/filtersSlice';

export const rootReducer = combineReducers({
  cars: persistedCarsReducer,
  filter: filterReducer,
});
