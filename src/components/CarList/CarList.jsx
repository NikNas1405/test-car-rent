import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button, CarListStyled } from './CarList.styled';

import {
  selectIsLoading,
  selectError,
  selectTotalCarsInArr,
  selectIsFilter,
} from '../../redux/selectors';

import { fetchAllCars, fetchAllCarsForFiltersForm } from '../../utils/getApi';
import { CarItem } from '../CarItem/CarItem';
import { SectionContainer } from '../GlobalStyle';

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
  }, [dispatch]);

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
    <SectionContainer>
      <CarListStyled>
        {adverts.map(advert => {
          const { id } = advert;
          return <CarItem car={advert} key={id ? id : nanoid()} />;
        })}
        {totalCarsInArray > 0 &&
          totalCarsInArray < 32 &&
          !isFilter &&
          !error &&
          !isLoading && <Button onClick={handleLoadMore}>Load more</Button>}
      </CarListStyled>
    </SectionContainer>
  );
};
