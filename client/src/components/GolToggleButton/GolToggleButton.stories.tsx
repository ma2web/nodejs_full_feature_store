import { Meta } from '@storybook/react/types-6-0'
import React, { FC, useState } from 'react'
import GolToggleButton from './GolToggleButton'
import GolToggleButtonGroup from '../GolToggleButtonGroup'

export interface IGolToggleButtonGroupStory {
  onClick(event: any): void
}
export const Default: FC<IGolToggleButtonGroupStory> = ({ onClick }) => {
  const [alignment, setAlignment] = React.useState('left')
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }
  return (
    <GolToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <GolToggleButton value="left" aria-label="left aligned">
        left
      </GolToggleButton>
      <GolToggleButton value="center" aria-label="centered">
        center
      </GolToggleButton>
      <GolToggleButton value="right" aria-label="right aligned">
        right
      </GolToggleButton>
      <GolToggleButton value="justify" aria-label="justified" disabled>
        justify
      </GolToggleButton>
    </GolToggleButtonGroup>
  )
}

const argTypes = {
  onClick: { action: 'onClick' },
}

export default {
  component: Default,
  title: 'ToggleButton',
  argTypes,
} as Meta
