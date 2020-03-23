import * as React from 'react';
import { IMovie } from '../../../redux/lordOftR/ring.types';

interface Props {
  movie: IMovie;
}

const MovieItem: React.FC<Props> = ({ movie }) => (
  <div>
    {' '}
    <h1> Legia CWSKS </h1>
    {' '}
  </div>
);
export default MovieItem;
