import { combineReducers } from 'redux'

import { repositories } from './reducer/repositories'

const rootReducer = {
  repositories,
}

export default combineReducers(rootReducer)
