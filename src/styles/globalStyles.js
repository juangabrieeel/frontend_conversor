import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #FFFFF;
    color: white;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  h1, h2 {
    margin: 0;
    color: #FFF;
  }

  p {
    color: #999;
  }

  @media (max-width: 768px) {
    body {
      padding: 10px;
    }
  }
`;
