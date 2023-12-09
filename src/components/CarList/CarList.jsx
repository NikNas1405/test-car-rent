import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { CarListStyled } from './CarList.styled';

import {
  getCars,
  getIsLoading,
  getError,
  getTotalCarsInArr,
  getCurrentPage,
} from '../../redux/selectors';

import { fetchAllCars } from '../../utils/getApi';
import { useSearchParams } from 'react-router-dom';
import { CarItem } from '../CarItem/CarItem';
import { nanoid } from '@reduxjs/toolkit';

export const CarList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  const currentPage = useSelector(getCurrentPage);

  const adverts = useSelector(getCars);
  const totalCarsInArray = useSelector(getTotalCarsInArr);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current || currentPage !== 1) {
      // Якщо ще не було запиту на бекенд для цієї сторінки

      dispatch(fetchAllCars(currentPage));
      initialized.current = true;
    }
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    if (currentPage < 3) {
      dispatch(setPage(currentPage + 1));
    }
  };

  return (
    <>
      <CarListStyled>
        {adverts.map(advert => {
          const { id } = advert;
          return <CarItem car={advert} key={id ? id : nanoid()} />;
        })}
      </CarListStyled>

      {totalCarsInArray > 0 &&
        totalCarsInArray < 32 &&
        !error &&
        !isLoading && <button onClick={handleLoadMore}>Load more</button>}
    </>
  );
};
