import { makeGolStyles } from "theme";
import { IGolAvatarSizes } from "./GolAvatar";

interface IStyleProps {
  size?: IGolAvatarSizes;
}

const containerSizeSelector = (size?: IGolAvatarSizes) => {
  switch (size) {
    case "x-small":
      return 24;
    case "small":
      return 32;
    case "large":
      return 64;
    case "x-large":
      return 82;
    case "xx-large":
      return 128;
    default:
      return 48;
  }
};

const fontSizeSelector = (size?: IGolAvatarSizes) => {
  switch (size) {
    case "x-small":
      return 11;
    case "small":
      return 14;
    case "large":
      return 32;
    case "x-large":
      return 40;
    case "xx-large":
      return 48;
    default:
      return 26;
}
}

const svgSizeSelector = (size?: IGolAvatarSizes) => {
  switch (size) {
    case "x-small":
      return 16;
    case "small":
      return 24;
    case "large":
      return 48;
    case "x-large":
      return 64;
    case "xx-large":
      return 82;
    default:
      return 32;
  }
};

export default makeGolStyles<IStyleProps>(() => ({
  root: {
    width: ({ size }) => containerSizeSelector(size),
    height: ({ size }) => containerSizeSelector(size),
    fontSize: ({ size }) => fontSizeSelector(size),
    "& > svg": {
      width: ({ size }) => svgSizeSelector(size),
      height: ({ size }) => svgSizeSelector(size),
    },
    zIndex: 0,
    // border: "2px solid #ffffff",
  },
}));
