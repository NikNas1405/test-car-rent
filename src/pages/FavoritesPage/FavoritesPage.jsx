import { useSelector } from 'react-redux';

import Dropdown from '../../components/Dropdown/Dropdown';
import Loader from '../../components/Loader/Loader';
import { CarList } from '../../components/CarList/CarList';
import { Error } from '../../components/GlobalStyle';
import { getIsLoading, getError, getFavorites } from '../../redux/selectors';

const FavoritesPage = () => {
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
      {!favorites && (
        <div>
          It appears that you haven't added any adverts to your favorites yet.
          To get started, you can add adverts that you like to your favorites
          for easier access in the future. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Molestiae officia deleniti tempore
          libero illo architecto nihil ab earum ut eligendi commodi eum corporis
          voluptates doloribus labore cum vero culpa laborum, dolore, enim sed.
          Iure, nemo at blanditiis assumenda ad rem eum qui delectus doloribus,
          suscipit ipsum consequuntur dolorum quaerat porro, est veniam animi
          quam rerum beatae minima nobis ullam. Tempora consequuntur nihil quam!
          Aspernatur maxime facilis, dolorem aperiam sequi nihil tenetur
          similique veritatis dolore quidem odit, voluptatem iure adipisci
          delectus ab vero excepturi, quia magni nobis id a possimus fugit saepe
          laudantium. Porro consequuntur exercitationem similique ea praesentium
          hic omnis.
        </div>
      )}
      <Dropdown />
      <CarList adverts={favorites} />
    </main>
  );
};

export default FavoritesPage;
