import React, { forwardRef } from 'react'
import useStyles from './GolInputBase.styles'
import { InputBase, InputProps } from '@material-ui/core'

export interface IGolInput extends InputProps {
  value?: string | number
  placeholder?: string
  disabled?: boolean
  onChange?(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ): void
}

const GolInputBase = forwardRef<any, IGolInput>(
  ({ value, onChange, placeholder, ...other }, ref) => {
    const classes = useStyles({})

    return (
      <InputBase
        disabled
        className={[classes.root, 'GolInputBase'].join(' ')}
        data-testid={`${other.id}-inputBase`}
        {...{ value, onChange, placeholder, ref, ...other }}
      />
    )
  },
)

GolInputBase.displayName = 'GolInput'

export default GolInputBase
