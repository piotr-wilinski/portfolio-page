import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';

const NavHeader = styled.div`
  height: 54px;
  width: 100%;
  background: #222;
  color: #fff;
`

const NavBar = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'ABeeZee', sans-serif;
`

const Title = styled.div`
  width: 25%;
`

const Upper = styled.h1`
  font-size: 1.8em;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 4px 0 -4px;
`

const Bottom = styled.h2`
  font-size: 0.77em;
  text-align: center;
`

const Menu = styled.div`
  display: flex;
  justify-content: right;
  font-size: 0.95em;
`

const StyledNavLink = styled(NavLink)`
  display: block;
  margin: 15px 30px;
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

const StyledLink = styled(Link)`
  color: #FFF;

  &:hover {
    text-decoration: none;
    color: #FFF;
  }
`

const ThemeChanger = styled.span`
  display: block;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0 15px 0 30px;

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

const LanguageChanger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 30px;

  & button {
    display: block;
    background-color: transparent;
    border: 1px solid #FFF;
    padding: 1px 8px;
    font-size: 0.7em;
    color: #EEE;
    letter-spacing: 1px;
    transition: 0.2s ease-in;
  }

  & button.active {
    background-color: #FFF;
    color: #2659A6;
  }
`

export const Header = (props) => {
  const { t, i18n } = useTranslation()

  return (
    <NavHeader>
      <NavBar>
        <Title>
          <StyledLink exact={true} to='/'>
            <Upper>devIT</Upper>
            <Bottom>Piotr WILIŃSKI</Bottom>
          </StyledLink>
        </Title>
        <Menu>
          <StyledNavLink exact to='/'>Home</StyledNavLink>
          <StyledNavLink to='/about'>{t('header.about')}</StyledNavLink>
          <StyledNavLink to='/projects'>{t('header.projects')}</StyledNavLink>
          <StyledNavLink to='/services'>{t('header.services')}</StyledNavLink>
          <StyledNavLink to='/contact'>{t('header.contact')}</StyledNavLink>
          <ThemeChanger>
            <i onClick={props.themeToggle}
              className={props.theme === "light" ? "fa fa-adjust" : "fa fa-adjust active"}>
            </i></ThemeChanger>
          <LanguageChanger>
            <button className={i18next.language === 'pl' ? 'active' : ''} onClick={() => i18n.changeLanguage('pl')}>pl</button>
            <button className={i18next.language === 'en' ? 'active' : ''} onClick={() => i18n.changeLanguage('en')}>en</button>
          </LanguageChanger>
        </Menu>
      </NavBar>
    </NavHeader>
  )
}