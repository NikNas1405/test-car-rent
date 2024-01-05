import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setCarsFilter(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { setCarsFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
