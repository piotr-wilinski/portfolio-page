import styled from 'styled-components';

export const HeaderText = styled.h2`
  margin: 1.5em 0 3.5em;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.5px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 30%;
    right: 30%;
    top: 150%;
    height: 2px;
    opacity: 0.2;
    background-color: #2659A6
  }
`