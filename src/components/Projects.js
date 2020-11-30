import React from 'react';
import { ProjectList } from './ProjectList'
import { HeaderText } from './MultiUsedStyledComponents'
import styled from 'styled-components';

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  max-width: 1000px;
`

export const Projects = props => {
  return (
    <div className="container-fluid">
      <HeaderText>Projects</HeaderText>
      <CardsContainer>
        <ProjectList projects={props.projects} />
      </CardsContainer>
    </div>
  )
}