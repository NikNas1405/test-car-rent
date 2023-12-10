import { useState } from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { carsFilter } from '../../redux/filters/filtersSlice';

import {
  //   CustomSelectContainer,
  //   CustomSelectMenu,
  //   CustomSelectOption,
  TitleSelect,
} from './FilterForm.styled';

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

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     background: state.isSelected ? '#FFF' : '#FFF',
  //     color: state.isSelected ? '#121417' : '#121417',
  //     ':hover': {
  //       color: '#121417',
  //       background: '#FFF',
  //     },
  //   }),
  //   menu: provided => ({
  //     ...provided,
  //     borderRadius: '14px',
  //     border: '1px solid rgba(18, 20, 23, 0.05)',
  //     background: '#FFF',
  //     boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  //   }),
  // };

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
      />

      {/* <CustomSelectContainer
        id={nanoid()}
        options={formattedOptions}
        value={formattedOptions.find(option => option.value === selectedValue)}
        isSearchable={false}
        isMulti={false}
        onChange={handleDataChange}
        placeholder={placeholder}
        styles={customStyles}
        components={{
          Option: CustomSelectOption,
          Menu: CustomSelectMenu,
        }}
      /> */}
    </div>
  );
};
