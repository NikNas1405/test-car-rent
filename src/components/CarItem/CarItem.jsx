import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { selectFavorites } from '../../redux/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/cars/carsSlice';

import {
  CarItemStyled,
  ImageWrapper,
  TextHolder,
  FavoriteButton,
  StyledFaRegHeart,
  StyledFaHeart,
  TitleHolder,
  Title,
  MainInfo,
  Button,
} from './CarItem.styled';

export const CarItem = ({ car, handleImageError, handleOpenModal }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);

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

  return (
    <CarItemStyled>
      <ImageWrapper>
        <img
          src={img}
          alt={description}
          loading="lazy"
          onError={handleImageError}
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
        <Title>
          <TitleHolder>
            <span>{make} </span>
            <span>{model}, </span>
            <span>{year}</span>
          </TitleHolder>
          <p>{rentalPrice}</p>
        </Title>

        <MainInfo>
          <li>{addressParts[1]}</li>
          <li>{addressParts[2]}</li>
          <li>{rentalCompany}</li>
          <li>{classCar[0]}</li>
          <li>{type}</li>
          <li>{model}</li>
          <li>{id}</li>
          <li>{functionalities[0]}</li>
        </MainInfo>
      </TextHolder>
      <Button onClick={() => handleOpenModal(car)}>Learn more</Button>
    </CarItemStyled>
  );
};
