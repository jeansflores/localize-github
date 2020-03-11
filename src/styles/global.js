import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html, body {
    height: 100vh;
    overflow: auto;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #24292e;
  }

  #root {
    display: flex;
    justify-content: center;
  }

  body, input, button {
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }
`;
