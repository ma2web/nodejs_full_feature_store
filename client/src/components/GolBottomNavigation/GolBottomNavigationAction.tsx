import {
  BottomNavigationAction,
  BottomNavigationActionProps,
} from "@material-ui/core";
import React, { FC } from "react";

interface IGolBottomNavigationActionProps extends BottomNavigationActionProps {}

export const GolBottomNavigationAction: FC<IGolBottomNavigationActionProps> = (
  props
) => {
  return <BottomNavigationAction {...props} />;
};
