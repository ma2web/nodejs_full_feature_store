const primary: DefaultPalette = {
  get main() {
    return this[700];
  },
  get contrastText() {
    return accent.main;
  },
  50: "#2A3880",
  100: "#364ECD",
  200: "#266ED9",
  300: "#268AD9",
  400: "#2694D9",
  500: "#1AA4E5",
  600: "#59B8EC",
  700: "#93D4FF",
  800: "#BAE2FF",
  900: "#E9F7FF",
};

const secondary: DefaultPalette = {
  get main() {
    return this[300];
  },
  get contrastText() {
    return accent.main;
  },
  50: "#BFFFEA",
  100: "#99FFE0",
  200: "#4CFFCF",
  300: "#1DE9B6",
  400: "#12B392",
  500: "#16A689",
  600: "#0E8C75",
  700: "#097361",
  800: "#055C50",
  900: "#00403A",
};

const neutral: DefaultPalette = {
  get main() {
    return this[500];
  },
  get contrastText() {
    return accent.main;
  },
  50: "#17212A",
  100: "#253543",
  200: "#303F4E",
  300: "#4F596A",
  400: "#6D7686",
  500: "#ADB6C5",
  600: "#BFC9DA",
  700: "#D3DAE5",
  800: "#EDEEF1",
  900: "#FFFFFF",
};

const grey = {
  main: "#E0E0E0",
  "1": "#333333",
  "2": "#4F4F4F",
  "3": "#828282",
  "4": "#BDBDBD",
  "5": "#E0E0E0",
  "6": "#F2F2F2",
};

const onPrimary = {
  get main() {
    return "#141E28";
  },
};

const onSecondary = {
  get main() {
    return "#00403A";
  },
};

const btnPrimaryStates = {
  600: "#59B8EC",
  625: "#0084FF",
  650: "#007AFF",
  675: "#46BDFF",
  700: "#93D4FF",
};

const btnSecondaryStates = {
  200: "#4CFFCF",
  225: "#3CF5C8",
  250: "#28F0BE",
  275: "#20EDB9",
  300: "#1DE9B6",
};

const btnOutlineText = {
  5: `${primary[700]}05`,
  10: `${primary[700]}10`,
  15: `${primary[700]}15`,
  20: `${primary[700]}20`,
  30: `${primary[700]}30`,
  50: `${primary[700]}50`,
};

const white = {
  5: "#ffffff0D",
  10: "#ffffff1A",
  15: "#ffffff26",
  20: "#ffffff33",
  30: "#ffffff4D",
  50: "#ffffff80",
  100: "#ffffff",
};

const accent = {
  get main() {
    return "#BD7BFD";
  },
};

const error = {
  get main() {
    return "#FC68A6";
  },
};

const warning = {
  get main() {
    return "#FFD28D";
  },
};

const success = {
  get main() {
    return "#65F0D4";
  },
};

const surface = {
  default: "#12212E",
};

const background = {
  default: "#0D1720",
  paper: "#fafafa",
};

const onBackground = {
  default: "#EDEEF1",
};

const palette: IPalette = {
  primary,
  onPrimary,
  secondary,
  onSecondary,
  neutral,
  grey,
  accent,
  error,
  success,
  warning,
  btnPrimaryStates,
  btnSecondaryStates,
  btnOutlineText,
  white,
  surface,
  background,
  onBackground,
};

export default palette;
