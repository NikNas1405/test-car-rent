import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import {
  selectIsLoading,
  selectError,
  selectCars,
} from '../../redux/selectors';
import { clearCars } from '../../redux/cars/carsSlice';

import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { Error } from '../../components/GlobalStyle';
import { FilterForm } from '../../components/FilterForm/FilterForm';

import { fetchAllCars } from '../../utils/getApi';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectCars);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const initialized = useRef(false);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchAllCars(page));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (!initialized.current || page !== 1) {
      fetchData();
      initialized.current = true;
    }

    if (page === 1) {
      dispatch(clearCars());
    }
  }, [dispatch, page, initialized, location.pathname]);

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
