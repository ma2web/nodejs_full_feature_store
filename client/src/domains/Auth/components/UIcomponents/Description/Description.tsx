import React from 'react'
import { Typography } from '@material-ui/core'
import useDescriptionStyle from './useDescriptionStyle'

const Description = ({ children }) => {
  const classes = useDescriptionStyle()

  return (
    <div className={classes.Description}>
      <Typography variant="body2" component="span">
        {children}
      </Typography>
    </div>
  )
}

export default Description
