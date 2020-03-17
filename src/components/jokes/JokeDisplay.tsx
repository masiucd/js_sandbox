import * as React from 'react';
import { IJoke } from '../../redux/jokes/types.jokes';
import { StyledJokeDisplay, StyledJokeHeader, JokeBody } from './Styled.Joke';

interface P {
  jokeData: IJoke | null;
  isLoading: boolean;
}

const JokeDisplay: React.FC<P> = ({ jokeData, isLoading }) => (
  <>
    {!isLoading && jokeData && (
      <StyledJokeDisplay>
        <>
          <StyledJokeHeader>
            <h3>
              {' '}
              Joke category:
              {' '}
              <span>{jokeData.category}</span>
              {' '}
              and joke type:
              {' '}
              <span>{jokeData.type}</span>
            </h3>
          </StyledJokeHeader>
          <JokeBody>
            <p>
              {' '}
              {jokeData.setup}
              {' '}
            </p>
            <p id="answer">
              {jokeData.delivery}
            </p>
          </JokeBody>
        </>
      </StyledJokeDisplay>
    )}

  </>
);
export default JokeDisplay;
