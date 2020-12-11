import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    position: relative;
    overflow-x: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: auto;
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Open Sans', Tahoma, sans-serif;
    transition: all 0.5s linear;
  }
`