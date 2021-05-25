import {
  ButtonBase,
  TextField,
  TextFieldProps,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core'
import { isNil } from 'ramda'
import React, {
  FC,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
  forwardRef,
  MutableRefObject,
} from 'react'
import { ReactComponent as VisibleIcon } from 'assets/images/icons/Security/visible.svg'
import cs from 'classnames'

import useGolSquareTextFieldStyle from './useGolSquareTextFieldStyle'
import { AnyCnameRecord } from 'node:dns'

export interface IGolSquareTextField {
  type: 'number' | 'text'
  valueIsHidden: boolean
  value?: any
  handleClickShowValue: () => void
  handleChange: (prop: any) => any
  className?: any
}

const GolSquareTextField = forwardRef<any, IGolSquareTextField>(
  (
    {
      type,
      valueIsHidden,
      value,
      handleClickShowValue,
      handleChange,
      className,
    },
    ref,
  ) => {
    const classes = useGolSquareTextFieldStyle()
    const [showIcon, setshowIcon] = useState(false)
    const handleMouseDown = (event) => {
      event.preventDefault()
    }

    // const inputRef = useRef(null)

    useEffect(() => {
      if (!valueIsHidden) {
        (ref as MutableRefObject<HTMLDivElement>).current
          .querySelector('input')
          .focus()
      }
      setshowIcon(valueIsHidden)
    }, [valueIsHidden])

    return (
      <OutlinedInput
        ref={ref}
        className={cs(className, classes.root)}
        id="outlined-adornment-password"
        type={showIcon ? null : type}
        value={value}
        onChange={handleChange}
        onFocus={() => {
          setshowIcon(false)
        }}
        inputProps={{ maxLength: 1 }}
        endAdornment={
          <>
            {showIcon && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowValue}
                  onMouseDown={handleMouseDown}
                  edge="end"
                >
                  <VisibleIcon />
                </IconButton>
              </InputAdornment>
            )}
          </>
        }
        labelWidth={0}
      />
    )
  },
)
GolSquareTextField.defaultProps = {
  valueIsHidden: true,
}
GolSquareTextField.displayName = 'GolSquareTextField'
export default GolSquareTextField
