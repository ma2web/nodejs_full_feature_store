import { Meta } from '@storybook/react/types-6-0'
import React, { FC } from 'react'
import GolButton from './GolButton'
// import { Add as Icon } from '@material-ui/icons'
import { ReactComponent as DoneIcon } from 'assets/images/icons/Multimedia/Mic.svg'

export interface IGolButtonStory {
  disabled: boolean
  hasNeutral: boolean
  hasStartIcon: boolean
  hasEndIcon: boolean
  ripple: 'animated' | 'simple'
  variant: 'contained' | 'outlined' | 'text'
  color: 'primary' | 'secondary'
  children?: string
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}
export const Default: FC<IGolButtonStory> = ({
  hasEndIcon,
  hasStartIcon,
  ...props
}) => (
  <GolButton
    {...props}
    data-testid="GolButton-TestId"
    startIcon={hasStartIcon && <DoneIcon />}
    endIcon={hasEndIcon && <DoneIcon />}
  />
)
const inlineRadio = 'inline-radio'
const argTypes = {
  disabled: { control: 'boolean', defaultValue: false },
  hasStartIcon: { control: 'boolean', defaultValue: false },
  hasEndIcon: { control: 'boolean', defaultValue: false },
  hasNeutral: { control: 'boolean', defaultValue: false },
  ripple: {
    control: {
      type: inlineRadio,
      options: ['animated', 'simple'],
    },
    defaultValue: 'animated',
  },
  variant: {
    control: {
      type: inlineRadio,
      options: ['contained', 'outlined', 'text'],
    },
    defaultValue: 'contained',
  },
  color: {
    control: {
      type: inlineRadio,
      options: ['secondary', 'primary'],
    },
    defaultValue: 'primary',
  },

  children: { control: 'text', defaultValue: 'GolButton' },
}

export default {
  component: Default,
  title: 'Buttons/Button',
  argTypes,
} as Meta
