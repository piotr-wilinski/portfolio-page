import React from 'react';
import { Header } from './Header';

export const HomePage = (props) => {
  return (
    <div>
      <Header themeToggle={props.themeToggle} theme={props.theme} />
    </div>
  )
}