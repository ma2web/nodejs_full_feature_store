import React, { FC } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, withStyles } from "@material-ui/core";

const CustomLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
    },
    bar: {},
  })
)(LinearProgress);

export interface IGolLinearProgressProps {
  color?: "primary" | "secondary";
  value: number;
  variant?: "indeterminate" | "determinate" | "buffer";
}

const GolLinearProgress: FC<IGolLinearProgressProps> = ({
  value,
  color,
  variant,
}) => {
  return <CustomLinearProgress variant={variant} value={value} color={color} />;
};

export default GolLinearProgress;
