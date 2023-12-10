import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: black;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1999;
`;

export const HeaderContainer = styled.div`
  max-width: 1140px;
  max-height: 450px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;

  @media (max-width: 369px) {
    height: 170px;
  }

  @media ((min-width: 321px) and (max-width: 767px)) {
    height: 130px;
  }
  @media (min-width: 768px) {
    height: 90px;
    justify-content: space-between;
  }

  > nav {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
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

  @media (min-width: 369px) {
    font-size: 16px;
    height: 44px;
  }
`;

export const Container = styled.div`
  max-width: 1144px;
  margin: 450px auto 0;
  padding: 16px;
  background-color: #ffffff;

  border: 2px solid red;

  @media (max-width: 369px) {
    margin: 170px;
  }

  @media ((min-width: 321px) and (max-width: 767px)) {
    margin: 130px;
  }
  @media (min-width: 768px) {
    margin: 90px;
  }
`;