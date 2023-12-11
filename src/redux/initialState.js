export const initialState = {
  cars: {
    isLoading: false,
    isFilter: false,
    error: null,
    adverts: [],
    favorites: [],
  },
  filter: {
    formData: {
      make: null,
      price: null,
      mileageFrom: 0,
      mileageTo: 0,
    },
    allAdvertsForFiltration: [],
    isLoading: false,
    error: null,
  },
};
