/* eslint-disable import/extensions */
import { Dispatch } from 'react';
import {
  JokeActionTypes, GetRandomJokeAction, JokeCategory, CatchJokeErrorAction,
} from './types.jokes';


export const catchError = (error: Record<string, any>): CatchJokeErrorAction => ({
  type: JokeActionTypes.CATCH_JOKE_ERROR,
  payload: error,
});

export const getRandomJoke = (
  category: string,
) => async (dispatch: Dispatch<GetRandomJokeAction | CatchJokeErrorAction>) => {
  try {
    const res = await fetch(`https://sv443.net/jokeapi/category/${category}`);
    const resBody = await res.json();
    dispatch({
      type: JokeActionTypes.GET_RANDOM_JOKE,
      payload: resBody,
    });
  } catch (err) {
    console.error(err);
    dispatch({ type: JokeActionTypes.CATCH_JOKE_ERROR, payload: err });
  }
};
