/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';


export const StyledBtn = styled.button`
  padding: .3rem .5rem;
  font-size: 1.3rem;
  box-shadow: ${({ theme }) => theme.shadow.lightShadow};
  width: 12em;
  display: block;
  margin: 1rem auto;
  border-radius: .4rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.offWhite};
  border: none;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.mainTransition};
  outline:none;
  &:hover{
    box-shadow: ${({ theme }) => theme.shadow.darkShadow};
    background: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.offWhite};
  }

  &:disabled{
    background: rgba(0,0,0,.4);
    color: #777;
  }
`;
