import styled from 'styled-components';
import Select from 'react-select';

export const StyledForm = styled.form`
  width: 859px;
  height: auto;
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 18px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 136px;
  height: 48px;
  padding: 14px;

  background: #3470ff;
  color: #fff;
  border-radius: 12px;
  border: none;

  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

export const DropdownHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const TitleSelect = styled.h3`
  color: #8a8a89;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
`;

export const StyledSelect = styled(Select)`
  /* align-items: center;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  transition: all 100ms ease 0s;
  border-radius: 14px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 20px;
  background: rgb(247, 247, 251);
  border: none;
  padding: 6px 8px;
  font-weight: 500;
  color: rgb(18, 20, 23);
  outline: 0px !important; */

  /* display: flex;
  padding: 14px 18px;
  justify-content: center;
  align-items: center;

  border-radius: 14px;
  background: #f7f7fb; */
`;

