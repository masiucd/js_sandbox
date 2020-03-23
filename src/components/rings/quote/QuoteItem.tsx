/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { IQuote, IMovie, IChar } from '../../../redux/lordOftR/ring.types';
import { StyledBox } from '../Styled.Rings';
import { handleEmptyValue, populate } from '../../../utils/helpers';


interface Props {
  quote: IQuote;
  movies: IMovie[];
  characters: IChar[];
}

const QuoteItem: React.FC<Props> = ({ quote, movies, characters }) => (
  <StyledBox>
    <strong>
      <span>dialog </span>
      {handleEmptyValue(quote, 'dialog', 'no dialog')}
    </strong>
    <strong>
      <span>from </span>
      {/* {
        populate(quote.movie, movies)
      } */}
      {handleEmptyValue(quote, 'movie', 'no movie')}
    </strong>
    <strong>
      <span>character </span>
      {handleEmptyValue(quote, 'character', 'no character')}
    </strong>
  </StyledBox>
);

export default QuoteItem;
