import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    box-sizing: border-box;
    overflow: visible;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Open Sans', Tahoma, sans-serif;
    transition: all 0.5s linear;
  }
`