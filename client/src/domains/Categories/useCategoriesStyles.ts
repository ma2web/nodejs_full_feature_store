import { makeGolStyles } from "theme";

export const useCategoriesStyles = makeGolStyles(
  ({ palette, spacing }) => ({
    root: {},
    error: {
      color: palette.error.main,
    },
  }),
  { name: "categories" }
);

export default useCategoriesStyles;
