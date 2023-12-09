import { useSelector } from 'react-redux';

import Dropdown from '../../components/Dropdown/Dropdown';
import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { Error } from '../../components/GlobalStyle';

import { getIsLoading, getError } from '../../redux/selectors';

const CatalogPage = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <main>
      {isLoading && <Loader />}
      {error && (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      )}
      <Dropdown />
      <CarList />
    </main>
  );
};

export default CatalogPage;
