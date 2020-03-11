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
    background: url('/assets/svg/simple-codelines.svg'), #2b3137;
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

  ::placeholder {
  color: #999;
  opacity: 1; /* Firefox */
}

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #999;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #999;
  }

  @keyframes shake {
    0% { margin-left: 0rem; }
    25% { margin-left: 0.5rem; }
    75% { margin-left: -0.5rem; }
    100% { margin-left: 0rem; }
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
  }
`;
