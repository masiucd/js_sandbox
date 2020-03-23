import * as React from 'react';
import { Container } from '../components/styled/Wrappers';
import Title from '../components/styled/Title';

interface P {

}

const HomePage: React.FC<P> = () => (
  <Container>
    <Title mainTitle="Welcome" specialExtra="To the" subTitle="Special App" />
  </Container>
);
export default HomePage;
