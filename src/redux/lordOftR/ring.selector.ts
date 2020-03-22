/* eslint-disable import/extensions */
import { createSelector } from 'reselect';
import { AppState } from '..';
import { ILordState } from './ring.types';


const lordOfTheRingState = (state: AppState) => state.lordOfRing;


export const getCharsSelect = createSelector(
  [lordOfTheRingState],
  (state: ILordState) => state.characters,
);

export const getCharsSizeSelect = createSelector(
  [lordOfTheRingState],
  (state: ILordState) => state.characters.length,
);

export const getMoviesSelect = createSelector(
  [lordOfTheRingState],
  (state: ILordState) => state.movies,
);

export const getQuotesSelect = createSelector(
  [lordOfTheRingState],
  (state: ILordState) => state.quotes,
);

export const lordLoadingSelect = createSelector(
  [lordOfTheRingState],
  (state: ILordState) => state.loading,
);
