import { css } from '@emotion/core';
import { theme } from './theme';

export default css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: 'nunito', sans-serif;
    color: ${theme.colors.fontDefault};
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    height: 100%;
    font-size: 1.5rem;
    overflow: hidden;
  }
  #root {
    display: flex;
    height: inherit;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  .ReactTable .rt-table {
    overflow: auto;
  }
`;
