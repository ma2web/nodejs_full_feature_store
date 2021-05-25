import { makeGolStyles } from "theme";

export const useFavoritesStyles = makeGolStyles(
  ({ palette, spacing, shadows }) => ({
    root: {
      width: 226,
      height: "100vh",
      top: 0,
      left: 87,
      position: "fixed",
      boxShadow: shadows[4],
      borderRadius: 12,
      padding: spacing(6),
      background: palette.surface.default,
      zIndex: 99,
    },
  }),
  { name: "Favorites" }
);

export default useFavoritesStyles;
