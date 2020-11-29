import React from 'react';
import { Link } from 'react-router-dom'
import { ProjectsConnector } from './ProjectsConnector'

export const HomePage = () => {
  return (
    <div>
      <Link to='/projects'>Projects</Link>
    </div>
  )
}