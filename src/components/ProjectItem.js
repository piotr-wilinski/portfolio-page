import React from 'react';
import styled, { keyframes } from 'styled-components';

const DivPopup = styled.div`
  position: fixed;
  top: 6%;
  left: 50%;
  width: 90%;
  max-width: 750px;
  transform: translateX(-50%);
  border: 1px solid black;
  background-color: #fff;
  z-index: 6
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

const backgroundColor = keyframes`
  0% {
    background-color: rgba(30, 30, 30, 0);
  }
  100% {
    background-color: rgba(30, 30, 30, 0.2);
  }
`

const DivClickableBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  animation: 0.3s ${backgroundColor} ease-out;
  background-color: rgba(30, 30, 30, 0.2);
  z-index: 5;  
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
  color: #357DE6;
  font-weight: bold;
  font-size: 0.8em;
`

const Button = styled.button`
  display: inline-block;
  border: 2px solid #2659A6;
  background-color: #2659A6;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.25s ease-in;

  .children {
    display: inline-block;
    padding: 6px 20px;
    color: #FFF;
    text-decoration: none;
    font-weight: bold;
    transition: 0.25s ease-in;
  }

  &:hover {
    background-color: #FFF;

    .children {
      color: #2659A6;
    }
  }
`

export const ProjectItem = props => {
  return (
    <>
      <DivPopup className="m-2">
        <Close onClick={props.close}><i className="fa fa-times"></i></Close>
        <Img src={props.img} alt={props.name} />
        <H3 className="m-4 pt-2 pb-3">{props.name}</H3>
        <Paragraph className="mx-4 pb-3">{props.description}</Paragraph>
        <SpanContainer className="mx-4 mb-4">
          {props.techs.map(tech =>
            <span className="mr-2">{tech}</span>
          )}
        </SpanContainer>
        <Button className="ml-4 mr-4 mb-3"><a target="_blank" rel="noreferrer" className="children" href={props.link}>Zobacz stronę</a></Button>
        {props.github ?
          <Button className="mr-4 mb-3"><a target="_blank" rel="noreferrer" className="children" href={props.github}>Zobacz github</a></Button>
          : null
        }
      </DivPopup>
      <DivClickableBackground onClick={props.close} />
    </>
  )
}