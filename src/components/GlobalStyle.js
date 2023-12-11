import styled, { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
   font-family: 'Manrope', sans-serif;
  background-color: #ffffff;
   display: flex;
   flex-direction:column;
    align-items: center;
    height: 100%
 }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

 h1, h2, h3,h4,h5,h6, p  {
  margin: 0;
  padding: 0;
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

export const SectionContainer = styled.section`
  max-width: 1144px;
  margin: 0 auto;
  padding: 0 40px;
`;
