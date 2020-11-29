import { createStore } from 'redux'
import { ProjectsReducer } from './ProjectsReducer'

export const PortfolioPageDataStore = createStore(ProjectsReducer)