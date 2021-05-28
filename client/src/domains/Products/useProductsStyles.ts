import { makeGolStyles } from "theme";

export const useProductsStyles = makeGolStyles(
  ({ palette, spacing }) => ({
    root: {},
    parent: {
      display: "flex",
      flexWrap: "wrap",
    },
    child: {
      width: "50%",
      padding: spacing(3),
    },
  }),
  { name: "products" }
);

export default useProductsStyles;
