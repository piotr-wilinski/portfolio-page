import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../data/ActionCreators'
import { DataTypes } from '../data/Types'
import { Projects } from './Projects'
import { Header } from './Header';

const mapStateToProps = dataStore => ({
  ...dataStore
})

const mapDispatchToProps = {
  loadData
}

const showProjects = (projects = []) => (
  projects
)

export const ProjectsConnector = connect(mapStateToProps, mapDispatchToProps)((props) => {
  useEffect(() => {
    props.loadData(DataTypes.PROJECTS)
  }, [props])

  return (
    <>
      <Header themeToggle={props.themeToggle} theme={props.theme} />
      <Switch>
        <Route path='/projects'
          render={(routeProps) =>
            <Projects {...props} {...routeProps}
              projects={showProjects(props.projects)}
            />} />
        <Redirect to='/' />
      </Switch>
    </>
  )
})