/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IChar {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
}


export interface IMovie {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
}

export interface IQuote {
  _id: string;
  dialog: string;
  movie: IMovie['_id'];
  character: IChar['_id'];
}

export interface ILordState {
  characters: IChar[];
  loading: boolean;
  movies: IMovie[];
  quotes: IQuote[];
  error: Record<string, any> | null;
}


export enum LordActionTypes {
  GET_CHARS = 'GET_CHARS',
  GET_MOVIES = 'GET_MOVIES',
  GET_QUOTES = 'GET_QUOTES',
  CATCH_LORD_ERRORS = 'CATCH_LORD_ERRORS',
}


export interface GetCharAction {
  type: LordActionTypes.GET_CHARS;
  payload: IChar[];
}


export interface GetMoviesAction {
  type: LordActionTypes.GET_MOVIES;
  payload: IMovie[];
}


export interface GetQuotesAction {
  type: LordActionTypes.GET_QUOTES;
  payload: IQuote[];
}

export interface CatchLordErrors {
  type: LordActionTypes.CATCH_LORD_ERRORS;
  payload: Record<string, any>;
}

export type LordTypesReducer =
  GetCharAction |
  GetMoviesAction |
  GetQuotesAction |
  CatchLordErrors
