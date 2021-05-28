import { makeGolStyles } from "theme";

export const useOrdersStyles = makeGolStyles<{ changeStatus: boolean }>(
  ({ palette, spacing }) => ({
    root: {},
    data: {
      padding: spacing(2, 5),
      "& span": {
        color: ({ changeStatus }) =>
          changeStatus ? palette.success.main : palette.error.main,
        cursor: "pointer",
      },
    },
    items: {
      borderBottom: `1px solid ${palette.neutral[200]}`,
      display: "flex",
      justifyContent: "space-between",
    },
  }),
  { name: "orders" }
);

export default useOrdersStyles;
