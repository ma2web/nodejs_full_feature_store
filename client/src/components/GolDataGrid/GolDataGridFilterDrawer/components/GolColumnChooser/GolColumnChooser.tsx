import { useTheme } from "@material-ui/core";
import { ReactComponent as SearchIcon } from "assets/images/icons/UI/Search.svg";
import classNames from "classnames";
import GolTextField from "components/GolTextField";
import update from "immutability-helper";
import React, { FC, useCallback, useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { makeGolStyles } from "theme";
import typography from "theme/typography";
import { whichFormType } from "../../GolDataGridFilterDrawer";
import GolColumnChooserCard from "./GolColumnChooserCard";

interface IGolColumnChooserProps {
  whichForm?: whichFormType;
  allColumns?: any;
  setColumnOrder?: any;
}

const GolColumnChooser: FC<IGolColumnChooserProps> = ({
  whichForm,
  allColumns,
  setColumnOrder,
}) => {
  const classes = useGolColumnChooser({ whichForm });
  const selectionColumn = allColumns.filter((_) => _.id === "selection");
  const [columns, setColumns] = useState(
    allColumns.filter((_) => _.id !== "selection")
  );

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragCard = columns[dragIndex];
        setColumns(
          update(columns, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard]
            ]
          })
        );
    },
    [columns]
  );

  useEffect(() => {
    setColumnOrder([...selectionColumn, ...columns].map((_) => _.id));
  },[columns])
  const theme = useTheme()
  return (
    <div className={classNames(classes.columnChooser, theme.direction === "ltr" ? 'ltr-golColumnChooser' : 'rtl-golColumnChooser')}>
      <GolTextField
        className={classes.searchInput}
        leftPrefix={<SearchIcon />}
        style={{height: 40}}
        onChange={(value) =>
          setColumns(
            columns.filter((_) => _.Header.includes(value.target.value))
          )
        }
        placeholder="Search"
      />
      <DndProvider backend={HTML5Backend}>
        {columns.filter(_ => _.id !== 'actions').map((column, index) => (
          <GolColumnChooserCard
            className={classes.checkboxColumnChooser}
            key={column.id}
            {...{ column, moveCard, index }}
          />
        ))}
      </DndProvider>
    </div>
  );
};

export default GolColumnChooser;



const useGolColumnChooser = makeGolStyles<{ whichForm: whichFormType }>(
  ({ palette, spacing, typography }) => ({
    columnChooser: {
      top: -1,
      zIndex: 1,
      padding: spacing(4.5, 0),
      position: "absolute",
      width: 254,
      height: 464,
      backgroundColor: palette.neutral[100],
      border: `1px solid ${palette.neutral[700]}`,
      display: ({ whichForm }) =>  whichForm === "columnChooser" ? "flex" : 'none',
      flexDirection: "column",
      '&.rtl-golColumnChooser': {
        left: ({ whichForm }) => whichForm === "columnChooser" ? 51 : -254,
      },
      '&.ltr-golColumnChooser': {
        right: ({ whichForm }) => whichForm === "columnChooser" ? 51 : -254,

      }
    },
    searchInput: {
      padding: spacing(0, 3),
      marginBottom: spacing(3),
      '& .MuiInputBase-root': {
        color: palette.neutral[600],
        ...typography.body1
      },
      "& .GolTextFieldLeftPrefix svg path": {
        stroke: palette.neutral[600],
      },
    },
    checkboxColumnChooser: {
      borderTop: `1px solid ${palette.neutral[300]}`,
      margin: "unset",
      padding: spacing(0, 3),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 30,
      '& .MuiFormControlLabel-label': {
        ...typography.button,
        color: palette.neutral[500]
      },
      '& > svg': {
          cursor: 'move',
          '& path':{ 
fill: palette.neutral[400]
          }
      }
    },
  }),
  { name: "GolColumnChooser" }
);
