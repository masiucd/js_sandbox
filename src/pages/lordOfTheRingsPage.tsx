/* eslint-disable import/extensions */
import * as React from 'react';
import { Container } from '../components/styled/Wrappers';
import LordOfTheRings from '../components/rings/LordOfTheRings';

interface P {

}

const LoftRPage: React.FC<P> = () => (
  <Container>
    <LordOfTheRings />
  </Container>
);
export default LoftRPage;
