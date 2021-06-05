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
    },
    pending: {
      background: "yellow",
    },
    proccessing: {
      background: palette.warning.main,
    },
    shipped: {
      color: palette.neutral[100],
      background: palette.info.main,
    },
    delivered: {
      background: palette.success.main,
      color: palette.neutral[100],
    },
  }),
  { name: "orders" }
);

export default useOrdersStyles;
