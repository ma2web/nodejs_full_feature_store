import { BottomNavigation, BottomNavigationProps } from "@material-ui/core";
import React, { FC } from "react";
interface IGolBottomNavigationProps extends BottomNavigationProps {
    onChange?: (value: any) => void
}

export const GolBottomNavigation: FC<IGolBottomNavigationProps> = ({
  children,
  onChange,
  ...rest
}) => {
  return <BottomNavigation {...{ ...rest, onChange: (e,value) => onChange(value) }}>{children}</BottomNavigation>;
};
