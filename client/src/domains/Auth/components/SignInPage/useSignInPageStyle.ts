import { url } from "node:inspector";
import { makeGolStyles } from "theme";
import palette from "theme/palette";

const useSignInPageStyle = makeGolStyles(
  ({
    spacing,
    palette: { primary, neutral, surface },
    breakpoints: { down, up, values },
  }) => ({
    container: {
      color: neutral[800],
      background: neutral[700],
      padding: spacing(20, 40),
      height: "100vh",
      overflow: "hidden",
    },
    container2: {
      background: surface.default,
      borderRadius: 20,
      height: "100%",
      position: "relative",
    },
    title1: {
      fontSize: 45,
      lineHeight: "52px",
      fontWeight: 700,
      fontFamily: '"Roboto", "Peyda", "Helvetica", "Arial", sans-serif',
      "& span": {
        color: palette.primary[700],
      },
    },
    title2: {
      fontSize: 17,
      lineHeight: "24px",
      fontWeight: 400,
      fontFamily: '"Roboto", "Peyda", "Helvetica", "Arial", sans-serif',
    },
    picturesContainer: {
      position: "relative",
      left: 40,
    },
    baby: {
      position: "relative",
      zIndex: 1,
    },
    shadow: {
      position: "absolute",
      top: 0,
      zIndex: 0,
      right: 0,
    },
    subTitle: {
      color: neutral[600],
      fontWeight: 400,
      fontSize: "13px",
      lineHeight: "16px",
    },
    title: {
      margin: spacing(3, 0, 7, 0),
      color: neutral[800],
      fontSize: 32,
    },
    btnsWrapper: {
      marginBottom: spacing(7),
    },
    userNameWrapper: {
      marginBottom: spacing(5),
    },
    passwordWrapper: {
      marginBottom: spacing(5),
    },
    toggleBtn: {
      "&.MuiToggleButton-root": {
        padding: `${spacing(3, 10.5)}`,
      },
      "& svg": {
        marginRight: spacing(1),
        color: neutral[800],
        "& path": {
          fill: neutral[800],
        },
      },
      "&.Mui-selected path": {
        fill: primary.main,
      },
    },
    textFieldLabel: {
      display: "flex",
      color: neutral[800],
      alignItems: "center",
      "& span": {
        marginLeft: spacing(2.5),
      },
    },
    forgetPassLink: {
      alignSelf: "flex-start",
      color: primary.main,
      margin: spacing(0, 0, 10, 0),
    },
    noHaveAccount: {
      color: neutral[800],
      margin: spacing(10, 0, 0, 0),
    },
    passLabel: {
      // zIndex: 50,
      // backgroundColor: 'white',
      // paddingRight: 10,
    },
    withGoogle: {},
  }),
  {
    name: "SignInPage",
  }
);

export default useSignInPageStyle;
