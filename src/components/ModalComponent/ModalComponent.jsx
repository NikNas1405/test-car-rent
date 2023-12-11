import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

import { formatNumber, formatPriceSelect } from '../../utils/helpersFunctions';
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
    </ModalOverlay>
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
//   isModalOpen,
//   onClose,
//   selectedAdvert,
//   handleImageError,
// }) => {
//   return (
//     <Modal
//       isOpen={isModalOpen}
//       onRequestClose={onClose}
//       style={customStyles}
//       contentLabel="onRequestClose Example"
//     >
//       <>
//         <div className={styled.containerCarModalWrapper}>
//           <div className={styled.modalWrapper}>
//             <button
//               className={styled.closeButton}
//               type="button"
//               onClick={onClose}
//             >
//               <IoMdClose className={styled.closeIcon} />
//             </button>
//             <div>
//               <div key={selectedAdvert.id}>
//                 <div className={styled.carModalImageWrapper}>
//                   <img
//                     onError={handleImageError}
//                     className={styled.imageCar}
//                     src={selectedAdvert.img}
//                     alt={`${selectedAdvert.make} ${selectedAdvert.model}`}
//                   />
//                 </div>
//                 <h2 className={styled.carsModalTitle}>
//                   {selectedAdvert.make}
//                   <span className={styled.carsTitleSecond}>
//                     {selectedAdvert.model}
//                   </span>
//                   ,{selectedAdvert.year}
//                 </h2>
//                 <ul className={styled.firstItemsWrapper}>
//                   <li className={styled.firstItems}>
//                     {selectedAdvert.address}
//                   </li>
//                   <span className={styled.firstItems}>|</span>
//                   <li className={styled.firstItems}>
//                     Id: {selectedAdvert.id}{' '}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Year: {selectedAdvert.year}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Type: {selectedAdvert.type}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Fuel consumption: {selectedAdvert.fuelConsumption}
//                     <span className={styled.firstItems}>|</span>
//                   </li>

//                   <li className={styled.firstItems}>
//                     Engine size: {selectedAdvert.engineSize}
//                   </li>
//                 </ul>
//                 <h4 className={styled.titleDescriptionOne}>
//                   {selectedAdvert.description}
//                 </h4>
//                 <h4 className={styled.titleDescription}>
//                   Accessories and functionalities:
//                 </h4>
//                 <ul>
//                   <li className={styled.firstItems}>
//                     {selectedAdvert.accessories}
//                   </li>
//                   <li className={styled.firstItems}>
//                     {selectedAdvert.functionalities}
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
//                         {selectedAdvert.rentalPrice}
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
