import { IconButton } from '@material-ui/core'
import { Meta } from '@storybook/react/types-6-0'
// import { Add as ICON } from '@sur-ui/icons'
// import { Search as SearchIcon } from '@sur-ui/icons'
import { FormikConfig } from 'formik'
import React, { FC, useState } from 'react'
import {
  number as YupNumber,
  object as YupObject,
  string as YupString,
} from 'yup'
import { GolTextFormField } from '../GolFormFields'
import GolButton from '../GolButton'
import GolForm from '../GolForm'
import GolTextField from './GolTextField'
import makeStyles from './GolTextField.style'

interface IValues {
  normal: string
  maskinpput?: number
}

interface IGolTextFieldStory {
  normalDisabled: boolean
  normalWithIcon: boolean
  normalLeftPrefix: string
  normalRightPrefix: string
  normalIsSecure: boolean
  normalMaxLegth: number
  normalTextHelper: string
  maskInputDisabled: boolean
  maskInputLeftPrefix: string
  onChange(event: any): void
}
const Component: FC<IGolTextFieldStory> = ({
  normalDisabled,
  normalWithIcon,
  normalLeftPrefix,
  normalRightPrefix,
  normalIsSecure,
  normalMaxLegth,
  normalTextHelper,
  maskInputDisabled,
  maskInputLeftPrefix,
  onChange,
}) => {
  const classses = makeStyles({})

  const [textValue, setTextValue] = useState('')

  const validationSchema = YupObject().shape({
    normal: YupString().required().email(),
    maskinpput: YupNumber().required(),
  })

  const initialValues: IValues = {
    normal: 'hello',
    maskinpput: 0,
  }
  const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = (
    values,
    // actions,
  ) => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <div className={classses.root}>
      Controled TextFields
      <GolForm
        {...{ initialValues, onSubmit, validationSchema }}
        validateOnChange
      >
        {() => (
          <>
            <GolTextFormField
              name="normal"
              className="GolTextFieldWithValidation"
              title="Normal"
              placeholder="Placeholder Text"
              disabled={normalDisabled}
              leftPrefix={normalWithIcon ? 'AddIcon' : normalLeftPrefix}
              rightPrefix={normalRightPrefix}
              maxLength={normalMaxLegth}
              helperText={normalTextHelper}
              type={normalIsSecure ? 'password' : 'text'}
              hasClear
            />
            <br />
            <br />
            <br />
            <GolTextFormField
              name="maskinpput"
              className="GolTextFieldWithValidation"
              title={maskInputDisabled ? 'Disabled' : 'Mask Input'}
              placeholder="Placeholder Text"
              disabled={maskInputDisabled}
              leftPrefix={maskInputLeftPrefix}
              rightPrefix={normalRightPrefix}
              // maxLength={maskInputMaxLegth}
              maskOptions={{ type: 'creditCard', creditCardStrictMode: true }}
              hasClear
            />
            <br />
            <br />
            <br />
            <GolButton type="submit">Submit</GolButton>
            <GolButton type="reset" variant="outlined">
              Reset
            </GolButton>
          </>
        )}
      </GolForm>
      <br />
      <br />
      <GolTextField
        // name="UnControled TextFields"
        // title="UnControled TextFields"
        label="UnControled TextFields"
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value)
          onChange(e)
        }}
        onClear={() => setTextValue('')}
        // leftPrefix="Search" //with left prefix outline label does not appear on the top on focus
        rightPrefix={
          <IconButton onClick={() => alert(textValue)}>
            {/* <SearchIcon width={20} height={20} />
             */}
            SearchIcon
          </IconButton>
        }
      />
      UnControled Text Field Value is: {textValue}
    </div>
  )
}

const argTypes = {
  normalDisabled: { control: 'boolean', defaultValue: false },
  normalWithIcon: { control: 'boolean', defaultValue: false },
  normalLeftPrefix: { control: 'text', defaultValue: 'Left' },
  normalRightPrefix: { control: 'text', defaultValue: 'Right' },
  normalIsSecure: { control: 'boolean', defaultValue: false },
  normalMaxLegth: {
    control: { type: 'range', options: [0, 500, 1] },
    defaultValue: 30,
  },
  normalTextHelper: { control: 'text', defaultValue: 'Test' },
  maskInputDisabled: { control: 'boolean', defaultValue: false },
  maskInputLeftPrefix: { control: 'text', defaultValue: 'Left' },
  onChange: { action: 'onChange' },
}

export const GolTextFieldStory = Component.bind({})
export default {
  component: Component,
  title: 'TextField',
  argTypes,
} as Meta
