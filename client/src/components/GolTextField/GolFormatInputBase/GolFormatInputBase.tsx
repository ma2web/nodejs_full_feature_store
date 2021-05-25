import Cleave from 'cleave.js/react'
import React, { FC } from 'react'
import makeStyles from './GolFormatInputBase.styles'
import { IGolFormatInputBaseProps } from './GolFormatInputBase.types'

const GolFormatInputBase: FC<IGolFormatInputBaseProps> = ({
  options,
  inputRef: ref,
  ...other
}) => {
  const { root: className } = makeStyles({})
  const { type, ...rest } = options

  return (
    <Cleave
      {...{ className, ref, ...(other as any) }}
      options={{ [type]: true, ...rest }}
    />
  )
}

GolFormatInputBase.displayName = 'GolFormatField'

export default GolFormatInputBase
