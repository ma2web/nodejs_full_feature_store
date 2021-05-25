import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
} from "@material-ui/core";
import { pick } from "ramda";
import React, { FC } from "react";

interface IGolCheckboxProps
  extends CheckboxProps,
    Pick<FormControlLabelProps, "label" | "labelPlacement"> {
  containerClassName?: string;
}

const GolCheckbox: FC<IGolCheckboxProps> = ({
  label,
  labelPlacement,
  style,
  color = "primary",
  containerClassName,
  ...rest
}) => {
  return (
    <FormControlLabel
      control={<Checkbox {...{ color, ...rest }} />}
      {...{ label, labelPlacement, style, className: containerClassName }}
    />
  );
};

export default GolCheckbox;
