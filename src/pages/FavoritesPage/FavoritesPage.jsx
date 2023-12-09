import { useSelector } from 'react-redux';

import Dropdown from '../../components/Dropdown/Dropdown';
import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { Error } from '../../components/GlobalStyle';
import { getIsLoading, getError, getFavorites } from '../../redux/selectors';

const FavoritesPage = () => {
  //

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const favorites = useSelector(getFavorites);
  return (
    <main>
      {isLoading && <Loader />}
      {error && (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      )}
      <Dropdown />
      <CarList adverts={favorites} />
    </main>
  );
};

export default FavoritesPage;
