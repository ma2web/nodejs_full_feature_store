import React from 'react'
import useBoxStyle from './useBoxStyle'

const Box = (props) => {
  const { children } = props
  const classes = useBoxStyle(props)

  return <div className={classes.Box}>{children}</div>
}

export default Box
