import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { HeaderText } from '../components/MultiUsedStyledComponents'
import { BarChart } from '../components/BarChart'
import { useTranslation } from 'react-i18next'

const AboutContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 100px auto;
  justify-content: center;
`

const AboutMe = styled.div`
  flex-basis: 40%;
  display: flex;
  flex-direction: column;
`

const Skills = styled.div`
  flex-basis: 60%;
`

const Img = styled.img`
  width: 60%;
  height: auto;
  margin: 30px auto;
  border-radius: 50%;
  box-shadow: 0 5px 50px 0 rgba(0, 0, 0, .4);
`

const Title = styled.h3`
  text-align: center;
  font-weight: 700;
  font-size: 1.8em;
`

const Desc = styled.p`
  font-size: 1.1em;
  text-align: center;
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 3em;

  & a {
  color: ${({ theme }) => theme.text};
  }
`

const SkillsTitle = styled.h2`
  margin-top: 60px;
  margin-bottom: 40px !important;
  text-align: center;
  font-weight: 700;
`

export const About = props => {
  const { t } = useTranslation()

  return (
    <>
      <Header themeToggle={props.themeToggle} theme={props.theme} />
      <div>
        <HeaderText>{t('about.title')}</HeaderText>
        <AboutContainer>
          <AboutMe className="mx-5">
            <Img src="/images/selfie_2.png" alt="It's me!" />
            <div>
              <Title className="mb-3">{t('about.intro')}</Title>
              <Desc className="mx-4">
                {t('about.description1')}<br />
                {t('about.description2')}
              </Desc>
            </div>
            <LinksContainer className="mx-5 px-4">
              <a href="https://www.linkedin.com/in/piotr-wili%C5%84ski-930374170/" _target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/piotr-wilinski"><i className="fab fa-github-square"></i></a>
              <a href="/"><i className="fas fa-file"></i></a>
            </LinksContainer>
          </AboutMe>
          <Skills>
            <SkillsTitle className='mb-3'>{t('about.skills')}</SkillsTitle>
            <BarChart />
          </Skills>
        </AboutContainer>
      </div>
    </>
  )
}