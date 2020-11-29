import React from 'react';
import styled from 'styled-components';

const DivPopup = styled.div`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: #fff;
`

export const ProjectItem = props => {
  return (
    <DivPopup>
      <img src={props.imgLarge} alt="" />
      <h4>{props.name}</h4>
      <p>{props.description}</p>
    </DivPopup>
  )
}