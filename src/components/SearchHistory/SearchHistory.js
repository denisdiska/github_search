import React from 'react'
import { ListItem, makeStyles } from '@material-ui/core/'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0px',
  },
}))

export default function SearchHistory({ el }) {
  const classes = useStyles()
  return (
    <ListItem variant="h6" className={classes.root} disableGutters={true}>
      {el}
    </ListItem>
  )
}

SearchHistory.propTypes = {
  el: PropTypes.string,
}
