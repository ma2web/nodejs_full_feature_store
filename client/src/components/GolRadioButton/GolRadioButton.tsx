import React, { FC, useState } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import useStyles from './GolRadioButton.styles'
export interface IGolRadioButtonProps {
  radios?: any
  color: 'primary' | 'secondary'
  horizontalPlacement: boolean
  onChange: any
  value
  defaultValue
}

const GolRadioButton: FC<IGolRadioButtonProps> = (props) => {
  const {
    radios,
    color,
    horizontalPlacement,
    onChange,
    value,
    defaultValue,
  } = props
  const classes = useStyles(props)

  return (
    <FormControl component="fieldset" className={classes.root}>
      <RadioGroup
        defaultValue={defaultValue}
        value={value}
        row={horizontalPlacement}
        aria-label="position"
        name="position"
        onChange={onChange}
      >
        {radios?.map((el, index) => (
          <FormControlLabel
            key={index}
            control={
              <Radio
                disabled={el?.disabled}
                value={el?.value}
              />
            }
            label={el?.label}
            labelPlacement={el?.labelPlacement}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default GolRadioButton
