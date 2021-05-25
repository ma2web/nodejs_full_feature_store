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
  children?: ReactElement;
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

const Component: FC<IGolTooltipProps> = ({ title, placement }) => {
  const classes = useStyles();

  return (
    <Tooltip title={title} placement={placement} arrow classes={classes}>
      <div className={classes.children}>Hover Me</div>
    </Tooltip>
  );
};

const argTypes = {
  title: { control: "text", defaultValue: "Content" },
  placement: {
    control: {
      type: "select",
      options: [
        "bottom",
        "left",
        "right",
        "top",
        "bottom-end",
        "bottom-start",
        "left-end",
        "left-start",
        "right-end",
        "right-start",
        "top-end",
        "top-start",
      ],
    },
  },
};

export const GolTooltip = Component.bind({});

export default {
  component: GolTooltip,
  title: "Tooltip",
  argTypes,
};
