import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

import {
  Header,
  Logo,
  NavLinkStyled,
  Container,
  HeaderContainer,
  Footer,
  FooterContainer,
  Wrapper,
} from './SharedLayout.styled';
import logo from '../../utils/images/logo.jpg';
import Loader from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Wrapper>
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
      <Footer>
        <FooterContainer>
          <a
            href="https://github.com/NikNas1405/test-car-rent"
            target="_blank"
            rel="noreferrer"
          >
            All rights reserved © 2023
          </a>
        </FooterContainer>
      </Footer>
    </Wrapper>
  );
};
