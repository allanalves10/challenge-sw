import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
      --green-light: #58ae46;
      --red: #E62E4D;
      --text-body: #363F5F;
      --shape: #FFFFFF;
      --black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* background: var(--black); */
  }

  body, input, button {
    font: 14px sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
