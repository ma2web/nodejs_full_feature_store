import { makeGolStyles } from "theme";

export const useMessangerStyle = makeGolStyles(
  ({ palette, shadows, direction, spacing }) => ({
    root: {
      backgroundColor: palette.surface.default,
      position: "fixed",
      right: 80,
      bottom: 0,
      width: 289,
      height: 420,
      boxShadow: shadows[1],
      borderRadius: "6px 6px 0 0",
      transition: "all ease-in-out 200ms",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      padding: spacing(3, 4, 1, 4),
      fontSize: 17,
      borderBottom: `1px solid ${palette.neutral[200]}`,
    },
    spaceBetween: {
      display: "flex",
      justifyContent: "space-between",
    },
    flex: {
      display: "flex",
    },
    sendSvg: {
      cursor: "pointer",
      margin: spacing(0, 5),
    },
    toggle: {
      cursor: "pointer",
    },
    body: {
      width: "100%",
      position: "relative",
    },
    search: {
      padding: spacing(0, 4, 3, 4),
      height: 385,
      overflow: "scroll",
      width: "100%",
      position: "relative",
    },
    messageSearch: {
      position: "fixed",
      backgroundColor: palette.surface.default,
      padding: spacing(2, 0, 0, 0),
      width: 245,
    },
    searchInput: {
      background: palette.neutral[100],
      borderRadius: 8,
      marginBottom: spacing(2),
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiFormLabel-root": {
        color: palette.neutral[600],
      },
    },
    textFieldLabel: {
      display: "flex",
      alignItems: "center",
      "& span": {
        marginLeft: spacing(2.5),
      },
    },
    messages: {
      paddingTop: spacing(18),
    },
    message: {
      display: "flex",
      cursor: "pointer",
      borderBottom: `1px solid ${palette.neutral[200]}`,
      justifyContent: "space-between",
      padding: spacing(2, 0),
    },
    avatar: {
      width: 36,
      height: 36,
      background: palette.neutral[200],
      borderRadius: 50,
      marginRight: spacing(2),
    },
    content: {},
    name: {
      fontSize: 13,
    },
    text: {
      fontSize: 9,
    },
    date: {
      fontSize: 11,
      textTransform: "uppercase",
      fontWeight: 500,
    },
    counter: {
      background: palette.error.main,
      alignSelf: "center",
      margin: spacing(2),
      borderRadius: "50%",
      width: 20,
      height: 20,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      color: palette.neutral[100],
    },
  }),
  { name: "SideBar" }
);

export default useMessangerStyle;
