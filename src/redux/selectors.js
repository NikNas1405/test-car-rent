export const selectCars = state => state.cars.adverts;

export const selectIsLoading = state => state.isLoading;

export const selectIsFilter = state => state.cars.isFilter;

export const selectError = state => state.error;

export const selectTotalCarsInArr = state => state.cars.adverts.length;

export const selectFavorites = state => state.cars.favorites;

export const selectFiltersState = state => state.filter;

export const selectFilterForCars = state => selectFiltersState(state).formData;
