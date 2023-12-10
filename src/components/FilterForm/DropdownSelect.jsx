import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { carsFilter } from '../../redux/filters/filtersSlice';

export const DropdownSelect = ({ title, placeholder, options, filterType }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const handleDataChange = selectedOption => {
    const value = selectedOption ? selectedOption.value : '';
    dispatch(carsFilter({ [filterType]: value }));
    setSelectedValue(value);
  };

  const defaultOption = { value: null, label: 'Select an option' };
  const formattedOptions = [
    defaultOption,
    ...options.map(option => ({ value: option, label: option })),
  ];

  return (
    <div>
      <h3>{title}</h3>
      <Select
        id={nanoid()}
        options={formattedOptions}
        value={formattedOptions.find(option => option.value === selectedValue)}
        isSearchable={false}
        isMulti={false}
        onChange={handleDataChange}
        placeholder={placeholder}
      />
    </div>
  );
};
