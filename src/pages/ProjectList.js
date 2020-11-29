import React, { useState } from 'react';
import { ProjectItem } from './ProjectItem';

export const ProjectList = props => {
  const [showPop, setShowPop] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)



  if (props.projects == null || props.projects.length === 0) {
    return <h5 className="p-2">Brak projektów</h5>
  }

  const showProject = (id) => {
    setSelectedItem(id)
    if (selectedItem === id) {
      setShowPop(!showPop)
    }
  }

  return props.projects.map(p =>
    <div>
      <div className="card m-1 p-1 bg-light" key={p.id}>
        <h4>
          {p.name}
        </h4>
        <button className="btn btn=primary m-2"
          onClick={() => showProject(p.id)}
        >
          Więcej
        </button>
      </div>
      {showPop ? <ProjectItem
        imgLarge={p.imgLarge}
        name={p.name}
        description={p.description}
      /> : null}
    </div>
  )
}