import React, { FC, ReactElement } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeGolStyles } from "theme";

const useStyles = makeGolStyles(({ palette }) => ({
  children: {
    cursor: "pointer",
  },
  arrow: {
    color: palette.background,
  },
  tooltip: {
    backgroundColor: palette.background,
  },
}));

export interface IGolTooltipProps {
  children: ReactElement;
  title: string;
  placement:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
}

const GolTooltip: FC<IGolTooltipProps> = ({ children, title, placement }) => {
  const classes = useStyles();

  return (
    <Tooltip title={title} placement={placement} arrow classes={classes}>
      <div className={classes.children}>{children}</div>
    </Tooltip>
  );
};

export default GolTooltip;
