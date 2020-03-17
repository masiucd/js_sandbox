/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';

import { StyledJokeForm, StyledLabel, StyledSelect } from './Styled.Joke';

interface P {

  getRandomJoke: (category: string) => void;
}

interface IFormData {
  category: string;
}

const JokeForm: React.FC<P> = ({ getRandomJoke }) => {
  const [formData, setformData] = React.useState({
    category: 'any',
  });


  const { category } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getRandomJoke(category);
  };


  return (
    <StyledJokeForm onSubmit={handleSubmit}>
      <StyledLabel>
        <span>Choose Category:</span>
        <StyledSelect value={category} onChange={handleChange} name="category">
          <option disabled>Choose Category</option>
          <option value="programming">programming</option>
          <option value="dark">dark</option>
          <option value="miscellaneous">miscellaneous</option>
          <option value="any">any</option>
        </StyledSelect>
      </StyledLabel>
      <button type="submit">Get Joke</button>
    </StyledJokeForm>
  );
};
export default JokeForm;
