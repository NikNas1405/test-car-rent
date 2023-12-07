// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://650b3186dfd73d1fab09c0ad.mockapi.io/';

// const defaultParams = {
//   per_page: 12,
// };

// // список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
// export async function getAllCars(page) {
//   const options = new URLSearchParams({
//     ...defaultParams,
//     page: page,
//   });
//   try {
//     const response = await axios.get(
//       `${BASE_URL}/trending/movie/day?${options}`
//     );
//     // console.log(response.data.results);
//     // console.log(response.data.total_pages);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // export const fetchContacts = createAsyncThunk(
// //   'adverts/fetchAll',
// //   async (_, thunkAPI) => {
// //     try {
// //       const response = await axios.get('/adverts');
// //       return response.data;
// //     } catch (error) {
// //       toast.error(`${error.response.data.message}`);
// //       return thunkAPI.rejectWithValue(error.message);
// //     }
// //   }
// // );

// // //пошук фільму за ключовим словом на сторінці фільмів
// // export async function getFilmsByQuery(query, page) {
// //   const options = new URLSearchParams({
// //     ...defaultParams,
// //     query: query,
// //     page: page,
// //   });
// //   try {
// //     const response = await axios.get(`${BASE_URL}/search/movie?${options}`);
// //     return response.data;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }
