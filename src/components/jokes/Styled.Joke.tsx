import styled, { css } from 'styled-components';
import { ZoomIn } from '../styled/animations';


const FlexStyles = css`
  display: flex;
  justify-content: center;


`;

export const StyledJoke = styled.div`
  ${FlexStyles};
  padding: 1rem;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;


export const StyledJokeForm = styled.form`
  padding: 1rem .6rem;
  ${FlexStyles};
  flex-direction: column;
`;


export const StyledLabel = styled.label`
  ${FlexStyles};
  flex-direction: column;
  padding: .6rem 0;
  span{
    letter-spacing: .1rem;
    font-size: 1.7rem;
    padding: 2rem;
    text-align:center;
    text-transform: capitalize;
  }

`;
export const StyledSelect = styled.select`

  width: 25rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 1.3rem;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  border: 1px solid ${(props) => props.theme.colors.primary};
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  position: relative;
  /* flex: 1;
  display: flex; */
  overflow: hidden;
  border-radius: .5rem;
  padding: .5rem 1rem;
  display: flex;
  option {
    color: ${(props) => props.theme.colors.offWhite};
  }
`;


export const StyledJokeDisplay = styled.section`
  padding: 1rem .5rem;
  border: 2px solid #333;
  box-shadow: ${(props) => props.theme.shadow.lightShadow};
  background: ${({ theme }) => theme.colors.primary};
  animation: ${ZoomIn} 300ms ease-in-out;
`;

export const StyledJokeHeader = styled.div`
  ${FlexStyles};

  h3{
    color: ${(props) => props.theme.colors.offWhite};
    font-size: 2rem;
    letter-spacing:.1rem;
    line-height: 3rem;
    span{
      color: ${(props) => props.theme.colors.danger};
      margin: 0 .5rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.offWhite};
    }
  }
`;


export const JokeBody = styled.div`
  ${FlexStyles};
  flex-direction: column;
  align-items:center;
  padding: 2rem 1rem;
  p{
    color: ${(props) => props.theme.colors.offWhite};
    font-size: 1.5rem;
  }
  #answer{
    color: ${(props) => props.theme.colors.danger};
    border-bottom: 1px solid ${(props) => props.theme.colors.offWhite};
  }
`;
