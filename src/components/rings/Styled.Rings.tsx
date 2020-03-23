import styled from 'styled-components';
import { FlexStyles } from '../styled/GlobalStyles';


export const StyledLordOfTheRing = styled.div`
  padding: 1rem;
  ${FlexStyles};
  flex-direction: column;
  align-items: center;
`;
export const CharsWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

export const StyledChar = styled.div`
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
    font-size: 1.2rem;
    letter-spacing:.1rem;
    margin:.5rem;
    span{
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.common};
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
