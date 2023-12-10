import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      180deg,
      rgba(25, 46, 52, 0.61) 5.73%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(https://img.freepik.com/premium-photo/the-car-keys-are-in-hand_112699-282.jpg),
    linear-gradient(180deg, rgba(25, 46, 52, 0.61) 5.73%, rgba(0, 0, 0, 0) 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HomeHolder = styled.div`
  margin: 200px auto;
  padding: 40px;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #fff;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #f8f8f8;

  > h2 {
    font-size: 24px;
    color: #fff;
    margin-bottom: 10px;
  }

  > p {
    margin-bottom: 10px;
  }

  > ol {
    margin-bottom: 10px;
  }
  > li {
    margin-bottom: 6px;
  }
`;

export const ButtonLink = styled(NavLink)`
  min-width: 100px;
  padding: 15px 20px;
  background-color: #3470ff;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:is(:focus, :hover) {
    background: #0b44cd;
  }
`;
