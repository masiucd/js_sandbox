import * as React from 'react';
import styled from 'styled-components';
import { FlexStyles } from './GlobalStyles';

interface Props {
  mainTitle: string;
  subTitle?: string;
  specialExtra?: string;
}

const Title: React.FC<Props> = ({ mainTitle, subTitle, specialExtra }) => (
  <StyledTitle>
    <h3>{mainTitle}</h3>
    <span>
      {' '}
      {specialExtra}
      {' '}
    </span>
    <h4>{subTitle}</h4>
  </StyledTitle>
);
export default Title;


const StyledTitle = styled.section`
  padding: 1rem;
  ${FlexStyles};
  flex-direction: column;
  align-items: center;
  /* background: ${({ theme }) => theme.colors.darkRGBA}; */
  color: ${({ theme }) => theme.colors.primary};
  /* box-shadow: ${({ theme }) => theme.shadow.lightShadow}; */
  margin: 3rem auto;
  h3,span,h4{
    font-size: 2rem;
    margin: 1rem;
  }
  span {
    color: ${({ theme }) => theme.colors.danger};
  }
  @media(min-width: 870px){
    width: 60%;
  }
`;
