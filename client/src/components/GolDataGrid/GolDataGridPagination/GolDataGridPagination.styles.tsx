import { IGolDataGridPaginationProps } from "../GolDataGrid.types";
import { makeGolStyles } from "theme";
import palette from "theme/darkPalette";

const useStyle = makeGolStyles<IGolDataGridPaginationProps>((theme) => ({
  root: {
    display: "flex",
    justifyContent: ({ hidePageRange }) =>
      hidePageRange ? "flex-end" : "space-between",
    width: "100%",
    height: 60,
    padding: theme.spacing(0, 2),

    "& .actions": {
      display: "flex",
      alignItems: "center",
      "& form": {
        "& .MuiTextField-root": {
          width: 100,
          margin: "0 10px",
        },
      },
      "& .per-page": {
        display: "flex",
        alignItems: "center",

        "& > label": {
          marginRight: 5,
        },
      },

      "& .seprator": {
        margin: "0 10px",
      },

      "& .MuiAutocomplete-root": {
        width: 56,
        height: 42,

        "& .SurTextField": {
          margin: 0,
        },
        "& .MuiAutocomplete-endAdornment": {
          right: 3,
        },
      },
    },

    "& .pagination": {
      alignItems: "center",
      display: "flex",
      "& > button": {
        padding: 0,
      },
      "& .buttonPagination": {
        color: theme.palette.neutral[700],
        ...theme.typography.caption,
        width: 36,
        height: 36,
        marginRight: theme.spacing(1),
      },
      "& .activeButtonPagination": {
        color: theme.palette.surface.default,
      },
      "& .arrow-button": {
        width: 24,
        height: 24,
        margin: theme.spacing(0, 2.5),
        transform: theme.direction === "rtl" ? "rotate(180deg)" : "",
        "&.arrow-right-end-button, &.arrow-left-end-button": {
          margin: 0,
        },
        "&.arrow-right-end-button, &.arrow-right-button": {
          // transform: 'rotate(180deg)'
        },
      },
    },
  },
  perPage: {
    display: "flex",
    alignItems: "center",
    "& > label": {
      marginRight: theme.spacing(3),
      ...theme.typography.caption,
      color: theme.palette.neutral[700],
    },
  },
  inputSelect: {
    width: 40,
    "&::before": {
      content: "unset",
    },
    "& > div, > div button": {
      color: theme.palette.neutral[700],
    },
    "& input.MuiInputBase-input": {
      paddingTop: 1,
    },
  },
  goto: {
    "& > div": {
      width: 56,
      minHeight: 38,
      height: 38,
    },
  },
}));

export default useStyle;
