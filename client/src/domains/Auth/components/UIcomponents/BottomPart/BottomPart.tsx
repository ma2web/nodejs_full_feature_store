import React from 'react'
import useBottomPartStyle from './useBottomPartStyle'

const BottomPart = ({ children }) => {
  const classes = useBottomPartStyle()

  return <div className={classes.BottomPart}>{children}</div>
}

export default BottomPart
