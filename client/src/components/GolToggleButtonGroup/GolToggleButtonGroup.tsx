import React, { ReactNode, forwardRef } from 'react'
import { Button, ButtonProps } from '@material-ui/core'
import cs from 'classnames'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import useStyle from './useGolToggleButtonGroup.style'

export type IGolToggleButtonGroupSize = 'large' | 'medium' | 'small'
export type IGolToggleButtonGroupOrientation = 'horizontal' | 'vertical'

export interface IGolToggleButtonGroupProps {
  value: any
  exclusive: boolean
  children?: ReactNode
  className?: string
  size?: IGolToggleButtonGroupSize
  onChange?: (event: any, value: any) => void
  orientation?: IGolToggleButtonGroupOrientation
  classes?: Partial<Record<'root' | 'tick', string>>
  'data-testid'?: string
}

const GolToggleButtonGroup = forwardRef<any, IGolToggleButtonGroupProps>(
  (
    {
      value,
      exclusive,
      children,
      className,
      size,
      onChange,
      orientation,
      classes: externalClasses,
      'data-testid': dataCy,
    },
    ref,
  ) => {
    const styles = useStyle({ classes: externalClasses })

    return (
      <ToggleButtonGroup
        ref={ref}
        {...{
          value,
          exclusive,
          children,
          className,
          size,
          onChange,
          orientation,
          'data-testid': dataCy,
          classes: {
            ...styles,
            root: cs(styles.root, externalClasses?.root),
          },
        }}
      >
        {children}
      </ToggleButtonGroup>
    )
  },
)

GolToggleButtonGroup.displayName = 'GolToggleButtonGroup'
GolToggleButtonGroup.defaultProps = {
  size: 'medium',
  exclusive: false,
  orientation: 'horizontal',
}

export default GolToggleButtonGroup
