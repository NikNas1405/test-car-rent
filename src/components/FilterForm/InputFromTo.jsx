import { useState } from 'react';

// export const InputFromTo = ({ setDataFromForm }) => {
  export const InputFromTo = () => {
    const [minMileage, setMinMileage] = useState('');
    const [maxMileage, setMaxMileage] = useState('');

    const handleMileageFromChange = e => {
      const value = e.target.value;
      // const numericValue = parseFloat(value);
      setMinMileage(value);

      // setDataFromForm(prevState => ({
      //   ...prevState,
      //   mileageFrom: numericValue,
      // }));
    };

    const handleMileageToChange = e => {
      const value = e.target.value;
      // const numericValue = parseFloat(value);
      setMaxMileage(value);

      // setDataFromForm(prevState => ({
      //   ...prevState,
      //   mileageTo: numericValue,
      // }));
    };

    return (
      <>
        <div>
          <label htmlFor="mileage">Сar mileage / km</label>
          <div className="flex">
            <input
              type="text"
              id="from"
              placeholder="From"
              value={minMileage}
              onChange={handleMileageFromChange}
            />
            <input
              type="text"
              id="to"
              placeholder="To"
              value={maxMileage}
              onChange={handleMileageToChange}
            />
          </div>
        </div>
      </>
    );
  };
