import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import i18next from 'i18next';
import { Button, DivClickableBackground } from './MultiUsedStyledComponents'
import { device } from './devices';

const DivPopup = styled.div`
  position: fixed;
  top: 6%;
  left: 50%;
  width: 90%;
  max-width: 750px;
  transform: translateX(-50%);
  border: 1px solid black;
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 25px 90px 10px rgba(0, 0, 0, .4);
  z-index: 6;

  @media ${device.tablet} {
    width: 99%;
    top: 10px;
    height: 200vh;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
`

const Close = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
  font-size: 1.6em;
  text-align: center;
  cursor: pointer;
  color: #BFBFBF;
  transition: color 0.2s ease-in;
  z-index: 2;

  &:hover {
    color: #E6E6E6;
  }
`

const Img = styled.img`
  width: 100%;
  height: auto;
  z-index: 1;
  border-bottom: 2px solid #2659A6;
`

const H3 = styled.h3`
  border-bottom: 1px solid #E6E6E6;
`

const Paragraph = styled.p`
  border-bottom: 1px solid #E6E6E6;
`

const SpanContainer = styled.span`
  display: block;
  color: ${({ theme }) => theme.mainColorTheme};
  font-weight: bold;
  font-size: 0.8em;
`

const ButtonSecondary = styled(Button)`
  background-color: ${({ theme }) => theme.body};
  
  .children {
    color: ${({ theme }) => theme.mainColorTheme};
  }

  &:hover {
    background-color: ${({ theme }) => theme.mainColorTheme};

    .children {
      color: #FFF;
    }
  }
`

export const ProjectItem = props => {
  const { t } = useTranslation()

  return (
    <>
      <DivPopup>
        <Close onClick={props.close}><i className="fa fa-times"></i></Close>
        <Img src={props.img} alt={props.name} />
        <H3 className="m-4 pt-2 pb-3">{props.name}</H3>
        <Paragraph className="mx-4 pb-3">{i18next.language === 'pl' ? props.descriptionPL : props.descriptionEN}</Paragraph>
        <SpanContainer className="mx-4 mb-4">
          {props.techs.map(tech =>
            <span className="mr-2">{tech}</span>
          )}
        </SpanContainer>
        {props.link ?
          <Button className="ml-4 mb-3"><a target="_blank" rel="noreferrer" className="children" href={props.link}><i className="fas fa-external-link-alt"></i> {t('projects.popup.cta1')}</a></Button>
          : null}
        {props.github ?
          <ButtonSecondary className="ml-4 mb-3"><a target="_blank" rel="noreferrer" className="children" href={props.github}><i className="fab fa-github"></i> {t('projects.popup.cta2')}</a></ButtonSecondary>
          : null
        }
      </DivPopup>
      <DivClickableBackground onClick={props.close} />
    </>
  )
}