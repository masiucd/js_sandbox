/* eslint-disable @typescript-eslint/interface-name-prefix */


export enum JokeCategory {
  PROGRAMMING = 'PROGRAMMING',
  DARK = 'DARK',
  MISCELLANEOUS = 'MISCELLANEOUS',
  ANY = 'ANY',
}

export interface IJoke {
  category: string;
  type: string;
  setup: string;
  delivery: string;
  number: 27;
  nsfw?: boolean;
  warning: string;
}

export interface IJokeState{
  joke: IJoke | null;
  loading: boolean;
  error: Record<string, any> | null;
}

export enum JokeActionTypes {
  GET_RANDOM_JOKE = 'GET_RANDOM_JOKE',
  CATCH_JOKE_ERROR = 'CATCH_JOKE_ERROR',
}

export interface GetRandomJokeAction {
  type: JokeActionTypes.GET_RANDOM_JOKE;
  payload: IJoke;
}
export interface CatchJokeErrorAction {
  type: JokeActionTypes.CATCH_JOKE_ERROR;
  payload: Record<string, any>;
}


export type JokeTypesReducer = GetRandomJokeAction | CatchJokeErrorAction
