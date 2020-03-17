import { createSelector } from 'reselect';
import { AppState } from '..';
import { IJokeState } from './types.jokes';


const selectJokesState = (state: AppState) => state.joke;


export const selectJoke = createSelector(
  [selectJokesState],
  (state: IJokeState) => state.joke,
);

export const selectLoading = createSelector(
  [selectJokesState],
  (state: IJokeState) => state.loading,
);
