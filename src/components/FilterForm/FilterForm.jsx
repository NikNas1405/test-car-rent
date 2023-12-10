import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { DropdownSelect } from './DropdownSelect';
import { InputFromTo } from './InputFromTo';

import {
  selectAllAdvertsForFiltration,
  selectFilterForCars,
} from '../../redux/selectors';

import { fetchFilteredAllCars, fetchAllCars } from '../../utils/getApi';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFilterForCars);
  const allAdverts = useSelector(selectAllAdvertsForFiltration);

  const [optionMakes, setOptionMakes] = useState([]);
  const [optionPrice, setOptionPrice] = useState([]);

  useEffect(() => {
    const makesArray = allAdverts.map(el => el.make);
    const pricesArray = allAdverts.map(el => el.rentalPrice);
    const numericArray = pricesArray.map(str => parseInt(str.slice(1), 10));
    setOptionMakes(makesArray);
    setOptionPrice(numericArray);
  }, [allAdverts]);

  const applyFilter = e => {
    e.preventDefault();
    const { make, price } = formData;
    if (make === null && price === null) {
      dispatch(fetchAllCars());
    }

    dispatch(fetchFilteredAllCars(formData));
  };

  return (
    <section>
      <form onSubmit={applyFilter}>
        <DropdownSelect
          title={'Car Brand'}
          placeholder={'Select a model'}
          options={optionMakes}
          filterType={'make'}
        />

        <DropdownSelect
          title={'Price / 1hour'}
          placeholder={'To $'}
          options={optionPrice}
          filterType={'price'}
        />
        <InputFromTo />

        <div>
          <button title={'Search'} type={'submit'} />
        </div>
      </form>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};
