import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { HeaderText } from '../components/MultiUsedStyledComponents'

const ServicesContainer = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`

const SubHeader = styled.h4`
  text-align: center;
  // color: ${({ theme }) => theme.mainColorTheme};
  font-weight: 600;
`

const OfferContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  margin: 70px auto;
`

const Offer = styled.div`
  display: flex;
  justify-content: center;

  & img {
    width: 50%;
    height: auto;
    background: #FFF;
    transition: 0.2s ease-in;
    box-shadow: 0 15px 70px 0 rgba(0, 0, 0, .4);

    &:hover {
      opacity: 0.8;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: center;

    &:nth-child(2) {
      color: ${({ theme }) => theme.secondaryColorTheme};
    }

    &:nth-child(1) {
      color: ${({ theme }) => theme.mainColorTheme};
    }

    & h5 {
      margin: 0 1em 1.5em;
      font-weight: 600;
    }

    & p {
      margin: 0 1em;
    }
  }
`

const LastWord = styled(SubHeader)`
  margin: 2.5em auto 0;
  position: relative;
  font-size: 1.4em;
  width: 90%;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 5%;
    right: 5%;
    top: 130%;
    height: 5px;
    opacity: 0.8;
    background-color: ${({ theme }) => theme.secondaryColorTheme};
  }
`

export const Services = props => {
  const { t } = useTranslation()

  return (
    <>
      <Header themeToggle={props.themeToggle} theme={props.theme} />
      <ServicesContainer>
        <HeaderText>{t('services.title')}</HeaderText>
        <SubHeader>{t('services.question')}</SubHeader>
        <OfferContainer>
          <Offer>
            <img src="/images/websites.jpg" alt="Strony internetowe" />
            <div>
              <h5>{t('services.offerHeadline1')}</h5>
              <p>{t('services.offerDesc1')}</p>
            </div>
          </Offer>
          <Offer>
            <div>
              <h5>{t('services.offerHeadline2')}</h5>
              <p>{t('services.offerDesc2')}</p>
            </div>
            <img src="/images/seo.jpg" alt="Strony internetowe" />
          </Offer>
          <Offer>
            <img src="/images/work-from-home.jpeg" alt="Strony internetowe" />
            <div>
              <h5>{t('services.offerHeadline3')}</h5>
              <p>{t('services.offerDesc3')}</p>
            </div>
          </Offer>
          <LastWord>{t('services.summary')}</LastWord>
        </OfferContainer>
      </ServicesContainer>
    </>
  )
}