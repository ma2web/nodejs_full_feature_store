import React from 'react'
import { Typography } from '@material-ui/core'
import useTitleStyle from './useTitleStyle'

const Title = ({ children }) => {
  const classes = useTitleStyle()

  return (
    <div className={classes.title}>
      <Typography variant="h3">{children}</Typography>
    </div>
  )
}

export default Title
