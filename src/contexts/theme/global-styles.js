import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;      
    background-color: #121212;
    color: #f2f2f2;
    direction:rtl;
  }
  h1,h2,h3,h4,h5{
    margin: 0;
    padding:0;
  }  
  input,textarea,button{
    font-family:  Yekan-Bakh-FaN-Regular;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  `;
export default GlobalStyles;
