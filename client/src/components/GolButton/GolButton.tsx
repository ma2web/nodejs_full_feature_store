import React, { ReactNode, forwardRef } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import cs from "classnames";

import useStyle from "./GolButton.style";

export type IGolButtonVariant = "text" | "outlined" | "contained";
export type IGolButtonColor = "primary" | "secondary" | "default" | "inherit";
export type IGolButtonRipple = "animated" | "simple";
export interface IGolButtonProps extends ButtonProps {
  variant?: IGolButtonVariant;
  color?: IGolButtonColor;
  disabled?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children?: ReactNode;
  disableRipple?: boolean;
  className?: string;
  ripple?: IGolButtonRipple;
  hasNeutral?: boolean;
  style?: Record<string, unknown>;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const GolButton = forwardRef<any, IGolButtonProps>(
  (
    {
      variant,
      hasNeutral,
      ripple,
      color,
      children,
      className,
      classes,
      ...props
    },
    ref
  ) => {
    const styles = useStyle({ variant, ripple, classes });
    const isNeutral = !!hasNeutral && !!variant;
    const neutralClassName = styles[`${variant}Neutral`];

    return (
      <Button
        ref={ref}
        className={cs(className, {
          [neutralClassName]: isNeutral,
        })}
        color={hasNeutral ? undefined : color}
        {...{
          classes: {
            root: styles.root,
            containedSecondary: styles.containedSecondary,
            outlinedSecondary: styles.outlinedSecondary,
            textSecondary: styles.textSecondary,
            containedPrimary: styles.containedPrimary,
            outlinedPrimary: styles.outlinedPrimary,
            textPrimary: styles.textPrimary,
          },
          variant,
        }}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GolButton.displayName = "GolButton";
GolButton.defaultProps = {
  variant: "contained",
  color: "primary",
  ripple: "animated",
};

export default GolButton;
