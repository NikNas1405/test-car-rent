import { Container, Body, Base, Title } from './Loader.styled.js';

const Loader = () => {
  return (
    <Container>
      <Body>
        <Base>
          <img
            src="https://static.thenounproject.com/png/152693-200.png"
            alt="car loader"
          />
        </Base>
      </Body>

      <Title>Loading...</Title>
    </Container>
  );
};

export default Loader;
