import React from 'react'

import { makeStyles, Box } from '@material-ui/core/'
import PropTypes from 'prop-types'
import { CardComponent } from './Card'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '70%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: 'unset',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}))

export default function Cards({ repositories }) {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {repositories?.map((el, ind) => (
        <CardComponent key={ind} {...el} />
      ))}
    </Box>
  )
}

Cards.propTypes = {
  repositories: PropTypes.array,
}
