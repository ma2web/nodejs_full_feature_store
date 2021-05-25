import React, { FC } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeGolStyles } from "theme";

const useStyles = makeGolStyles(({ palette }) => ({
  root: {
    position: "relative",
  },
  bottom: {},
  top: {
    color: "#ddd",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

export interface IGolCircularProgressProps {
  color?: "primary" | "secondary";
  value: number;
  variant?: "indeterminate" | "determinate" | "static";
}

const Component: FC<IGolCircularProgressProps> = ({
  value,
  color,
  variant,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={40}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={40}
        thickness={4}
        value={value}
        color={color}
      />
    </div>
  );
};

const argTypes = {
  color: {
    control: {
      type: "select",
      options: ["primary", "secondary"],
    },
  },
  value: { control: "string", defaultValue: "45" },
};

export const GolCircularProgress = Component.bind({});

export default {
  component: GolCircularProgress,
  title: "Circular Progress",
  argTypes,
};
