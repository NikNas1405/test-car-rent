import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeHolder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-image: linear-gradient(
      180deg,
      rgba(25, 46, 52, 0.61) 5.73%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(https://img.freepik.com/premium-photo/the-car-keys-are-in-hand_112699-282.jpg),
    linear-gradient(180deg, rgba(25, 46, 52, 0.61) 5.73%, rgba(0, 0, 0, 0) 100%);
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
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
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
