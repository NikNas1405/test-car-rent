import { useSelector } from 'react-redux';

import {
  selectIsLoading,
  selectError,
  selectCars,
} from '../../redux/selectors';

import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { Error } from '../../components/GlobalStyle';
import { FilterForm } from '../../components/FilterForm/FilterForm';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const adverts = useSelector(selectCars);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      )}

      <FilterForm />
      <CarList adverts={adverts} />
    </>
  );
};
export default CatalogPage;
