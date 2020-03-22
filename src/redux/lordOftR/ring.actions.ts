/* eslint-disable no-undef */
import { Dispatch } from 'react';
import { LordActionTypes, CatchLordErrors, GetCharAction } from './ring.types';


export const catchErrors = (err: Record<string, any>): CatchLordErrors => ({
  type: LordActionTypes.CATCH_LORD_ERRORS,
  payload: err,
});


export const getChars = () => async (dispatch: Dispatch<GetCharAction|CatchLordErrors>) => {
  try {
    const config = {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
      },
    };
    const res = await fetch('https://the-one-api.herokuapp.com/v1/character', config);
    const resBody = await res.json();
    dispatch({
      type: LordActionTypes.GET_CHARS,
      payload: resBody.docs,
    });
  } catch (err) {
    dispatch({
      type: LordActionTypes.CATCH_LORD_ERRORS,
      payload: { msg: err.response, status: err.response.status },
    });
  }
};
