import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import { device } from './devices'
import { Hamburger } from './Hamburger';
import { DivClickableBackground } from './MultiUsedStyledComponents'

const NavHeader = styled.div`
  height: 54px;
  width: 100%;
  background: #222;
  color: #fff;

  @media ${device.mobile} {
    height: 66px;
  }
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
  width: 23%;

  @media ${device.mobile} {
    width: 35%;
    margin-left: 15px;
  }
`

const Upper = styled.h1`
  font-size: 1.8em;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  margin: 4px 0 -4px;

  @media ${device.mobile} {
    font-size: 2em;
  }
`

const Bottom = styled.h2`
  font-size: 0.77em;
  text-align: center;

  @media ${device.mobile} {
    font-size: 0.9em;
  }
`

const Menu = styled.div`
  display: flex;
  justify-content: right;
  font-size: 0.95em;

  @media ${device.smallScreen} {
    flex-direction: column;
    position: absolute;
    top: 54px;
    right: 0;
    width: 25%;
    height: calc(100vh - 54px);
    background: #333;
    font-size: 1.05em;
    z-index: 6;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    &.active {
      transform: translateX(0%);
    }
  }

  @media ${device.tablet} {
    width: 50%;
    font-size: 1.2em;
  }

  @media ${device.mobile} {
    top: 66px;
    width: 75%;
    height: calc(100vh - 66px);
  }
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

  @media ${device.smallScreen} {
    width: 30px;
    margin: 15px 15px 15px 30px;
  }
`

const LanguageChanger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 30px;

  & button {
    display: inline-block;
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

  @media ${device.smallScreen} {
    width: 30px;
    margin: 15px 50px;
    flex-direction: row;

    & button {
      font-size: 0.9em;
    }
  }
`

export const Header = (props) => {
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <NavHeader>
        <NavBar>
          <Title>
            <StyledLink exact={true} to='/'>
              <Upper>devIT</Upper>
              <Bottom>Piotr WILIŃSKI</Bottom>
            </StyledLink>
          </Title>
          <Menu className={isMenuOpen ? "active" : ""} >
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
          <Hamburger isActive={isMenuOpen}
            click={() => setIsMenuOpen(true)} />
        </NavBar>
      </NavHeader>
      {isMenuOpen ?
        <DivClickableBackground onClick={() => setIsMenuOpen(false)} /> : null
      }
    </>
  )
}