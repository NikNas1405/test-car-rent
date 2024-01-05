import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://650b3186dfd73d1fab09c0ad.mockapi.io';

const defaultParams = {
  limit: 12,
};

export const fetchAllCars = createAsyncThunk(
  'advert/fetchAllCars',
  async (page, thunkAPI) => {
    const options = new URLSearchParams({
      page,
      ...defaultParams,
    });
    try {
      const response = await axios.get(`${BASE_URL}/advert/?${options}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFilteredAllCars = createAsyncThunk(
  'advert/fetchFilteredAllCars',
  async ({ make }, thunkAPI) => {
    const filters = {};

    if (make !== null && make) {
      filters.make = make;
    }

    const options = new URLSearchParams({
      ...filters,
      ...defaultParams,
    });

    try {
      const response = await axios.get(`${BASE_URL}/advert/?${options}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
