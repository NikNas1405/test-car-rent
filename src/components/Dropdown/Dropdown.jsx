// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setBrandFilter,
//   setHourlyRateFilter,
//   setMileageFilter,
// } from './actions';

const Dropdown = ({ carBrands, hourlyRates }) => {
  //   const dispatch = useDispatch();
  //   const { brandFilter, hourlyRateFilter, minMileageFilter, maxMileageFilter } =
  //     useSelector(state => state.carFilters);

  //   const handleBrandChange = event => {
  //     dispatch(setBrandFilter(event.target.value));
  //   };

  //   const handleHourlyRateChange = event => {
  //     dispatch(setHourlyRateFilter(event.target.value));
  //   };

  //   const handleMinMileageChange = event => {
  //     dispatch(setMileageFilter(event.target.value, maxMileageFilter));
  //   };

  //   const handleMaxMileageChange = event => {
  //     dispatch(setMileageFilter(minMileageFilter, event.target.value));
  //   };

  return (
    <div>
      <label htmlFor="carBrand">
        Car Brand
        <select
          id="carBrand"
          //   value={brandFilter} onChange={handleBrandChange}
        >
          <option value="" disabled>
            Select brand
          </option>
          {/* {carBrands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))} */}
        </select>
      </label>

      <label htmlFor="hourlyRate">
        Price / 1 hour
        <select
          id="hourlyRate"
          // value={hourlyRateFilter}
          // onChange={handleHourlyRateChange}
        >
          <option value="" disabled>
            Select hourly rate
          </option>
          {/* {hourlyRates.map(rate => (
          <option key={rate} value={rate}>
            ${rate} per hour
          </option>
        ))} */}
        </select>
      </label>
      <label htmlFor="mileage">
        Сar mileage / km
        <input
          type="number"
          id="mileage"
          // value={minMileageFilter}
          // onChange={handleMinMileageChange}
        />
        <input
          type="number"
          id="mileage"
          // value={maxMileageFilter}
          // onChange={handleMaxMileageChange}
        />
      </label>
    </div>
  );
};

export default Dropdown;
