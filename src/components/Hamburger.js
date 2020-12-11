import React from 'react';
import styled from 'styled-components';
import { device } from './devices'

const IconContainer = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 18px;
  cursor: pointer;
  z-index: 5;

  & .bar {
    position: absolute;
    width: 25px;
    height: 4px;
    background-color: #FFF;
    border: 0 solid transparent;
    border-radius: 4px;
    transition: 0.3s ease-in
  }

  & .bar1 {
    top: 0;
  }

  & .bar2 {
    top: 50%;
    transform: translateY(-50%);
  }

  & .bar3 {
    top: 100%;
    transform: translateY(-100%);
  }

  &.active {
    & .bar1 {
      top: 50%;
      transform: rotate(-45deg);
    }
    & .bar2 {
      opacity: 0;
    }
    & .bar3 {
      top: 50%;
      transform: rotate(45deg);
    }
  }

  @media ${device.smallScreen} {
    display: block;
  }
`

export const Hamburger = (props) => {
  return (
    <>
      <IconContainer onClick={props.click}
        className={props.isActive ? 'active' : ''}>
        <span className="bar bar1"></span>
        <span className="bar bar2"></span>
        <span className="bar bar3"></span>
      </IconContainer>
    </>
  )
}