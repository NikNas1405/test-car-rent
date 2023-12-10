import {
  Title,
  HomeHolder,
  ButtonLink,
  Description,
  // Back,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeHolder>
      <Title>'Ukraine Car Rental Service'</Title>
      <Description>
        <p>
          Welcome to our car rental service! We are your reliable partner in
          travels and journeys. Forget about worries regarding transportation –
          we offer a wide range of cars with different classes and
          configurations.
        </p>
        <h2>Our advantages:</h2>
        <ol>
          <li>Flexible rates and favorable rental conditions.</li>
          <li>Modern and regularly serviced fleet of vehicles.</li>
          <li>
            Convenient search and filtering of cars based on your preferences.
          </li>
          <li>Simple and fast booking process.</li>
        </ol>
        <p>
          Choose comfort and safety with our cars for the best travel
          experience!
        </p>
      </Description>
      <ButtonLink to="catalog">Choose a car</ButtonLink>
    </HomeHolder>
  );
};

export default HomePage;
