/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledJoke } from './Styled.Joke';
import { AppState } from '../../redux';
import { IJoke, JokeCategory } from '../../redux/jokes/types.jokes';
import { getRandomJoke } from '../../redux/jokes/jokes.actions';
import JokeForm from './JokeForm';

interface P {
  joke: IJoke|null;
  getRandomJoke: (category: string) => void;
}

const Joke: React.FC<P> = ({ joke, getRandomJoke }) => (
  <StyledJoke>
    <JokeForm getRandomJoke={getRandomJoke} />
  </StyledJoke>
);
const mapStateToProps = (state: AppState) => ({
  joke: state.joke.joke,
});

export default connect(mapStateToProps, { getRandomJoke })(Joke);
