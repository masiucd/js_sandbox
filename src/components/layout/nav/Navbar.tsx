import * as React from 'react';
import uuid from 'uuid/v4';

import { StyledNav, LargeList, ListLink } from './Styled.Nav';

interface Props {

}

const Navbar: React.FC<Props> = () => {
  const [navData, setNavData] = React.useState([
    {
      id: uuid(),
      path: '/',
      text: 'home',
    },
    {
      id: uuid(),
      path: '/jokes',
      text: 'jokes',
    },
    {
      id: uuid(),
      path: '/lord_of_the_rings',
      text: 'lord of the rings',
    },
  ]);
  return (


    <StyledNav>

      <LargeList>
        {navData.map((link) => (
          <li key={link.id}>
            <ListLink to={link.path}>
              {' '}
              {link.text}
              {' '}
            </ListLink>
          </li>
        ))}

      </LargeList>

    </StyledNav>
  );
};
export default Navbar;
