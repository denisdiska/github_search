import Actions from '../rootActions'
import api from '../../utils/api'
import endpoint from '../../constants/endpoint'

export const getNewRepositories = (query, page, sort, order) => {
  return async dispatch => {
    try {
      dispatch(Actions.repositories.getRepositories())
      const per_page = 20

      const resp = await api.get(endpoint.repositoriesSearch(query, page, per_page, sort, order))
      dispatch(Actions.repositories.getRepositoriesSuccess(resp))
    } catch (error) {
      dispatch(Actions.repositories.getRepositoriesError(error))
    }
  }
}

export default getNewRepositories
