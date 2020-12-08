import { applyMiddleware, createStore } from 'redux'
import { ProjectsReducer } from './ProjectsReducer'
import { asyncActions } from './AsyncMiddleware'

export const PortfolioPageDataStore = createStore(
  ProjectsReducer,
  applyMiddleware(asyncActions)
)