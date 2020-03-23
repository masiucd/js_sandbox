import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexStyles } from '../../styled/GlobalStyles';


export const StyledNav = styled.nav`
  padding: 1rem .6rem
`;


export const LargeList = styled.ul`
  ${FlexStyles};
  margin: 0 auto;
  padding: 1rem;
  justify-content: space-around;
  width: 100%;
  @media(min-width:760px){
    width: 60%;
  }
`;

export const ListLink = styled(Link)`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.primary};
  letter-spacing: .1rem;
  transition: ${({ theme }) => theme.transition.mainTransition};
  outline: none;
  padding: .4rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  &:hover{
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
  }
`;
