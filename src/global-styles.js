import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  .img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.02);
    box-shadow: inset -0.5px 0px 0px rgba(0, 0, 0, 0.07),
      inset -1px 0px 0px rgba(0, 0, 0, 0.02),
      inset 1px 0px 0px rgba(0, 0, 0, 0.02),
      inset 0.5px 0px 0px rgba(0, 0, 0, 0.07);
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #a9a9a9;
    border-radius: 4px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: darken(#a9a9a9, 10%);
  }
`;

export default GlobalStyle;