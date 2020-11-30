import React, { useState } from 'react';
import { ProjectItem } from './ProjectItem';
import styled from 'styled-components';

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
  position: absolute;
  bottom: 33%;
  left: 50%;
  padding: 10px 15px;
  transform: translateX(150%);
  opacity: 0;
  text-transform: uppercase;
  border: 1px solid #2659A6;
  color: #2659A6;
  border-radius: 4px;
  background-color: transparent;
  transition: all 0.3s ease-in, background-color 0.2s ease-in, color 0.2s ease-in;

  .hovered {
    background-color: #2659A6
    color: #FFF;
  }
`

const Card = styled.div`
  width: 33%;
  position: relative;
  overflow: hidden;

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
`

export const ProjectList = props => {
  const [showPop, setShowPop] = useState(false)
  const [key, setKey] = useState(null)
  const [hovered, setHovered] = useState(false)

  if (props.projects == null || props.projects.length === 0) {
    return <h5 className="p-2">Brak projektów</h5>
  }

  const toggleShowProject = (id) => {
    setShowPop(!showPop)
    setKey(id)
  }

  return props.projects.map((p, index) =>
    <Card key={p.id} bgImage={p.imgSmall}>
      <Img src={p.imgSmall} alt={p.name} />
      <HeaderText>
        {p.name}
      </HeaderText>
      <Button onMouseEnter={() => setHovered(true)} style={hovered ? { background: "#2659A6", color: "#FFF" } : {}} onMouseLeave={() => setHovered(false)}
        onClick={() => toggleShowProject(index)}
      >
        Więcej
        </Button>
      {(showPop && key === index) ? <ProjectItem
        key={index}
        img={p.imgLarge}
        close={toggleShowProject}
        name={p.name}
        description={p.description}
        techs={p.technologies}
        link={p.url}
        github={p.githubUrl}
      /> : null}
    </Card>
  )
}