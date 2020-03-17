/* eslint-disable import/extensions */
import * as React from 'react';
import Joke from '../components/jokes/Joke';
import { Container } from '../components/styled/Wrappers';

interface P {

}

const JokePage: React.FC<P> = () => (
  <Container>
    <Joke />
  </Container>
);
export default JokePage;
