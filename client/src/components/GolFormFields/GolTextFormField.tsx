import React, { FC } from 'react'
import { useField } from 'formik'
import GolTextField, {
  IGolTextField,
} from 'components/GolTextField/GolTextField'

type IReqType = 'error' | 'value' | 'onChange' | 'onClear' | 'name'

interface IGolTextFormFieldProps extends Omit<IGolTextField, IReqType> {
  name: string
  hasClear?: boolean
}
const GolTextFormField: FC<IGolTextFormFieldProps> = ({
  hasClear,
  ...other
}) => {
  const [field, meta, { setValue }] = useField(other.name)
  return (
    <GolTextField
      {...field}
      {...other}
      error={meta.touched && meta.error}
      onClear={hasClear ? () => setValue('') : undefined}
    />
  )
}

export default GolTextFormField
