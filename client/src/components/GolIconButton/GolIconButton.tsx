import React, { FC } from 'react'
import { IconButton, IconButtonProps } from '@material-ui/core'
import makeStyles from './GolIconButton.style'
import { IGolButtonVariant } from '../GolButton/GolButton'
import cs from 'classnames'

export interface IGolIconButton extends IconButtonProps {
  variant?: IGolButtonVariant
  className?: string | undefined
  children?: React.ReactNode
  shape?: 'circle' | 'square'
  hasNeutral?: boolean
}

const optionSelector = (
  defArg: string,
  options: { [key in IGolButtonVariant]?: string },
  key?: IGolButtonVariant,
) => {
  if (!key) {
    return defArg
  }
  const result = options[key]
  return !!result ? result : defArg
}

const GolIconButton: FC<IGolIconButton> = ({
  variant,
  hasNeutral,
  shape,
  className,
  color,
  children,
  ...props
}) => {
  const classes = makeStyles({ variant, shape })
  const neutralStyle = optionSelector(
    classes.textNeutral,
    {
      contained: classes.containedNeutral,
      outlined: classes.outlinedNeutral,
      text: classes.textNeutral,
    },
    variant,
  )

  return (
    <IconButton
      type="submit"
      className={cs('GolIconButton', className, { [neutralStyle]: hasNeutral })}
      color={hasNeutral ? undefined : color}
      classes={{
        root: classes.root,
        colorSecondary: classes.colorSecondary,
        colorPrimary: classes.colorPrimary,
      }}
      {...props}
    >
      {children}
    </IconButton>
  )
}

GolIconButton.displayName = 'GolIconButton'
GolIconButton.defaultProps = {
  variant: 'contained',
  color: 'secondary',
  shape: 'square',
}

export default GolIconButton
