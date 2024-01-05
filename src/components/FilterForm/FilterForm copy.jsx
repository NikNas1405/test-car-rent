import { useDispatch, useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../Loader/Loader';
import { DropdownSelect } from './DropdownSelect';
import { Input } from './Input';
import { selectFilterForCars } from '../../redux/selectors';
import { priceOptions } from '../../utils/helpersFunctions';
import { fetchFilteredAllCars } from '../../utils/getApi';
import makesArray from '../../utils/makes.json';

import {
  StyledForm,
  Button,
  carStyles,
  priceStyles,
} from './FilterForm.styled';

import { SectionContainer } from '../GlobalStyle';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFilterForCars);

  const pricesArray = priceOptions.map(item => item.value);

  const applyFilter = e => {
    e.preventDefault();

    const { make } = formData;
    if (make === null) return;

    dispatch(fetchFilteredAllCars(formData));
  };

  return (
    <SectionContainer>
      <StyledForm onSubmit={applyFilter}>
        <DropdownSelect
          title={'Car Brand'}
          placeholder={'Enter the text'}
          options={makesArray}
          filterType={'make'}
          customStyles={carStyles}
        />
        <DropdownSelect
          title={'Price / 1hour'}
          placeholder={'To $'}
          options={pricesArray}
          filterType={'price'}
          customStyles={priceStyles}
        />
        <Input />
        <Button type="submit">Search</Button>
      </StyledForm>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </SectionContainer>
  );
};
