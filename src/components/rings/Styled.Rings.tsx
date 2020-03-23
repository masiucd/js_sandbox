import styled from 'styled-components';
import { FlexStyles } from '../styled/GlobalStyles';


export const StyledLordOfTheRing = styled.div`
  padding: 1rem;
  ${FlexStyles};
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const BtnGroup = styled.div`
  ${FlexStyles};
  flex-direction: column;
  button{
    margin: .5rem
  }
  @media(min-width:760px){
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const StyledBox = styled.div`
  ${FlexStyles};
  align-items: center;
  flex-direction: column;
  margin: 2rem auto;
  padding: 2rem .5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  width: 100%;
  strong{
    width: 33%;
    font-size: 1rem;
    letter-spacing:.1rem;
    margin:.5rem;
    text-align: center;
    span{
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.danger};
    }

  }

  @media(min-width:760px){
    flex-direction: row;
    justify-content: space-around;
    strong {
      margin: 0;
    }
  }
`;
