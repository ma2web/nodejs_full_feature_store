import {
  Popover as GolPopOver,
  Toolbar,
  Tooltip as GolTooltip,
} from "@material-ui/core";
// import { ReactComponent as GridToolbarColumnChooserIcon } from "assets/images/icons/DataGrid/GridColumnChooser.svg";
import GolIconButton from "components/GolIconButton";
import React, { FC, useState } from "react";
// import SurIconButton from 'components/SurIconButton'
import type { IGolDataGridToolbarProps } from "../GolDataGrid.types";
import useStyle from "./GolDataGridToolbar.styles";
import { ReactComponent as SearchIcon } from "assets/images/icons/UI/Search.svg";
import { ReactComponent as LayoutIcon } from "assets/images/icons/UI/Layout.svg";
import { ReactComponent as SaveIcon } from "assets/images/icons/UI/Save.svg";
import { ReactComponent as TrashIcon } from "assets/images/icons/UI/Trash.svg";
import { ReactComponent as LikeIcon } from "assets/images/icons/UI/Like.svg";
import { ReactComponent as EditIcon } from "assets/images/icons/Content/Edit.svg";
import { ReactComponent as DownIcon } from "assets/images/icons/Arrows/small/down.svg";
import { ReactComponent as PrinterIcon } from "assets/images/icons/UI/Printer.svg";
import { ReactComponent as ImportIcon } from "assets/images/icons/UI/Upload.svg";
import { ReactComponent as ExportIcon } from "assets/images/icons/UI/Download.svg";
import { ReactComponent as LeftIcon } from "assets/images/icons/Arrows/Big/left.svg";
import GolButtonGroup from "components/GolButtonGroup";
import GolButton from "components/GolButton";

const GolDataGridToolbar: FC<IGolDataGridToolbarProps> = ({
  numSelected,
  addHandler,
  deleteHandler,
  isAddState,
  hasSelection,
  onRefreshClick,
  onExportClick,
  onPrintClick,
  onSearchInputChange,
  // searchInputValue,
  // preGlobalFilteredRows,
  setGlobalFilter,
  globalFilter,
  allColumns,
  setShowFilterDrawer,
  showFilterDrawer
}) => {
  const classes = useStyle({showFilterDrawer});

  return (
    <Toolbar className={classes.root}>
      {/* <GolDataGridColumnChooser
        classes={{
          root: classes.GolDataGridToolsSectionLeft,
          popper: classes.columnChooserPopper,
        }}
        {...{allColumns}}
      /> */}

      <GolButtonGroup
        classes={{ groupedHorizontal: classes.groupedButtonsLeft }}
      >
        <GolIconButton hasNeutral  className={classes.searchButton}>
          <SearchIcon />
        </GolIconButton>
        <GolIconButton hasNeutral className={classes.arrowButtonLayout}>
          <LayoutIcon />
          <DownIcon />
        </GolIconButton>
        <GolIconButton hasNeutral>
          <SaveIcon />
        </GolIconButton>
        <GolIconButton hasNeutral>
          <TrashIcon />
        </GolIconButton>
        <GolIconButton hasNeutral>
          <LikeIcon />
        </GolIconButton>
        <GolIconButton hasNeutral>
          <EditIcon />
        </GolIconButton>
      </GolButtonGroup>

      <GolButtonGroup
        classes={{ groupedHorizontal: classes.groupedButtonsRight }}
      >
      {/* <GolButton startIcon={<PrinterIcon />} variant="outlined" hasNeutral >
        Print
      </GolButton>
        <GolButton startIcon={<ImportIcon />} variant="outlined" hasNeutral>
          Import
        </GolButton>
        <GolButton startIcon={<ExportIcon />} variant="outlined" hasNeutral>
          Export
        </GolButton> */}
        <GolIconButton variant="outlined" color="primary" className={classes.drawerButton} onClick={() => setShowFilterDrawer(!showFilterDrawer)}>
          <LeftIcon />
        </GolIconButton>
      </GolButtonGroup>
    </Toolbar>
  );
};

const GolDataGridColumnChooser = ({
  classes,
  getToggleHideAllColumnsProps,
  allColumns,
}: {
  classes: Record<"root" | "popper", string>;
  getToggleHideAllColumnsProps?: any;
  allColumns?: any;
}) => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleOpen = (event: React.MouseEvent<Element, MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <div className={classes.root}>
      <GolTooltip title="Column Chooser" placement="bottom">
        <GolIconButton variant="outlined" aria-label="add" onClick={handleOpen}>
          {/* <GridToolbarColumnChooserIcon /> */}icon
        </GolIconButton>
      </GolTooltip>
      <GolPopOver
        id={`GolDataGridColumnChooser`}
        open={Boolean(anchorEl)}
        {...{
          anchorEl,
          onClose: handleClose,
          classes: {
            paper: classes.popper,
          },
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: -10,
          },
        }}
      >
        {allColumns.map(
          (column) =>
            column.id !== "selection" && (
              <div key={column.id}>
                <label>
                  <input type="checkbox" {...column.getToggleHiddenProps()} />{" "}
                  {column.id}
                </label>
              </div>
            )
        )}
      </GolPopOver>
    </div>
  );
};

export default GolDataGridToolbar;
