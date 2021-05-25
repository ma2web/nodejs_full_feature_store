import { Meta } from '@storybook/react/types-6-0'
import React, { useState, FC } from 'react'
import GolSquareTextField from './GolSquareTextField'

export interface IGolSquareTextFieldStory {}
export const Default: FC<IGolSquareTextFieldStory> = ({}) => {
  const [valueIsHidden, setvalueIsHidden] = useState(true)
  const [value, setvalue] = useState('')

  const handleClickShowValue = () => {
    setvalueIsHidden(!valueIsHidden)
  }

  const handleChange = (event) => {
    // debugger
    setvalue(event.target.value)
    // setValues({ ...values, [prop]: event.target.value })
  }
  return (
    <GolSquareTextField
      handleClickShowValue={() => handleClickShowValue()}
      type="number"
      valueIsHidden={valueIsHidden}
      value={value}
      handleChange={handleChange}
    />
  )
}

const argTypes = {}

export default {
  component: Default,
  title: 'SquareTextField',
  argTypes,
} as Meta
