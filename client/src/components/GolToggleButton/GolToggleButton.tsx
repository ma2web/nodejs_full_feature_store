import React, { ReactNode, forwardRef } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import cs from 'classnames'

import useStyle from './GolToggleButton.style'

export interface IGolToggleButtonProps {
  value: any
  disabled?: boolean
  children?: ReactNode
  disableRipple?: boolean
  disableFocusRipple?: boolean
  className?: string
  selected?: boolean
  style?: Record<string, unknown>
  classes?: Partial<Record<'root' | 'tick', string>>
  onChange?: (value: any) => void
  'data-testid'?: string
}

const GolToggleButton = forwardRef<any, IGolToggleButtonProps>(
  (
    {
      value,
      disabled,
      children,
      disableRipple,
      disableFocusRipple,
      className,
      selected,
      style,
      classes: externalClasses,
      onChange,
      'data-testid': dataCy,
    },
    ref,
  ) => {
    const styles = useStyle({ classes: externalClasses })

    return (
      <ToggleButton
        ref={ref}
        {...{
          value,
          disabled,
          children,
          disableRipple,
          disableFocusRipple,
          className,
          selected,
          style,
          onChange,
          'data-testid': dataCy,
          classes: {
            ...styles,
            root: cs(styles.root, externalClasses?.root),
          },
        }}
      >
        {children}
      </ToggleButton>
    )
  },
)

GolToggleButton.displayName = 'GolToggleButton'
GolToggleButton.defaultProps = {}

export default GolToggleButton
