import { useState } from 'react';
import { Holder, Input1, Input2, InputLabel } from './FilterForm.styled';

export const InputFromTo = () => {
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleMileageFromChange = e => {
    const value = e.target.value;
    setMinMileage(value);
  };

  const handleMileageToChange = e => {
    const value = e.target.value;
    setMaxMileage(value);
  };

  return (
    <div>
      <InputLabel htmlFor="mileage">Сar mileage / km</InputLabel>
      <Holder>
        <Input1
          type="text"
          id="from"
          placeholder="From"
          value={minMileage}
          onChange={handleMileageFromChange}
        />
        <Input2
          type="text"
          id="to"
          placeholder="To"
          value={maxMileage}
          onChange={handleMileageToChange}
        />
      </Holder>
    </div>
  );
};
