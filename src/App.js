import React from 'react';
import './App.css';
import { PortfolioPageDataStore } from './data/DataStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ProjectsConnector } from './pages/ProjectsConnector'
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Provider store={PortfolioPageDataStore}>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsConnector} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
