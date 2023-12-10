import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  CarItemStyled,
  ImageWrapper,
  TextHolder,
  FavoriteButton,
  StyledFaRegHeart,
  StyledFaHeart,
} from './CarItem.styled';

import { selectFavorites } from '../../redux/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/cars/carsSlice';

import ModalComponent from '../Modal/Modal';

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    make,
    year,
    model,
    type,
    img,
    functionalities,
    rentalCompany,
    address,
    rentalPrice,
    id,
    description,
  } = car;

  const addressParts = address?.split(', ');
  const classCar = rentalCompany?.split(' ');

  useEffect(() => {
    if (favorites !== null) {
      const carIsInFavList = favorites.some(advert => advert.id === id);

      setIsFavorite(carIsInFavList);
    }
  }, [favorites, id]);

  const handleToggleFavorite = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(car));
      setIsFavorite(true);
    } else {
      dispatch(removeFromFavorites(id));
      setIsFavorite(false);
    }
  };

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal() {
    if (modalIsOpen) setIsOpen(false);
  }

  return (
    <CarItemStyled>
      <ImageWrapper>
        <img
          src={
            img
              ? img
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWggGWNvpgV9vuCU59n0yoAuZtQTxKGSXH2w&usqp=CAU'
          }
          alt={description}
          loading="lazy"
        />
        <FavoriteButton
          type="button"
          onClick={handleToggleFavorite}
          className="cursor-pointer"
        >
          {isFavorite ? <StyledFaHeart /> : <StyledFaRegHeart />}
        </FavoriteButton>
      </ImageWrapper>
      <TextHolder>
        <div>
          <p>
            <span>{make}</span>
            <span>{model}</span>
            <span> {year}</span>
          </p>
          <p>{rentalPrice}</p>
        </div>

        <div>
          <ul>
            <li>{addressParts[1]}</li>
            <li>{addressParts[2]}</li>
            <li>{rentalCompany}</li>
            <li>{classCar[0]}</li>
            <li>{type}</li>
            <li>{model}</li>
            <li>{id}</li>
            <li>{functionalities[0]}</li>
          </ul>
        </div>
      </TextHolder>
      <button onClick={openModal}>Learn more</button>

      <ModalComponent car={car} isOpen={modalIsOpen} closeModal={closeModal} />
    </CarItemStyled>
  );
};
