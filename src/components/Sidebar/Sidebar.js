import React from 'react'

import { DebounceInput } from 'react-debounce-input'
import { makeStyles, Box, List, Typography } from '@material-ui/core/'
import PropTypes from 'prop-types'
import { SearchHistory } from '../SearchHistory'

const useStyles = makeStyles(theme => ({
  root: {
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: 'unset',
      paddingRight: '0px',
    },
  },
  input: {
    width: '100%',
    borderRadius: '16px',
    border: `1px solid ${theme.colors.darkBone}`,
    padding: '8px',
    outline: 'none',
    fontSize: '18px',
  },
  title: {
    marginTop: '30px',
    color: 'white',
  },
  ul: {
    color: 'white',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '30px',
    },
  },
}))
export default function Sidebar({ setQuery }) {
  const classes = useStyles()

  const searchHistory = JSON.parse(localStorage.getItem('searchHistory'))
  return (
    <Box className={classes.root} textAlign="left" pr={5}>
      <DebounceInput
        minLength={2}
        debounceTimeout={1000}
        onFocus={() => console.log()}
        onChange={event => setQuery(event.target.value)}
        className={classes.input}
      />
      <Typography className={classes.title}>Search history: </Typography>
      {searchHistory && (
        <List className={classes.ul}>
          {searchHistory?.map((el, ind) => (
            <SearchHistory key={ind} el={el} />
          ))}
        </List>
      )}
    </Box>
  )
}

Sidebar.propTypes = {
  setQuery: PropTypes.func,
}
