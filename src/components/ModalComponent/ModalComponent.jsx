import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

import { formatNumber, formatPriceSelect } from '../../utils/helpersFunctions';
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
  // ModalOverlay,
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
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      borderRadius: '24px',
      marginRight: '-20%',
      transform: 'translate(-50%, -50%)',
      padding: '40px 37px',
      width: 541,
      height: 'auto',
      zIndex: 1001,
      overflow: 'auto',
    },
  };

  return (
    // <ModalOverlay>
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      onClick={closeModal}
      style={customStyles}
    >
      <CloseButton onClick={closeModal}>
        <FaTimes />
      </CloseButton>
      <ImageHolder>
        <img src={img} alt={'car'} loading="lazy" onError={handleImageError} />
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
    </Modal>
    // </ModalOverlay>
  );
};

export default ModalComponent;

// import Modal from 'react-modal';
// import styled from './CarModal.module.css';
// import { IoMdClose } from 'react-icons/io';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     borderRadius: '24px',
//     marginRight: '-20%',
//     transform: 'translate(-50%, -50%)',
//     padding: '40px 37px',
//   },
// };

// Modal.setAppElement('#root');

// const CarModal = ({
//   isOpen,
//   closeModal,
//   car,
//   handleImageError,
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={closeModal}
//       style={customStyles}
//       contentLabel="onRequestClose Example"
//     >
//       <>
//         <div className={styled.containerCarModalWrapper}>
//           <div className={styled.modalWrapper}>
//             <button
//               className={styled.closeButton}
//               type="button"
//               onClick={closeModal}
//             >
//               <IoMdClose className={styled.closeIcon} />
//             </button>
//             <div>
//               <div key={car.id}>
//                 <div className={styled.carModalImageWrapper}>
//                   <img
//                     onError={handleImageError}
//                     className={styled.imageCar}
//                     src={car.img}
//                     alt={`${car.make} ${car.model}`}
//                   />
//                 </div>
//                 <h2 className={styled.carsModalTitle}>
//                   {car.make}
//                   <span className={styled.carsTitleSecond}>
//                     {car.model}
//                   </span>
//                   ,{car.year}
//                 </h2>
//                 <ul className={styled.firstItemsWrapper}>
//                   <li className={styled.firstItems}>
//                     {car.address}
//                   </li>
//                   <span className={styled.firstItems}>|</span>
//                   <li className={styled.firstItems}>
//                     Id: {car.id}{' '}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Year: {car.year}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Type: {car.type}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Fuel consumption: {car.fuelConsumption}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Engine size: {car.engineSize}
//                   </li>
//                 </ul>
//                 <h4 className={styled.titleDescriptionOne}>
//                   {car.description}
//                 </h4>
//                 <h4 className={styled.titleDescription}>
//                   Accessories and functionalities:
//                 </h4>
//                 <ul>
//                   <li className={styled.firstItems}>
//                     {car.accessories}
//                   </li>
//                   <li className={styled.firstItems}>
//                     {car.functionalities}
//                   </li>
//                 </ul>
//                 <div className={styled.rentalConditionsWrapper}>
//                   <h4 className={styled.titleDescription}>
//                     Rental Conditions:
//                   </h4>
//                   <ul className={styled.rentalConditionsItemsWrapper}>
//                     <li className={styled.rentalItem}>
//                       Minimum age:{' '}
//                       <span className={styled.rentalItemSecond}>25</span>
//                     </li>
//                     <li className={styled.rentalItem}>
//                       Valid driver’s license
//                     </li>
//                     <li className={styled.rentalItem}>
//                       Security deposite require
//                     </li>
//                   </ul>
//                   <ul className={styled.rentalItems}>
//                     <li className={styled.rentalItem}>
//                       Mileage:{' '}
//                       <span className={styled.rentalItemSecond}>5,858</span>
//                     </li>
//                     <li className={styled.rentalItem}>
//                       Price:{' '}
//                       <span className={styled.rentalItemSecond}>
//                         {car.rentalPrice}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <a className={styled.buttonRend} href="tel:+380730000000">
//                 Rent car
//               </a>
//             </div>
//           </div>
//         </div>
//       </>
//     </Modal>
//   );
// };

// export default CarModal;
