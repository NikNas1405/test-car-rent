import { useSelector } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  selectIsLoading,
  selectError,
  selectTotalCarsInArr,
  selectIsFilter,
} from '../../redux/selectors';

import { CarItem } from '../CarItem/CarItem';
import { ModalComponent } from '../ModalComponent/ModalComponent';

import { Button, CarListStyled, Wrapper } from './CarList.styled';
import { SectionContainer } from '../GlobalStyle';

export const CarList = ({ adverts, showLoadMoreButton, handleLoadMore }) => {
  const totalCarsInArray = useSelector(selectTotalCarsInArr);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isFilter = useSelector(selectIsFilter);

  const [selectedCar, setSelectedCar] = useState(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(car) {
    setIsOpen(true);
    setSelectedCar(car);
  }

  const handleCloseModal = () => {
    if (modalIsOpen) setIsOpen(false);
    setSelectedCar(null);
  };

  const handleImageError = event => {
    event.target.src =
      'https://media.istockphoto.com/id/1406492902/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D0%B2%D0%BE%D1%81%D0%BA%D0%BE%D0%BC.jpg?s=2048x2048&w=is&k=20&c=Q8L6dzJULqqLgBE270N2mRZAE3glTUbLuV7wS1X02Kw=';
  };

  return (
    <SectionContainer>
      <Wrapper>
        <CarListStyled>
          {adverts.map(advert => (
            <CarItem
              car={advert}
              key={advert.id ? advert.id : nanoid()}
              handleOpenModal={openModal}
              handleImageError={handleImageError}
            />
          ))}
        </CarListStyled>

        {totalCarsInArray > 0 &&
          !isFilter &&
          !error &&
          showLoadMoreButton &&
          !isLoading && <Button onClick={handleLoadMore}>Load more</Button>}
      </Wrapper>

      {selectedCar && (
        <ModalComponent
          car={selectedCar}
          isOpen={modalIsOpen}
          closeModal={handleCloseModal}
          handleImageError={handleImageError}
        />
      )}
    </SectionContainer>
  );
};
