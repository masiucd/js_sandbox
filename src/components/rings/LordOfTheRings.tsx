/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../redux';
import { getCharsSelect, lordLoadingSelect } from '../../redux/lordOftR/ring.selector';
import { getChars } from '../../redux/lordOftR/ring.actions';
import { IChar } from '../../redux/lordOftR/ring.types';
import { StyledLordOfTheRing, CharsWrapper } from './Styled.Rings';

import useToggle from '../../hooks/useToggle';
import { StyledBtn } from '../styled/Button';
import CharItem from './char/CharItem';

interface P {
  characters: IChar[];
  getChars: () => Promise<void>;
  isLoading: boolean;
}

const LordOfTheRings: React.FC<P> = ({ characters, getChars, isLoading }) => {
  const [showChars, toggleChars] = useToggle(false);
  const startGetChars = (): void => {
    getChars();
    toggleChars();
  };


  return (
    <StyledLordOfTheRing>
      <StyledBtn onClick={startGetChars}> Characters</StyledBtn>
      <CharsWrapper>
        {!isLoading && showChars && (
          characters.map((c) => <CharItem key={c._id} char={c} />)
        )}
      </CharsWrapper>
    </StyledLordOfTheRing>
  );
};


const mapStateToProps = (state: AppState) => ({
  characters: getCharsSelect(state),
  isLoading: lordLoadingSelect(state),
});

export default connect(mapStateToProps, { getChars })(LordOfTheRings);
