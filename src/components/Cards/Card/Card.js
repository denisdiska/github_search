import React from 'react'

import PropTypes from 'prop-types'
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    width: '49%',
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      width: 'unset',
    },
  },
  name: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  description: {
    fontSize: '16px',
  },
  language: {
    fontSize: '16px',
  },
}))

export default function CardComponent({ name, description, language }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.language}>
          Language: <b>{language}</b>
        </Typography>
        <Typography className={classes.description}>
          Description: <b>{description}</b>
        </Typography>
      </CardContent>
    </Card>
  )
}

CardComponent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
}
