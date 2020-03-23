import * as React from 'react';
import { IQuote } from '../../../redux/lordOftR/ring.types';
import { StyledBox } from '../Styled.Rings';
import { handleEmptyValue } from '../../../utils/helpers';

interface Props {
  quote: IQuote;
}

const QuoteItem: React.FC<Props> = ({ quote }) => (
  <StyledBox>
    <strong>
      <span>dialog </span>
      {handleEmptyValue(quote, 'dialog', 'no dialog')}
    </strong>
    <strong>
      <span>from </span>
      {handleEmptyValue(quote, 'movie', 'no movie')}
    </strong>
    <strong>
      <span>character </span>
      {handleEmptyValue(quote, 'character', 'no character')}
    </strong>
  </StyledBox>
);
export default QuoteItem;
