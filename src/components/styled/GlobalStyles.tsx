import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*::before,*::after,*{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
  body {
    box-sizing: border-box;
    background: ${(props) => props.theme.colors.white};
    line-height: 1.4;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: 'Viga', sans-serif;
    font-size: 10px;
    }

  .MainApp {
    flex-grow: 1 auto;
  }

  h1,h2{
  }

  p {
    margin-bottom: 1.25rem;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;

  }

  h1{
    font-size: 5rem;
  }

  h2{
    font-size: 4.4rem;
  }

  h3{
    font-size: 4rem;
  }

  h4{
    font-size: 3.3rem;
  }

  h5{
    font-size: 2.8rem;
  }
`;
