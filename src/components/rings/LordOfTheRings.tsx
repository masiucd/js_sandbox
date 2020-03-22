/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { getCharsSelect } from '../../redux/lordOftR/ring.selector';
import { IChar } from '../../redux/lordOftR/ring.types';
import { getChars } from '../../redux/lordOftR/ring.actions';

interface P {
  characters: IChar[];
  getChars: () => Promise<void>;
}

const LordOfTheRings: React.FC<P> = ({ characters, getChars }) => {
  React.useEffect(() => {
    getChars();
  }, []);


  return (
    <div>
      {' '}
      <h1> Legia CWSKS </h1>
      {' '}
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  characters: getCharsSelect(state),
});

export default connect(mapStateToProps, { getChars })(LordOfTheRings);
