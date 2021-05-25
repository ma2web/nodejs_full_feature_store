import React, { FC } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, withStyles } from "@material-ui/core";

const CustomLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      minWidth: 500,
    },
    bar: {},
  })
)(LinearProgress);

export interface IGolLinearProgressProps {
  color?: "primary" | "secondary";
  value: number;
  variant?: "indeterminate" | "determinate" | "buffer";
}

const Component: FC<IGolLinearProgressProps> = ({ value, color, variant }) => {
  return <CustomLinearProgress variant={variant} value={value} color={color} />;
};

const argTypes = {
  color: {
    control: {
      type: "select",
      options: ["primary", "secondary"],
    },
  },
  value: { control: "string", defaultValue: "45" },
  variant: {
    control: {
      type: "select",
      options: ["indeterminate", "determinate", "buffer"],
    },
  },
};

export const GolLinearProgress = Component.bind({});

export default {
  component: GolLinearProgress,
  title: "Linear Progress",
  argTypes,
};
