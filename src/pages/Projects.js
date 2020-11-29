import React from 'react';
import { ProjectList } from './ProjectList'

export const Projects = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-2">
          <ProjectList projects={props.projects} />
        </div>
      </div>
    </div>
  )
}