import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { makeStyles, Box } from '@material-ui/core/'
import { getNewRepositories } from '../../store/thunk'
import { Sidebar, Cards, Header } from '../../components'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: '60px',
    paddingRight: '60px',
    backgroundColor: `${theme.colors.themeColor}`,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  content: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}))

export default function Dashboard() {
  const classes = useStyles()
  const [query, setQuery] = useState(null)
  const dispatch = useDispatch()
  const { repositories } = useSelector(({ repositories }) => ({
    repositories: repositories.myRepositories.list,
  }))

  useEffect(() => {
    if (query) {
      dispatch(getNewRepositories(query))
    }
  }, [query, dispatch])

  useEffect(() => {
    if (query) {
      const searchHistory = JSON.parse(localStorage.getItem('searchHistory'))
      if (!searchHistory) {
        localStorage.setItem('searchHistory', JSON.stringify([query]))
      } else {
        searchHistory.length === 5
          ? (() => {
              searchHistory.shift()
              searchHistory.push(query)
            })()
          : searchHistory.push(query)
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory))
      }
    }
  }, [query])

  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.content} pt={4}>
        <Sidebar setQuery={setQuery} />
        <Cards repositories={repositories?.items} />
      </Box>
    </Box>
  )
}
