import { makeGolStyles } from "theme";

export const useDeskStyles = makeGolStyles(
  ({ palette, spacing }) => ({
    root: {
      padding: spacing(20, 0, 2),
    },
    tabs: {},
    tab: {
      padding: spacing(2),
      marginBottom: spacing(3),
      borderRadius: 4,
      cursor: "pointer",
      "&:hover": {
        background: palette.neutral[100],
      },

      "& a": {
        color: palette.neutral[600],
        textDecoration: "none",
      },
    },
  }),
  { name: "Desk" }
);

export default useDeskStyles;
