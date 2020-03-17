import * as React from 'react';
import { connect } from 'react-redux';
import { StyledJoke } from './Styled.Joke';
import { AppState } from '../../redux';
import { IJoke } from '../../redux/jokes/types.jokes';

interface P {
  joke: IJoke|null;
}

const Joke: React.FC<P> = (joke) => {
  let a;
  console.log(joke);
  return (
    <StyledJoke>
      {' '}
      <h1> Legia CWSKS </h1>
      {' '}
    </StyledJoke>
  );
};
const mapStateToProps = (state: AppState) => ({
  joke: state.joke.joke,
});

export default connect(mapStateToProps)(Joke);
