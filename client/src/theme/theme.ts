import {
  createMuiTheme,
  ThemeOptions,
  Direction,
} from "@material-ui/core/styles";
import breakpoints from "./breakpoints";
import overrides from "./overrides";
import lightPalette from "./palette";
import darkPalette from "./darkPalette";
import shadows from "./shadows";
import transitions from "./transitions";
import typography from "./typography";

export const getThemeOptions = (
  direction: Direction,
  palette: any
): ThemeOptions => {
  const fontFamily =
    direction === "rtl"
      ? '"Peyda", "Helvetica", "Arial", sans-serif'
      : '"Roboto", "Peyda", "Helvetica", "Arial", sans-serif';

  typography.fontFamily = fontFamily;

  return {
    direction,
    palette,
    shadows,
    typography,
    spacing: 4,
    transitions,
    overrides,
    breakpoints,
    shape: { borderRadius: 4 },
  };
};

export const rtlThemeDark = createMuiTheme(getThemeOptions("rtl", darkPalette));
export const rtlThemeLight = createMuiTheme(
  getThemeOptions("rtl", lightPalette)
);
export const ltrThemeDark = createMuiTheme(getThemeOptions("ltr", darkPalette));
export const ltrThemeLight = createMuiTheme(
  getThemeOptions("ltr", lightPalette)
);

const baseTheme = createMuiTheme(getThemeOptions("rtl", lightPalette));

export default baseTheme;
