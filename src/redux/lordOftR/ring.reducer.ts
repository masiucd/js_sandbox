import { ILordState, LordTypesReducer, LordActionTypes } from './ring.types';

const initialState: ILordState = {
  characters: [],
  movies: [],
  quotes: [],
  loading: true,
  error: null,
};

export default (state: ILordState = initialState, action: LordTypesReducer) => {
  switch (action.type) {
    case LordActionTypes.GET_CHARS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
      };
    case LordActionTypes.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case LordActionTypes.GET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
        loading: false,
      };
    case LordActionTypes.CATCH_LORD_ERRORS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
