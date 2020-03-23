/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../redux';
import {
  getCharsSelect, lordLoadingSelect, getMoviesSelect, getQuotesSelect,
} from '../../redux/lordOftR/ring.selector';
import { getChars, getQuotes, getMovies } from '../../redux/lordOftR/ring.actions';
import { IChar, IMovie, IQuote } from '../../redux/lordOftR/ring.types';
import { StyledLordOfTheRing, Wrapper, BtnGroup } from './Styled.Rings';

import useToggle from '../../hooks/useToggle';
import { StyledBtn } from '../styled/Button';
import CharItem from './char/CharItem';
import MovieItem from './char/MovieItem';

interface P {
  characters: IChar[];
  quotes: IQuote[];
  movies: IMovie[];
  getChars: () => Promise<void>;
  getMovies: () => Promise<void>;
  getQuotes: () => Promise<void>;
  isLoading: boolean;
}

const LordOfTheRings: React.FC<P> = ({
  characters, getChars, isLoading, getMovies, getQuotes, quotes, movies,
}) => {
  const [showChars, toggleChars] = useToggle(false);
  const [showMovies, toggleMovies] = useToggle(false);
  const [showQuotes, toggleQuotes] = useToggle(false);

  const startFetchData = (getFn: FetchFnType, toggleFn: ToggleFnType): void => {
    getFn();
    toggleFn();
  };


  return (
    <StyledLordOfTheRing>
      <BtnGroup>
        <StyledBtn
          disabled={showMovies || showQuotes}
          onClick={() => startFetchData(getChars, toggleChars)}
        >
          {' '}
          Characters

        </StyledBtn>
        <StyledBtn
          disabled={showChars || showQuotes}
          onClick={() => startFetchData(getMovies, toggleMovies)}
        >
          {' '}
          Movies

        </StyledBtn>
        <StyledBtn
          disabled={showChars || showMovies}
          onClick={() => startFetchData(getQuotes, toggleQuotes)}
        >
          {' '}
          Quotes
          {' '}

        </StyledBtn>
      </BtnGroup>
      <Wrapper>
        {!isLoading && showChars && (
          characters.map((c) => <CharItem key={c._id} char={c} />)
        )}
        {!isLoading && showMovies && (
          movies.map((m) => <MovieItem key={m._id} movie={m} />)
        )}
      </Wrapper>
    </StyledLordOfTheRing>
  );
};


const mapStateToProps = (state: AppState) => ({
  characters: getCharsSelect(state),
  movies: getMoviesSelect(state),
  quotes: getQuotesSelect(state),
  isLoading: lordLoadingSelect(state),
});


export default connect(mapStateToProps, {
  getChars,
  getQuotes,
  getMovies,
})(LordOfTheRings);
