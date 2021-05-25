import { makeGolStyles } from "theme";

export const useMainMenuStyles = makeGolStyles(
  ({ palette, spacing }) => ({
    root: {
      width: "100%",
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
    menuItems: {
      maxWidth: "50%",
      paddingTop: spacing(13),
    },
  }),
  { name: "MainMenu" }
);

export default useMainMenuStyles;
