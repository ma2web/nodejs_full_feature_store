import { url } from "node:inspector";
import { makeGolStyles } from "theme";

const useSignUpPageStyle = makeGolStyles(
  ({
    spacing,
    palette: { primary, secondary, neutral, surface, white },
    breakpoints: { down, up, values },
  }) => ({
    container: {
      color: white[100],
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
        color: secondary[100],
      },
    },
    title2: {
      fontSize: 17,
      lineHeight: "24px",
      fontWeight: 400,
      fontFamily: '"Roboto", "Peyda", "Helvetica", "Arial", sans-serif',
    },
    picture: {},
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
    signUpWay: {
      alignSelf: "flex-start",
      color: primary.main,
      margin: spacing(0, 0, 10, 0),
      cursor: "pointer",
    },
    noHaveAccount: {
      color: neutral[800],
      margin: spacing(10, 0, 0, 0),
    },
    allreadyHave: {
      color: neutral[800],
      margin: spacing(10, 0, 0, 0),
      textTransform: "capitalize",
    },
    passLabel: {
      // zIndex: 50,
      // backgroundColor: 'white',
      // paddingRight: 10,
    },
  }),
  {
    name: "SignUpPage",
  }
);

export default useSignUpPageStyle;
