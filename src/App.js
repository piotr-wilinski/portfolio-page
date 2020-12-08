import React, { Suspense, useState } from 'react';
import './App.css';
import { PortfolioPageDataStore } from './data/DataStore'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ProjectsConnector } from './pages/ProjectsConnector'
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Theme'

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Provider store={PortfolioPageDataStore}>
          <Router>
            <Switch>
              <Route
                exact={true}
                path="/"
                render={(props) => (
                  <HomePage {...props} themeToggle={themeToggler} theme={theme} />)} />
              <Route path="/about" render={props => <About {...props} themeToggle={themeToggler} theme={theme} />} />
              <Route path="/projects" render={props => <ProjectsConnector {...props} themeToggle={themeToggler} theme={theme} />} />
              <Route path="/services" render={props => <Services {...props} themeToggle={themeToggler} theme={theme} />} />
              <Route path="/contact" render={props => <Contact {...props} themeToggle={themeToggler} theme={theme} />} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </Provider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
