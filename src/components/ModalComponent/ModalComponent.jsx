import { useEffect } from 'react';
import Modal from 'react-modal';

import { formatPriceSelect } from '../../utils/helpersFunctions';
import {
  CloseButton,
  RentalButton,
  ImageHolder,
  TitleHolder,
  MainInfo,
  Description,
  AccessoriesInfo,
  DescribeTitle,
  RentalConditions,
  ModalContent,
} from './ModalComponent.styled';

import closeSvg from '../../utils/images/x.svg';

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

  const uiMileage = mileage.toLocaleString();

  const conditionsArray = rentalConditions.split('\n');
  const firstElementParts = conditionsArray[0].split(':');
  const textPart = firstElementParts[0].trim();
  const numberPart = parseInt(firstElementParts[1].trim(), 10);

  const priseFormat = formatPriceSelect(rentalPrice);

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

  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(18, 20, 23, 0.50)',
      zIndex: 1000,
      overflow: 'auto',
    },

    content: {
      maxWidth: 'fit-content',
      maxHeight: 'fit-content',
      margin: 'auto',
      overflow: 'auto',
      inset: 0,
      border: 'none',
      background: 'none',
      padding: 0,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      onClick={closeModal}
      style={customStyles}
    >
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <img src={closeSvg} alt="car" />
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
            <li key={index}>
              {index === 0 ? (
                <>
                  {textPart}: <span>{numberPart}</span>
                </>
              ) : (
                item
              )}
            </li>
          ))}

          {
            <li>
              Mileage: <span>{uiMileage}</span>
            </li>
          }
          {
            <li>
              Price: <span>{priseFormat}$</span>
            </li>
          }
        </RentalConditions>

        <div>
          <RentalButton href="tel:+380730000000" type="button">
            Rental car
          </RentalButton>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
