import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

import { formatNumber } from '../../utils/helpersFunctions';
import {
  CloseButton,
  ModalOverlay,
  ModalContent,
  RentalButton,
  ImageHolder,
  TitleHolder,
  MainInfo,
  Description,
  AccessoriesInfo,
  DescribeTitle,
  RentalConditions,
} from './ModalComponent.styled';

Modal.setAppElement('#root');

export const ModalComponent = ({
  car,
  isOpen,
  closeModal,
  handleImageError,
}) => {
  const {
    make,
    year,
    model,
    type,
    img,
    address,
    rentalPrice,
    mileage,
    id,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    rentalConditions,
    functionalities,
  } = car;

  const addressParts = address?.split(', ');
  const uiMileage = formatNumber(mileage);
  const conditionsArray = rentalConditions.split('\n');

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }

    return () => {
      body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <ModalOverlay
      isOpen={isOpen}
      onRequestClose={closeModal}
      onClick={closeModal}
      shouldCloseOnOverlayClick={true}
    >
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <FaTimes />
        </CloseButton>
        <ImageHolder>
          <img
            src={img}
            alt={'car'}
            loading="lazy"
            onError={handleImageError}
          />
        </ImageHolder>
        <TitleHolder>
          <span>{make} </span>
          <span>{model}, </span>
          <span>{year}</span>
        </TitleHolder>

        <MainInfo>
          <li>{addressParts[1]}</li>
          <li>{addressParts[2]}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size{engineSize}</li>
        </MainInfo>

        <Description>{description}</Description>

        <DescribeTitle>Accessories and functionalities: </DescribeTitle>
        <AccessoriesInfo>
          {accessories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {functionalities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </AccessoriesInfo>

        <DescribeTitle>Rental Conditions: </DescribeTitle>
        <RentalConditions>
          {conditionsArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {<li>Mileage: {uiMileage}</li>}
          {<li>Price: {rentalPrice}</li>}
        </RentalConditions>

        <div>
          <RentalButton href="tel:+380730000000" type="button">
            Rental car
          </RentalButton>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalComponent;
