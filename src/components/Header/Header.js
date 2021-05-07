import React from 'react'

import { Box, Typography, makeStyles } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '45px',
    paddingBottom: '30px',
    borderBottom: `1px solid ${theme.colors.cream}`,
    color: `${theme.colors.cream}`,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center',
    },
  },
  content: {
    color: `${theme.colors.cream}`,
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '20px',
    },
  },
}))
export default function Header() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.content}>
        <Typography variant="h1">requestum</Typography>
        <Typography variant="h5" fontWeight="light">
          web development company
        </Typography>
      </Box>
      <Typography variant="h5" fontWeight="light">
        Github users search app
      </Typography>
    </Box>
  )
}
