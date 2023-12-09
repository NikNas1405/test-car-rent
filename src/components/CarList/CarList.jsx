import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import { CarListStyled } from './CarList.styled';

import {
  getCars,
  getIsLoading,
  getError,
  getTotalCarsInArr,
} from '../../redux/selectors';

import { fetchAllCars } from '../../utils/getApi';
import { useSearchParams } from 'react-router-dom';
import { CarItem } from '../CarItem/CarItem';

export const CarList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const adverts = useSelector(getCars);
  const totalCarsInArray = useSelector(getTotalCarsInArr);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current || page !== 1) {
      dispatch(fetchAllCars(page));
      initialized.current = true;
    }
  }, [dispatch, page, setSearchParams]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setSearchParams({ page: page + 1 });
  };

  return (
    <>
      <CarListStyled>
        {adverts.map(advert => {
          return <CarItem car={advert} key={advert.id} />;
        })}
      </CarListStyled>

      {totalCarsInArray > 0 &&
        totalCarsInArray < 32 &&
        !error &&
        !isLoading && <button onClick={handleLoadMore}>Load more</button>}
    </>
  );
};
