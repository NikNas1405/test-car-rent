import { Container, Body, Base, LongFazes, Title } from './Loader.styled.js';

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
      <LongFazes>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </LongFazes>
      <Title>Loading...</Title>
    </Container>
  );
};

export default Loader;
