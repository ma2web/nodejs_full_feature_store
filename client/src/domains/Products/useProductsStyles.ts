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
    product: {
      "& h3": {
        marginTop: spacing(3),
      },
      "& li": {
        backgroundColor: palette.neutral[100],
        padding: spacing(1),
        margin: spacing(1, 0),
      },
    },
  }),
  { name: "products" }
);

export default useProductsStyles;
