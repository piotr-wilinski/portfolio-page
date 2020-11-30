import React from 'react';
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';

const NavHeader = styled.div`
  height: 50px;
  width: 100vw;
  background: #333;
  color: #fff;
`

const NavBar = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  width: 30%
`

const Menu = styled.div`
  display: flex;
  justify-content: right;
`

const StyledLink = styled(NavLink)`
  display: block;
  margin: 13px 30px;
  color: #EEE;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s ease-in;

  &.active {
    color: #3882F2;
  }

  &:hover {
    color: #3882F2;
    text-decoration: none;
  }

  
`

const ThemeChanger = styled.span`
  display: block;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin-left: 30px;

  .fa {
    cursor: pointer;
    color: #EEE;
    transition: 0.3s ease-in;

    &.active {
      color: #3882F2;
    }

    &:hover {
      color: #3882F2;
    }
  }
`

export const Header = (props) => {
  return (
    <NavHeader>
      <NavBar>
        <Title>devIt</Title>
        <Menu>
          <StyledLink exact to='/'>Home</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
          <StyledLink to='/projects'>Projects</StyledLink>
          <ThemeChanger>
            <i onClick={props.themeToggle}
              className={props.theme === "light" ? "fa fa-adjust" : "fa fa-adjust active"}>
            </i></ThemeChanger>
        </Menu>
      </NavBar>
    </NavHeader>
  )
}