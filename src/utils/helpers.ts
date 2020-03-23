/* eslint-disable no-underscore-dangle */
import { IChar, IMovie } from '../redux/lordOftR/ring.types';

type XsType = IChar[] | IMovie[]

export const handleEmptyValue = (
  obj: Record<string, any>, key: any, defaultValue = 'no value',
) => (obj[key] ? obj[key] : defaultValue);


export const populate = (id: string, xs: any[]) => {
  const findValue = xs.find((x) => (x._id === id ? x.name : 'no value'));
  return findValue;
};
