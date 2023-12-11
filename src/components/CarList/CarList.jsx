import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import { Button, CarListStyled, Wrapper } from './CarList.styled';

import {
  selectIsLoading,
  selectError,
  selectTotalCarsInArr,
  selectIsFilter,
} from '../../redux/selectors';

import { CarItem } from '../CarItem/CarItem';
import { SectionContainer } from '../GlobalStyle';

export const CarList = ({ adverts, showLoadMoreButton, handleLoadMore }) => {
  const totalCarsInArray = useSelector(selectTotalCarsInArr);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isFilter = useSelector(selectIsFilter);

  return (
    <SectionContainer>
      <Wrapper>
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
          showLoadMoreButton &&
          !isLoading && <Button onClick={handleLoadMore}>Load more</Button>}
      </Wrapper>
    </SectionContainer>
  );
};
