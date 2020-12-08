import React from 'react';
import { ProjectList } from './ProjectList'
import { HeaderText } from './MultiUsedStyledComponents'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
`

export const Projects = props => {
  const { t } = useTranslation()

  return (
    <div>
      <HeaderText>{t('projects.title')}</HeaderText>
      <CardsContainer>
        <ProjectList projects={props.projects} theme={props.theme} />
      </CardsContainer>
    </div>
  )
}