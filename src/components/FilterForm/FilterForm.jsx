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
import { priceOptions } from '../../utils/helpersFunctions';
import { fetchFilteredAllCars, fetchAllCars } from '../../utils/getApi';

import { StyledForm, Button } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFilterForCars);
  const allAdverts = useSelector(selectAllAdvertsForFiltration);

  const [optionMakes, setOptionMakes] = useState([]);
  const [optionPrice, setOptionPrice] = useState([]);

  useEffect(() => {
    const makesArray = allAdverts
      .map(el => el.make)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    const pricesArray = priceOptions.map(item => item.value);
    setOptionMakes(makesArray);
    setOptionPrice(pricesArray);
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
      <StyledForm onSubmit={applyFilter}>
        <DropdownSelect
          title={'Car Brand'}
          placeholder={'Enter the text'}
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
        <Button type={'submit'}>Search</Button>
      </StyledForm>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};
