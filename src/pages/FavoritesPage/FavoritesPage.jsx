import { useSelector } from 'react-redux';

import { FilterForm } from '../../components/FilterForm/FilterForm';
import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { Error } from '../../components/GlobalStyle';
import {
  selectIsLoading,
  selectError,
  selectFavorites,
} from '../../redux/selectors';
import car from '../../utils/images/89105.jpg';

import { Nothing } from './FavoritesPage.styled';
import { ButtonLink } from '../HomePage/HomePage.styled';

const FavoritesPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favorites = useSelector(selectFavorites);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Error>
          Sorry. Something went wrong. Please reload the page to try again.
        </Error>
      )}

      {favorites.length > 0 ? (
        <>
          <FilterForm />
          <CarList adverts={favorites} />
        </>
      ) : (
        <Nothing>
          <p>
            It appears that you haven't added any adverts to your favorites yet.
            To get started, you can add adverts that you like to your favorites
            for easier access in the future.
          </p>
          <div>
            <img src={car} alt="car" />
          </div>
          <ButtonLink to="/catalog">Choose a car</ButtonLink>
        </Nothing>
      )}
    </>
  );
};

export default FavoritesPage;
