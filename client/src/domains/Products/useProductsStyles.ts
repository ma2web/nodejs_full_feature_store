import { makeGolStyles } from "theme";

export const useProductsStyles = makeGolStyles(
  ({ palette, spacing }) => ({
    root: {},
    error: {
      color: palette.error.main,
    },
    parent: {
      display: "flex",
      flexWrap: "wrap",
    },
    child: {
      width: "50%",
      padding: spacing(3),
      transition: "all ease-in-out 500",

      "& li": {
        backgroundColor: palette.neutral[100],
        padding: spacing(1, 3),
        margin: spacing(1, 0),
        cursor: "pointer",
        borderRadius: 30,
        transition: "all ease-in-out 500",
        "&:hover": {
          backgroundColor: `${palette.error.main}50`,
          padding: spacing(1, 6),
        },
      },
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
