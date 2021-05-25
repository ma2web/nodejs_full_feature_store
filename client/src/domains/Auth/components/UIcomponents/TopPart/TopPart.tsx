import React from 'react'
import useTopPartStyle from './useTopPartStyle'

const TopPart = ({ children }) => {
  const classes = useTopPartStyle()

  return <div className={classes.TopPart}>{children}</div>
}

export default TopPart
