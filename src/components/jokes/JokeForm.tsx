/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';

import { StyledJokeForm, StyledLabel, StyledSelect } from './Styled.Joke';
import { StyledBtn } from '../styled/Button';

interface P {
  isLoading: boolean;
  getRandomJoke: (category: string) => void;
}

interface IFormData {
  category: string;
}

const JokeForm: React.FC<P> = ({ getRandomJoke, isLoading }) => {
  const [formData, setformData] = React.useState({
    category: 'any',
  });

  const [btnCount, setBtnCount] = React.useState<number>(0);


  const { category } = formData;

  const increment = () => {
    setBtnCount(btnCount + 1);
  };


  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getRandomJoke(category);
    increment();
  };


  return (
    <StyledJokeForm onSubmit={handleSubmit}>
      <StyledLabel>
        <span>Choose Category</span>
        <StyledSelect value={category} onChange={handleChange} name="category">
          <option disabled>Choose Category</option>
          <option value="programming">programming</option>
          <option value="dark">dark</option>
          <option value="miscellaneous">miscellaneous</option>
          <option value="any">any</option>
        </StyledSelect>
      </StyledLabel>
      <StyledBtn type="submit" disabled={!isLoading && isLoading}>{btnCount === 0 ? 'Get Joke' : 'Get new Joke'}</StyledBtn>
    </StyledJokeForm>
  );
};
export default JokeForm;
