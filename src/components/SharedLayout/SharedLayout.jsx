import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {
  Header,
  Logo,
  NavLinkStyled,
  Container,
  HeaderContainer,
} from './SharedLayout.styled';

import logo from '../../utils/images/logo.jpg';
import Loader from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <HeaderContainer>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/catalog">All cars</NavLinkStyled>
            <NavLinkStyled to="/favorites">Favorites cars</NavLinkStyled>
          </nav>
        </HeaderContainer>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <footer>
        <span>
          All Rights Reserved.
          <a
            href="https://github.com/NikNas1405/test-car-rent"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            ANikitina™
          </a>
          © 2023
        </span>
      </footer>
    </>
  );
};
