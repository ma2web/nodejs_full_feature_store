import { makeGolStyles } from "theme";

interface IGolDataGridStyleProps {
  pageSize?: number;
  listStyle?: boolean
}
export default makeGolStyles<IGolDataGridStyleProps>(
  ({ palette, typography, spacing }) => ({
    root: {
      height: "100%",
      backgroundColor: palette.surface.default,
      padding: spacing(6),
      borderRadius: 4,
    },
    row: {
      borderLeft: `1px solid ${palette.neutral[700]}`,
        borderRight: `1px solid ${palette.neutral[700]}`,
        '&:last-child': {
          borderBottom: `1px solid ${palette.neutral[700]}`,
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
        },
        height: ({listStyle}) => listStyle ? 38 : 80,
      "&:nth-of-type(even)": {
        backgroundColor: `${palette.btnOutlineText[5]} !important`,
        background: "unset !important",
      },
      "& .GolDataGridEditableCell": {
        width: "100%",
        margin: "0 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .GolDataGridTextField": {
          flex: "1",
          // backgroundColor: "#fff",
          "& .MuiOutlinedInput-root .MuiOutlinedInput-input": {
            padding: "2.2% 4%",
          },
          "& .GolTextField": {
            margin: 0,
          },
        },
      },
    },
    cell: {
      color: `${palette.neutral[600]} !important`,
      padding: `${spacing(2.5,2)}  !important`,
      ...typography.body1
    },
    headRoot: {
      "& > tr:first-child": {
        borderBottom: `unset`,
        border: `1px solid ${palette.neutral[700]}`,
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        height: 64,
        backgroundColor: palette.neutral[100],
        "& > th": {
          padding: "24px 10px",
          color: palette.neutral[600],
          ...typography.button,
        },
      },
    },
    GolDataGridActionsCell: {
      display: "flex",
      justifyContent: "space-between",
      "& .MuiButtonBase-root": {
        width: 42,
        height: 42,
        padding: 0,
        margin: "0 3px",
      },
    },
  })
);
