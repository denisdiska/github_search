const ENDPOINT = {
  newOrgs: query => `orgs/${query}`,
  repositoriesSearch: (query, page, per_page, sort, order) =>
    `search/repositories?q=${query}+in:name&${(page, per_page, sort, order)}`,
}

export default ENDPOINT
