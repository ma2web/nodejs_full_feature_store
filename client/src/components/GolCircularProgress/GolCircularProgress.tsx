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

const GolCircularProgress: FC<IGolCircularProgressProps> = ({
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

export default GolCircularProgress;
