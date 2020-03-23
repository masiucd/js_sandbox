import * as React from 'react';


export default (initialState = false): [boolean, () => void] => {
  const [state, setState] = React.useState<boolean>(initialState);


  const toggle = (): void => {
    setState(!state);
  };

  return [state, toggle];
};
