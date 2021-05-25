const primary: DefaultPalette = {
  get main() {
    return this[700];
  },
  get contrastText() {
    return accent.main;
  },
  50: "#E2F4FF",
  100: "#BAE2FF",
  200: "#88D0FF",
  300: "#46BDFF",
  400: "#00ADFF",
  500: "#009DFF",
  600: "#008EFF",
  700: "#0066FF",
  800: "#2341E0",
  900: "#242FB8",
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
  50: "#FFFFFF",
  100: "#F6F7FA",
  200: "#DDE0F0",
  300: "#A8AFD1",
  400: "#858AA3",
  500: "#4F536A",
  600: "#30354E",
  700: "#252A43",
  800: "#171A2A",
  900: "#101321",
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
    return "#FFFFFF";
  },
};

const onSecondary = {
  get main() {
    return "#00403A";
  },
};

const btnPrimaryStates = {
  600: "#008EFF",
  625: "#0084FF",
  650: "#007AFF",
  675: "#0070FF",
  700: "#0066FF",
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
    return "#840CF9";
  },
};

const error = {
  get main() {
    return "#ED0063";
  },
};

const warning = {
  get main() {
    return "#FFB84D";
  },
};

const success = {
  get main() {
    return "#16A689";
  },
};

const surface = {
  default: "#fff",
};

const background = {
  default: "#D3DAE5",
  paper: "#fafafa",
};

const onBackground = {
  default: "#333333",
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
