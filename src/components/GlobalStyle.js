import styled, { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
   display: flex;
   flex-direction:column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
 }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Error = styled.div`
  color: white;
  margin: 20px;
`;
