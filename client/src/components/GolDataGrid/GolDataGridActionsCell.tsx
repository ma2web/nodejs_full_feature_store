import React, { FC, useCallback, useState } from "react";
import type { IGolDataGridActionsCell } from "./GolDataGrid.types";
import { objectHasEmptyProperty } from "utils/objectChecker";
import GolIconButton from "components/GolIconButton";
import { ReactComponent as GridSubmitIcon } from "assets/images/icons/UI/Done.svg";
import { ReactComponent as GridCancelIcon } from "assets/images/icons/UI/CloseCircle.svg";
import { ReactComponent as GridEditIcon } from "assets/images/icons/Content/Edit.svg";
import { ReactComponent as GridDeleteIcon } from "assets/images/icons/UI/Trash.svg";
// import SurDialog from 'components/SurDialog'
import produce from "immer";
import { makeGolStyles } from "theme";

const GolDataGridActionsCell: FC<IGolDataGridActionsCell> = ({
  idExp,
  row,
  editedRow,
  setEditedRow,
  customActions,
  onRowChange,
  onEdit,
  onDelete,
  // phrases,
  isInlineEdit,
  classes,
}) => {
  const changeEdit = useCallback(
    (item: any) => {
      if (isInlineEdit) {
        setEditedRow && setEditedRow(item);
      } else {
        onEdit(item);
      }
    },
    [onEdit, setEditedRow, isInlineEdit]
  );
  const handleEdit = () => {
    changeEdit(row?.original);
  };

  const handleDelete = () => {
    onDelete([(row.original as any)[idExp]]);
  };

  const isEdited =
    isInlineEdit && editedRow?.[idExp] === (row.original as any)[idExp];

  const handleSubmit = useCallback(
    (data: any) => {
      if (data.isAdd) {
        const { [idExp]: _, isAdd, ...addRow } = data;
        onRowChange(addRow, "add");
      } else {
        onRowChange(data, "edit");
      }
      changeEdit(undefined);
    },
    [idExp, onRowChange, changeEdit]
  );

  const handleDiscard = () => {
    changeEdit(undefined);
  };

  return (
    <div className={classes.root}>
      {isEdited ? (
        <IsEditActionsComponent
          disabled={!objectHasEmptyProperty(editedRow)}
          onSubmit={() => {
            handleSubmit(editedRow);
          }}
          onDiscard={handleDiscard}
        />
      ) : (
        <IsNotEditActionsComponent
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      {customActions?.(editedRow, isEdited!)}
    </div>
  );
};

const IsEditActionsComponent = ({ disabled, onSubmit, onDiscard }: any) => {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    title: "",
    content: "",
    type: undefined,
    onAction: () => {},
  });
  return (
    <>
      <GolIconButton
        {...{ disabled }}
        variant="text"
        onClick={() => {
          setDialogState(
            produce((draft) => {
              draft.isOpen = true;
              draft.title = "Submit";
              draft.content = "Are you sure to submit changes?";
              draft.type = "success" as any;
              draft.onAction = onSubmit;
            })
          );
        }}
      >
        <GridSubmitIcon />
      </GolIconButton>
      <GolIconButton
        variant="text"
        onClick={() => {
          setDialogState(
            produce((draft) => {
              draft.isOpen = true;
              draft.title = "Cancel";
              draft.content = "Are you sure to cancel changes?";
              draft.type = "error" as any;
              draft.onAction = onDiscard;
            })
          );
        }}
      >
        <GridCancelIcon />
      </GolIconButton>
    </>
  );
};
const IsNotEditActionsComponent = ({ onEdit, onDelete }: any) => {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    title: "",
    content: "",
    type: undefined,
    onAction: () => {},
  });
  const classes = useStyles();
  return (
    <>
      <GolIconButton
        className={classes.iconButton}
        name="DataGridEditBurron"
        variant="text"
        color="inherit"
        onClick={onEdit}
      >
        <GridEditIcon />
      </GolIconButton>
      <GolIconButton
        className={classes.iconButton}
        variant="text"
        name="DataGridDeleteBurron"
        onClick={() =>
          setDialogState(
            produce((draft) => {
              draft.isOpen = true;
              draft.title = "Delete";
              draft.content = "Are you sure to delete row?";
              draft.type = "error" as any;
              draft.onAction = onDelete;
            })
          )
        }
      >
        <GridDeleteIcon />
      </GolIconButton>
    </>
  );
};

export default GolDataGridActionsCell;

const useStyles = makeGolStyles(
  ({ palette }) => ({
    iconButton: {
      "& svg path": {
        fill: palette.neutral[600],
      },
    },
  }),
  {name: 'gol-datagrid-action-cell'}
);
