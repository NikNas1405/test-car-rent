import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1140px;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px #1134a6;
`;

export const Header = styled.header`
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1999;

  > div {
    width: 1140px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    gap: 12px;
    margin: 0 auto;

    > nav {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
  }

  @media (max-width: 368px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: auto;
  display: block;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 14px;
  height: 40px;
  background-color: #0b44cd;

  &.active {
    background-color: #3470ff;
    height: 44px;
    font-size: 16px;
  }

  &:not(:last-child) {
    margin-right: 4px;
  }
`;
