import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  body {
    position: relative;
  }
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
  ul,
  li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`
