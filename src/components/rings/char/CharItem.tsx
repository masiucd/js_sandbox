import * as React from 'react';
import { IChar } from '../../../redux/lordOftR/ring.types';
import { StyledChar } from '../Styled.Rings';
import { handleEmptyValue } from '../../../utils/helpers';

interface Props {
  char: IChar;
}


const CharItem: React.FC<Props> = ({ char }) => (
  <StyledChar>
    <strong>
      {' '}
      <span>name:</span>
      { handleEmptyValue(char, 'name', 'No Name') }
    </strong>
    <strong>
      {' '}
      <span>birth:</span>
      {' '}

      { handleEmptyValue(char, 'birth', 'No Birth') }
    </strong>
    <strong>
      {' '}
      <span>death:</span>
      {' '}

      { handleEmptyValue(char, 'death', 'No Birth') }
    </strong>

  </StyledChar>
);
export default CharItem;


{ /* <strong>
{' '}
<span>birth:</span>
{' '}
{char.birth ? char.birth : 'no birth'}
</strong>
<strong>
{' '}
<span>death:</span>
{' '}
{char.death ? char.death : 'has not died'}
</strong>
<strong>
{' '}
<span>spouse:</span>
{' '}
{char.spouse ? char.spouse : 'no spise'}
</strong> */ }
