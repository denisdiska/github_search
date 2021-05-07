import { createActionCreators, createReducerFunction, ImmerReducer } from 'immer-reducer'

import { PROGRESS_TYPE } from '../../constants/progressType'

export class repositoriesReducer extends ImmerReducer {
  getRepositories() {
    this.draftState.myRepositories = {
      ...this.draftState.repositories,
      progress: PROGRESS_TYPE.WORK,
    }
  }

  getRepositoriesSuccess(data) {
    this.draftState.myRepositories = {
      list: data,
      progress: PROGRESS_TYPE.SUCCESS,
    }
  }

  getRepositoriesError(error) {
    this.draftState.myRepositories = {
      ...this.draftState.repositories,
      error,
      progress: PROGRESS_TYPE.ERROR,
    }
  }
}

export const repositories = createReducerFunction(repositoriesReducer, {
  myRepositories: {
    list: [],
    progress: PROGRESS_TYPE.IDLE,
  },
})

export const RepositoriesActions = createActionCreators(repositoriesReducer)
export default RepositoriesActions
