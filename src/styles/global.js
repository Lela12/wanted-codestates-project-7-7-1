import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    font-size: 12px;
    background: #F9F9F9;
    color: #495057,
  }
  #root{
    margin: 0 auto;
    max-width: 500px;
    height: 100%;
    background: #fff;
    position: relative;
    overflow: hidden auto;
  }
  
  button, a, svg{
    cursor: pointer;
  }

  button{
    border: none;
  }

`;
export default GlobalStyle;
