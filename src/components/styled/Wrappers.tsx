import styled from 'styled-components';


export const Container = styled.section`
  width: 100%;
  padding-right: .4rem;
  padding-left: .4rem;
  margin-right: auto;
  margin-left: auto;
  min-height: 50vh;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
