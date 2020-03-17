
import { IJokeState, JokeTypesReducer, JokeActionTypes } from './types.jokes';

const initialState: IJokeState = {
  joke: null,
  loading: true,
  error: null,
};

export default (state: IJokeState = initialState, action: JokeTypesReducer) => {
  switch (action.type) {
    case JokeActionTypes.GET_RANDOM_JOKE:

      return {
        ...state,
        joke: action.payload,
        loading: false,
      };

    case JokeActionTypes.CATCH_JOKE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
