import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: #212427;
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    color: #2D3748;
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
