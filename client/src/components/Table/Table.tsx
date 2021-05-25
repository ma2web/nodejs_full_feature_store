import React, { FC, ReactElement } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { makeGolStyles } from "theme";
import classes from "*.module.css";

const useStyles = makeGolStyles(({ palette, spacing }) => ({
  table: {
    width: "100%",
    background: palette.surface.default,
    textAlign: "left",
  },
  header: {
    background: palette.primary.main,
    color: palette.surface.default,
    "& th": {
      padding: spacing(2),
    },
  },
  row: {
    background: palette.primary[100],
    "& td": {
      padding: spacing(1, 2),
    },
  },
}));

export interface ITableProps {
  header: ReactElement;
  row: ReactElement;
}

const Table: FC<ITableProps> = ({ header, row }) => {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <thead className={classes.header}>{header}</thead>
      <tbody className={classes.row}>{row}</tbody>
    </table>
  );
};

export default Table;
