import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CarListStyled = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px 29px;
`;

export const Button = styled.button`
  background: transparent;
  color: #3470ff;
  border: none;
  margin: 100px auto 0;

  font-family: inherit;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.45;
  text-decoration-line: underline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
