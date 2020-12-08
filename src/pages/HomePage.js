import React from 'react';
import { Header } from '../components/Header';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'

const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/images/webdesign.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  opacity: 0.7;
  filter: blur(1px)
`

const BlackBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #111;
  z-index: -2;
`

const HeadlineContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #DDD;
`

const Headline = styled.h2`
  font-size: 2.7em;
  text-shadow: 0 2px 5px #000;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 0.7em;
`

const SubHeadline = styled.h4`
  text-shadow: 0 2px 5px #000;
  text-align: center;
  letter-spacing: 1px;
  padding-bottom: 0.5em;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 0;
    background-color: #3882F2;
    z-index: 1;
    transition: .3s;
  }

  &:hover::after {
    width: 70%;
  }
`

export const HomePage = (props) => {
  const { t } = useTranslation()

  return (
    <>
      <Header themeToggle={props.themeToggle} theme={props.theme} />
      <BlackBackground />
      <Banner />
      <HeadlineContainer>
        <Headline>{t('homepage.title')}</Headline>
        <SubHeadline>{t('homepage.subtitle')}</SubHeadline>
      </HeadlineContainer>
    </>
  )
}