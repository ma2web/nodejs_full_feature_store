import { Select, SelectProps } from "@material-ui/core";
import classNames from "classnames";
import React, { FC } from "react";
import useGolSelectStyle from "./GolSelect.style";
import { MenuItem } from '@material-ui/core';

interface IGolSelectProps extends SelectProps {
  options: Record<"title" | "value", string | number>[];
}

const GolSelect: FC<IGolSelectProps> = ({ options, className, ...rest }) => {
    const classes = useGolSelectStyle()
  return (
    <Select {...rest} className={classNames(classes.root, className )}>
      {options.map((_) => (
        <MenuItem value={_.value}>{_.title}</MenuItem>
      ))}
    </Select>
  );
};

export default GolSelect;
