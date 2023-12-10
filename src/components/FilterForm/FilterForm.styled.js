import styled from 'styled-components';

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
  align-self: end;

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

export const TitleSelect = styled.h3`
  color: #8a8a89;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
`;

export const InputLabel = styled.label`
  color: #8a8a89;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28;
`;

export const Input1 = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 14px 0px 0px 14px;
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);

  background: #f7f7fb;
  color: #121417;

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const Input2 = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 115px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  border: none;

  background: #f7f7fb;
  color: #121417;

  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const Holder = styled.div`
  display: flex;
`;

// import Select from 'react-select';
// Стилі для основного контейнера Select
// export const CustomSelectContainer = styled(Select)`
//   padding: 14px 89px 14px 18px;
//   justify-content: center;
//   align-items: center;
//   gap: 32px;
//   border-radius: 14px;
//   background: #f7f7fb;
//   color: #121417;
// `;

// Стилі для випадаючого списку Select
// export const CustomSelectMenu = styled.div`
//   border-radius: 14px;
//   border: 1px solid rgba(18, 20, 23, 0.05);
//   background: #fff;
//   box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
// `;

// Стилі для випадаючого елементу списку при ховері чи фокусі
// export const CustomSelectOption = styled.div`
//   &:hover,
//   &:focus {
//     color: #121417;
//     font-family: Manrope;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 500;
//     line-height: 20px;
//   }
// `;
