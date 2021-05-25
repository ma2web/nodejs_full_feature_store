import { Meta } from '@storybook/react/types-6-0'
import { ReactComponent as Icon } from 'assets/images/icons/UI/Like.svg'
import React, { FC } from 'react'
import GolIconButton from './GolIconButton'

interface IGolIconButtonStory {
  disabled?: boolean
  hasNeutral?: boolean
  variant?: 'contained' | 'outlined' | 'text'
  color?: 'primary' | 'secondary'
  shape?: 'circle' | 'square'
  'data-testid'?: string
}
export const Default: FC<IGolIconButtonStory> = (props) => (
  <GolIconButton {...props}>
    <Icon />
  </GolIconButton>
)

const typeInlineRadio = 'inline-radio'
const argTypes = {
  disabled: { control: 'boolean', defaultValue: false },
  hasNeutral: { control: 'boolean', defaultValue: false },
  variant: {
    control: {
      type: typeInlineRadio,
      options: ['contained', 'outlined', 'text'],
    },
    defaultValue: 'contained',
  },
  color: {
    control: {
      type: typeInlineRadio,
      options: ['primary', 'secondary'],
    },
    defaultValue: 'primary',
  },
  shape: {
    control: {
      type: typeInlineRadio,
      options: ['circle', 'square'],
    },
    defaultValue: 'square',
  },
}

export default {
  component: Default,
  title: 'Buttons/IconButton',
  argTypes,
} as Meta
