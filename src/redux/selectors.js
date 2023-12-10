export const selectCars = state => state.cars.adverts;

export const selectIsLoading = state => state.cars.isLoading;
export const selectIsFilter = state => state.cars.isFilter;

export const selectError = state => state.cars.error;

export const selectTotalCarsInArr = state => state.cars.adverts.length;

export const selectFavorites = state => state.cars.favorites;

export const selectFiltersState = state => state.filter;

export const selectAllAdvertsForFiltration = state =>
  selectFiltersState(state).allAdvertsForFiltration;

export const selectFilterForCars = state => selectFiltersState(state).formData;
