import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {
  CarItemStyled,
  ImageWrapper,
  TextHolder,
  FavoriteButton,
} from './CarItem.styled';

import { getFavorites } from '../../redux/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/cars/carsSlice';

import { FaRegHeart, FaHeart } from 'react-icons/fa6';

export const CarItem = ({ car }) => {
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
    mileage,
    id,
    description,
  } = car;

  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  //   const isFavorite = favorites.some(item => item.id === car.id);

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
          $isFavorite={isFavorite}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
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
            {/* <li>{addressParts[1]}</li>
            <li>{addressParts[2]}</li> */}
            <li>{rentalCompany}</li>
            {/* <li>{classCar[0]}</li> */}
            <li>{type}</li>
            <li>{model}</li>
            <li>{mileage}</li>
            {/* <li>{functionalities[0]}</li> */}
          </ul>
        </div>
      </TextHolder>

      <button
      //   onClick={handleModalOpen}
      >
        Learn more
      </button>
      {/* <Modal
        isOpenModalProp={isOpenModal}
        handleModalCloseProp={handleModalClose}
        carDataProp={carData}
      /> */}
    </CarItemStyled>
  );
};
