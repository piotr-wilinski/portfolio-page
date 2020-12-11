import React, { useState } from 'react';
import { ProjectItem } from './ProjectItem';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import { device } from './devices';

const Img = styled.img`
  width: 100%;
  height: auto;
  transition: 0.3s ease-in;
`

const HeaderText = styled.h4`
  position: absolute;
  top: 33%;
  transform: translateX(-100%);
  width: 100%;
  text-align: center;
  opacity: 0;
  overflow: hidden;
  font-weight: bold;
  transition: 0.3s ease-in;
`

const Button = styled.button`
  box-sizing: border-box;
  position: absolute;
  bottom: 33%;
  left: 50%;
  padding: 10px 15px;
  transform: translateX(150%);
  opacity: 0;
  text-transform: uppercase;
  border: 1px solid #3882F2;
  color: #3882F2;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.3s ease-in, background-color 0.2s ease-in, color 0.2s ease-in;
`

const Card = styled.div`
  width: 33.33333333333%;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 70px 0 rgba(0, 0, 0, .4);

  &:hover > ${Img} {
    opacity: 10%;
  }

  &:hover > ${HeaderText} {
    transform: translateX(0%);
    opacity: 1;
  }

  &:hover > ${Button} {
    transform: translateX(-50%);
    opacity: 1;
  }

  @media ${device.smallScreen} {
    width: 50%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

export const ProjectList = props => {
  const [showPop, setShowPop] = useState(false)
  const [key, setKey] = useState(null)
  const [hovered, setHovered] = useState(false)

  const { t } = useTranslation()

  if (props.projects == null || props.projects.length === 0) {
    return <h5 className="p-2">{t('projects.noProjects')}</h5>
  }

  const toggleShowProject = (id) => {
    setShowPop(!showPop)
    setKey(id)
  }

  return props.projects.slice(0).reverse().map((p, index) =>
    <Card key={p.id} bgImage={p.imgSmall}>
      <Img src={p.imgSmall} alt={p.name} />
      <HeaderText>
        {p.name}
      </HeaderText>
      <Button onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={hovered ? { background: "#3882F2", color: "#FFF" } : {}}
        onClick={() => toggleShowProject(index)}
      >
        {t('projects.cta')}
      </Button>
      {(showPop && key === index)
        ? <ProjectItem
          active={showPop}
          key={index}
          img={p.imgLarge}
          close={toggleShowProject}
          name={p.name}
          descriptionPL={p.descriptionPL}
          descriptionEN={p.descriptionEN}
          techs={p.technologies}
          link={p.url}
          github={p.githubUrl}
        />
        : null}
    </Card>
  )
}