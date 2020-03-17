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
import JokeDisplay from './JokeDisplay';
import { selectJoke, selectLoading } from '../../redux/jokes/joke.selector';

interface P {
  joke: IJoke|null;
  getRandomJoke: (category: string) => void;
  isLoading: boolean;
}

const Joke: React.FC<P> = ({ joke, getRandomJoke, isLoading }) => (
  <StyledJoke>
    <JokeForm getRandomJoke={getRandomJoke} isLoading={isLoading} />
    <JokeDisplay jokeData={joke} isLoading={isLoading} />
  </StyledJoke>
);
const mapStateToProps = (state: AppState) => ({
  joke: selectJoke(state),
  isLoading: selectLoading(state),
});

export default connect(mapStateToProps, { getRandomJoke })(Joke);
