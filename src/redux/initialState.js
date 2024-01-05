export const initialState = {
  cars: {
    isLoading: false,
    isFilter: false,
    error: null,
    adverts: [],
    favorites: [],
    page: 1,
  },
  filter: {
    formData: {
      make: null,
      price: null,
      mileageFrom: 0,
      mileageTo: 0,
    },
    isLoading: false,
    error: null,
  },
};
