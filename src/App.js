import React, { useState } from 'react';
import './App.css';
import { PortfolioPageDataStore } from './data/DataStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ProjectsConnector } from './components/ProjectsConnector'
import { HomePage } from './components/HomePage';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Theme'

function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Provider store={PortfolioPageDataStore}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage {...props} themeToggle={themeToggler} theme={theme} />)} />
            <Route path="/projects" render={props => <ProjectsConnector {...props} themeToggle={themeToggler} theme={theme} />} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
