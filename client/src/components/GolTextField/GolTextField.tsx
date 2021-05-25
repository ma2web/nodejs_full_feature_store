import { ButtonBase, TextField, TextFieldProps } from "@material-ui/core";
import { isNil } from "ramda";
import React, { FC, ReactNode, useMemo } from "react";
import GolFormatInputBase, {
  IGolFormatInputBaseOptions,
} from "./GolFormatInputBase";
import GolInputBase from "./GolInputBase";
import useStyle from "./GolTextField.style";
import {ReactComponent as ClearIcon } from 'assets/images/icons/UI/CloseCircle.svg'

export interface IGolTextField extends Omit<TextFieldProps, "error" | "type"> {
  type?: HTMLInputType;
  error?: ReactNode;
  maxLength?: number;
  rightPrefix?: ReactNode | Element;
  leftPrefix?: ReactNode | Element;
  maskOptions?: IGolFormatInputBaseOptions;
  onClear?: () => void;
}

const GolTextField: FC<IGolTextField> = ({
  label,
  helperText: helper,
  error,
  maxLength,
  rightPrefix,
  leftPrefix,
  maskOptions,
  InputProps: InputProperties,
  inputProps: inputProperties,
  className,
  onClear,
  value,
  disabled,
  ...other
}) => {
  const styles = useStyle();

  const valueLength = `${value}`.length;
  const helperText = useMemo(
    () => (
      <>
        <span>{error ? error : helper}</span>
        {maxLength && (
          <span>
            {value ? valueLength : 0}/{maxLength}
          </span>
        )}
      </>
    ),
    [error, helper, maxLength, value, valueLength]
  );
  const InputProps = {
    inputComponent: maskOptions ? GolFormatInputBase : GolInputBase,
    endAdornment: (
      <div className="endAdornmentContainer">
        {disabled || valueLength === 0 || isNil(onClear) ? null : (
          <ButtonBase className="endAdornmentElement" onClick={onClear}>
            <ClearIcon />
          </ButtonBase>
        )}
        {rightPrefix}
      </div>
    ),
    startAdornment: leftPrefix && (
      <div className="GolTextFieldLeftPrefix">{leftPrefix}</div>
    ),
    ...InputProperties,
  };
  const inputProps = {
    options: maskOptions,
    ...inputProperties,
  };
  return (
    <TextField
      InputLabelProps={{
        className: styles.label,
      }}
      variant="outlined"
      {...{
        helperText,
        label,
        error: !!error,
        value,
        InputProps,
        inputProps,
        disabled,
        className,
        ...(other as any),
      }}
    />
  );
};

GolTextField.displayName = "GolTextField";
export default GolTextField;
