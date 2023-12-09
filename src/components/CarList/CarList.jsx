import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CarListStyled } from './CarList.styled';

import {
  // getCars,
  getIsLoading,
  getError,
  getTotalCarsInArr,
} from '../../redux/selectors';

import { fetchAllCars } from '../../utils/getApi';
import { CarItem } from '../CarItem/CarItem';
import { nanoid } from '@reduxjs/toolkit';

export const CarList = ({ adverts }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  // const adverts = useSelector(getCars);
  const totalCarsInArray = useSelector(getTotalCarsInArr);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current || page !== 1) {
      dispatch(fetchAllCars(page));
      initialized.current = true;
    }
  }, [dispatch, page, initialized]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
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
