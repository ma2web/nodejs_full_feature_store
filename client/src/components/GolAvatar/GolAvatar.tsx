import React, { FC } from "react";
import { Avatar, AvatarProps } from "@material-ui/core";
import classNames from "classnames";
import useStyles from "./GolAvatar.styles";

export type IGolAvatarSizes =
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "xx-large";
type ICustomAvatarProps =
  | "alt"
  | "src"
  | "variant"
  | "style"
  | "onClick"
  | "classes";

export interface IGolAvatarProps extends Pick<AvatarProps, ICustomAvatarProps> {
  size?: IGolAvatarSizes;
}

const GolAvatar: FC<IGolAvatarProps> = ({
  children,
  alt,
  size,
  src,
  variant,
  style,
  onClick,
  classes,
}) => {
  const customClasses = useStyles({ size });
  return (
    <Avatar
      {...{
        alt,
        src,
        variant,
        style,
        onClick,
      }}
      classes={{ root: classNames(customClasses.root, classes?.root) }}
    >
      {children}
    </Avatar>
  );
};

GolAvatar.defaultProps = { variant: 'circle' }

export default GolAvatar;
