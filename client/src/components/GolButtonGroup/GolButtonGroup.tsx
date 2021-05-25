import React, { FC } from "react";
import { ButtonGroup, ButtonGroupProps } from "@material-ui/core";

const GolButtonGroup: FC<ButtonGroupProps> = ({ children, ...rest }) => {
  return <ButtonGroup {...{ ...rest }}>{children}</ButtonGroup>;
};

export default GolButtonGroup;
