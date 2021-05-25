import { Meta } from "@storybook/react/types-6-0";
import React, { FC } from "react";
import GolAvatar from "./GolAvatar";

interface IGolAvatarStoryArgs {
  hasFillSrc?: boolean;
  hasIcon?: boolean;
  children?: string;
  size?: "small" | "large";
  variant?: "circle" | "rounded" | "square";
  onClick?: any;
}
export const Default: FC<IGolAvatarStoryArgs> = ({
  children: value,
  hasFillSrc,
  hasIcon,
  size,
  variant,
}) => {
  const children = value?.substring(0, 2).toUpperCase();
  return (
    <GolAvatar
      {...{ size, variant }}
      src={
        hasFillSrc
          ? "https://material-ui.com/static/images/avatar/1.jpg"
          : undefined
      }
      alt="GolAvatarAltTest"
    >
      {children?.substring(0, 2).toUpperCase()}
    </GolAvatar>
  );
};

const argTypes = {
  hasFillSrc: { control: "boolean", defaultValue: false },
  children: { control: "string", defaultValue: "GolAvatar" },
  size: {
    control: {
      type: "select",
      options: ["x-small","small", "medium", "large", "x-large", "xx-large", undefined],
    },
    defaultValue: undefined,
  },
  variant: {
    control: {
      type: "inline-radio",
      options: ["circle", "rounded", "square"],
    },
    defaultValue: "circle",
  },
};

export default {
  component: Default,
  title: "Avatar/Avatar",
  argTypes,
} as Meta;
