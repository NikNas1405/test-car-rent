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
      page: page,
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

// export const fetchAllCars = createAsyncThunk(
//   'advert/fetchAllCars',
//   async (page, thunkAPI) => {
//     try {
//       const url = new URL(`${BASE_URL}/advert/`);
//       url.searchParams.append('page', page);
//       url.searchParams.append('limit', 12);

//       const response = await axios.get(url, page);

//       return response.data;
//     } catch (error) {
//       console.log(error);

//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const fetchAllCarsForFiltersForm = createAsyncThunk(
  'advert/fetchAllCarsForFiltersForm',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/advert/`);
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

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = 'https://650b3186dfd73d1fab09c0ad.mockapi.io';

// const defaultParams = {
//   limit: 12,
// };

// // Функція для перетворення об'єкта параметрів у рядок URL
// const buildQueryString = params =>
//   Object.keys(params)
//     .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
//     .join('&');

// export const fetchAllCars = createAsyncThunk(
//   'advert/fetchAllCars',
//   async (page, thunkAPI) => {
//     const options = {
//       page: page,
//       ...defaultParams,
//     };
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/advert/?${buildQueryString(options)}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchAllCarsForFiltersForm = createAsyncThunk(
//   'advert/fetchAllCarsForFiltersForm',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get(`${BASE_URL}/advert/`);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchFilteredAllCars = createAsyncThunk(
//   'advert/fetchFilteredAllCars',
//   async ({ make }, thunkAPI) => {
//     const filters = {};

//     if (make !== null && make) {
//       filters.make = make;
//     }

//     const options = {
//       ...filters,
//       ...defaultParams,
//     };

//     try {
//       const response = await axios.get(
//         `${BASE_URL}/advert/?${buildQueryString(options)}`
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
