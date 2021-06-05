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
    status: {
      padding: spacing(0, 2),
      borderRadius: 30,
      cursor: "pointer",
      background: palette.error.main,
      color: palette.neutral[100],
    },
    pending: {
      background: "yellow",
      color: palette.neutral[400],
    },
    proccessing: {
      color: palette.neutral[400],
      background: palette.warning.main,
    },
    shipped: {
      background: palette.primary[500],
    },
    delivered: {
      background: palette.success.main,
    },
  }),
  { name: "orders" }
);

export default useOrdersStyles;
