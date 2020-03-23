import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexStyles } from '../../styled/GlobalStyles';
import { FadeInDown } from '../../styled/animations';


export const StyledNav = styled.nav`
  padding: 1rem .6rem;

  #menuToggle {
      font-size:2rem;
      cursor: pointer;
      margin-left: auto;
      width: 12rem;
      display: flex;
      justify-content: flex-end;
    }

  @media(min-width: 550px){
    #menuToggle{
      display: none
    }
  }
`;


export const LargeList = styled.ul`
  ${FlexStyles};
  margin: 0 auto;
  padding: 1rem;
  width: 100%;

  @media(min-width:760px){
    width: 80%;
  }
  @media(max-width: 550px){
    display: none;
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
  margin: 0 1rem;
  &:hover{
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    box-shadow: ${(props) => props.theme.shadow.darkShadow};
  }
`;


export const SmallList = styled(LargeList)`
    @media(min-width: 550px){
    display: none;
   }
   @media(max-width: 550px){
    display: flex;
    flex-direction: column;

  }

    li{
      margin: 1rem 0;
      width: 17rem;
    }
    width: 100%;
    margin-bottom: 2rem;

    animation: ${FadeInDown} 300ms ease-in-out;
`;
