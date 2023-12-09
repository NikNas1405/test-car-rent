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

// export const fetchFilteredAllCars = createAsyncThunk(
//   'cars/filteredCars',
//   async ({ make, price }, thunkAPI) => {
//     const filter =
//       (make !== null && make) || (price !== null && '$' + String(price));

//     try {
//       const url = new URL('https://65721f49d61ba6fcc0146a07.mockapi.io/cars');
//       url.searchParams.append('filter', filter);
//       url.searchParams.append('limit', 12);

//       const response = await axios.get(url);

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
