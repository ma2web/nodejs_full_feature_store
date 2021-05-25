import { Theme, ThemeProvider } from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useReducer } from "react";
import RtlSupportProvider from "./RtlSupportProvider";
import baseTheme, {
  ltrThemeDark,
  ltrThemeLight,
  rtlThemeDark,
  rtlThemeLight,
} from "./theme";

const CHANGE_DIR = "CHANGE_DIR";
const CHANGE_PALETTE = "CHANGE_PALETTE";
const ThemeContext = React.createContext({});

const GolThemeProvider = ({ children }) => {
  const [{ direction, palette }, dispatch] = useReducer(
    (theme: Theme, action) => {
      switch (action.type) {
        case CHANGE_DIR:
          return {
            ...theme,
            direction: action.payload || theme.direction,
          };
        case CHANGE_PALETTE:
          return {
            ...theme,
            palette: action.payload,
          };

        default:
          return theme;
      }
    },
    baseTheme
  );

  useEffect(() => {
    document.body.setAttribute("dir", direction);

    if (direction === "rtl") {
      document.querySelector("html").style.fontFamily = "Peyda";
    } else {
      document.querySelector("html").style.fontFamily = "Roboto";
    }
  }, [direction]);

  const themeNamesDictionary = {
    ltrThemeLight: ltrThemeLight,
    rtlThemeDark: rtlThemeDark,
    ltrThemeDark: ltrThemeDark,
    rtlThemeLight: rtlThemeLight,
  };

  let theme =
    themeNamesDictionary[
      `${direction}Theme${palette.length ? palette : "Light"}`
    ];

  return (
    <RtlSupportProvider>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={dispatch}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    </RtlSupportProvider>
  );
};

export default GolThemeProvider;

export const useChangeDirection = () => {
  const dispatch: any = useContext(ThemeContext);

  return useCallback((dir) => dispatch({ type: CHANGE_DIR, payload: dir }), [
    dispatch,
  ]);
};

export const useChangePalette = () => {
  const dispatch: any = useContext(ThemeContext);

  return useCallback(
    (pal) => dispatch({ type: CHANGE_PALETTE, payload: pal }),
    [dispatch]
  );
};
