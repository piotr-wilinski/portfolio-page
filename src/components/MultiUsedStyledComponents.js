import styled from 'styled-components';

export const HeaderText = styled.h2`
  padding-top: 1.5em;
  margin-bottom: 3em;
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
    background-color: ${({ theme }) => theme.mainColorTheme};
  }
`

export const Button = styled.button`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.mainColorTheme};
  background-color: ${({ theme }) => theme.mainColorTheme};
  cursor: pointer;
  border-radius: 4px;
  transition: 0.25s ease-in;
  color: #FFF;

  .children {
    display: inline-block;
    padding: 6px 20px;
    color: #FFF;
    text-decoration: none;
    font-weight: bold;
    transition: 0.25s ease-in;
  }

  &:hover {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.mainColorTheme};

    .children {
      color: ${({ theme }) => theme.mainColorTheme};
    }
  }
`