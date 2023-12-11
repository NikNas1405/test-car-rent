import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectError,
  selectCars,
} from '../../redux/selectors';

import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { Error } from '../../components/GlobalStyle';
import { FilterForm } from '../../components/FilterForm/FilterForm';
import { useEffect, useRef, useState } from 'react';
import { fetchAllCars, fetchAllCarsForFiltersForm } from '../../utils/getApi';
import { useSearchParams } from 'react-router-dom';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectCars);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    dispatch(fetchAllCarsForFiltersForm());
  }, [dispatch]);

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || page !== 1) {
      dispatch(fetchAllCars(page));
      initialized.current = true;
    }
  }, [dispatch, page, initialized]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      )}

      <FilterForm />
      <CarList
        adverts={adverts}
        showLoadMoreButton={true}
        handleLoadMore={handleLoadMore}
      />
    </>
  );
};
export default CatalogPage;
