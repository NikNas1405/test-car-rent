import Modal from 'react-modal';
import { formatNumber } from '../../utils/formating';
import { useEffect } from 'react';

Modal.setAppElement('#root');

export const ModalComponent = ({ car, isOpen, closeModal }) => {
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
  } = car;

  const addressParts = address?.split(', ');
  const uiMileage = formatNumber(mileage);
  const conditionsArray = rentalConditions.split('\n');

  //   const minimumAgeRegex = /Minimum age: (\d+)/;
  //   const match = rentalConditions.match(minimumAgeRegex);

  //   const minAge = match && match[1] ? match[1] : 18;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <button onClick={closeModal}>close</button>
      <div>
        <img
          src={
            img
              ? img
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWggGWNvpgV9vuCU59n0yoAuZtQTxKGSXH2w&usqp=CAU'
          }
          alt={'car'}
          loading="lazy"
        />
      </div>
      <div>
        <span>{make}</span>
        <span>{model}</span>
        <span> {year}</span>
      </div>
      <div>
        <ul>
          <li>{addressParts[1]}</li>
          <li>{addressParts[2]}</li>
          <li>Id: {id}</li>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>Fuel Consumption: {fuelConsumption}</li>
          <li>Engine Size{engineSize}</li>
        </ul>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <h3>Accessories and functionalities: </h3>
        <ul>
          {accessories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Rental Conditions: </h3>
        <ul>
          {conditionsArray.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {<li>Mileage: {uiMileage}</li>}
          {<li>Price: {rentalPrice}</li>}
        </ul>
      </div>
      <div>
        <a href="tel:+380730000000" type="button">
          Rental car
        </a>
      </div>
    </Modal>
  );
};

export default ModalComponent;
