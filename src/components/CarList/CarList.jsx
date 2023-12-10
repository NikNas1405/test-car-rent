import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { CarListStyled } from './CarList.styled';

import {
  selectIsLoading,
  selectError,
  selectTotalCarsInArr,
  selectIsFilter,
} from '../../redux/selectors';

import { fetchAllCars, fetchAllCarsForFiltersForm } from '../../utils/getApi';
import { CarItem } from '../CarItem/CarItem';

export const CarList = ({ adverts }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const totalCarsInArray = useSelector(selectTotalCarsInArr);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isFilter = useSelector(selectIsFilter);

  const initialized = useRef(false);

  useEffect(() => {
    dispatch(fetchAllCarsForFiltersForm());
  }, []);

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
        !isFilter &&
        !error &&
        !isLoading && <button onClick={handleLoadMore}>Load more</button>}
    </>
  );
};
