import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { setCarsFilter } from '../../redux/filters/filtersSlice';

import { TitleSelect } from './FilterForm.styled';

export const DropdownSelect = ({
  title,
  placeholder,
  options,
  filterType,
  customStyles,
}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const dispatch = useDispatch();

  const handleDataChange = selectedOption => {
    const value = selectedOption ? selectedOption.value : '';
    dispatch(setCarsFilter({ [filterType]: value }));
    setSelectedValue(value);
  };

  // const defaultOption = { value: null, label: 'Select an option' };

  // const formattedOptions = [
  //   defaultOption,
  //   ...options.map(option => ({ value: option, label: option })),
  // ];

  const formattedOptions = [
    ...options.map(option => ({ value: option, label: option })),
  ];

  return (
    <div>
      <TitleSelect>{title}</TitleSelect>
      <Select
        id={nanoid()}
        options={formattedOptions}
        value={formattedOptions.find(option => option.value === selectedValue)}
        isSearchable={false}
        isMulti={false}
        onChange={handleDataChange}
        placeholder={placeholder}
        styles={customStyles}
      />
    </div>
  );
};
