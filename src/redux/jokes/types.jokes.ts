/* eslint-disable @typescript-eslint/interface-name-prefix */


export enum JokeCategory {
  PROGRAMMING = 'PROGRAMMING',
  DARK = 'DARK',
  MISCELLANEOUS = 'MISCELLANEOUS',
  ANY = 'ANY',
}

interface IJoke {
  category: JokeCategory;
  type: string;
  joke: string;
  number: 27;
  warning: string;
}

export interface IUserState{
  joke: IJoke;
  loading: boolean;
}
