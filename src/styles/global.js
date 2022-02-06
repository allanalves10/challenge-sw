import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --blue: #00BFFF;
    --gray: #d2d2d2;
    --red: #E52E4D;
    --white: #FFFFFF;
    --yellow: #fed34f;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: var(--gray);
  }

  body, input, button {
    font: 14px sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
