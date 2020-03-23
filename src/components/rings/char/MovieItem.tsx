import * as React from 'react';
import { IMovie } from '../../../redux/lordOftR/ring.types';
import { StyledBox } from '../Styled.Rings';
import { handleEmptyValue } from '../../../utils/helpers';

interface Props {
  movie: IMovie;
}

const MovieItem: React.FC<Props> = ({ movie }) => (
  <StyledBox>
    <strong>
      <span>movie name  </span>
      {/* {handleEmptyValue} */}
      {movie.name}
    </strong>
    <strong>
      <span>movie budget  </span>
      {/* {handleEmptyValue} */}
      {movie.budgetInMillions}
      $
    </strong>
    <strong>
      <span>academy Award Wins  </span>
      {/* {handleEmptyValue} */}
      {movie.academyAwardWins}
    </strong>
  </StyledBox>
);
export default MovieItem;
