import { ReactComponent as EditTableIcon } from "assets/images/icons/Content/EditTable.svg";
import { ReactComponent as FilterIcon } from "assets/images/icons/UI/Filter.svg";
import classNames from "classnames";
import GolButton from "components/GolButton";
import React, { FC, useEffect, useState } from "react";
import GolColumnChooser from "./components/GolColumnChooser";
import GolFilter from "./components/GolFilter";
import useStyle from "./GolDataGridFilterDrawer.style";

export type whichFormType = 'columnChooser' | 'filter' | undefined

interface IGolDataGridFilterDrawerProps {
  showFilterDrawer?: boolean;
  allColumns: any;
  setColumnOrder: any;
}

const GolDataGridFilterDrawer: FC<IGolDataGridFilterDrawerProps> = ({
  showFilterDrawer,
  allColumns,
  setColumnOrder
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [whichForm, setWhichForm] = useState<whichFormType>();
  const classes = useStyle({ showFilterDrawer });
  
  useEffect(() => {
    if(!showFilterDrawer && whichForm)
      setWhichForm(undefined)
  },[showFilterDrawer])

  return (
    <>
    <div className={classes.root}>
     <div className={classes.content}>
     <GolButton
        className={classNames(classes.button, whichForm === "columnChooser" && 'active')}
        endIcon={<EditTableIcon />}
        variant="text"
        onClick={() => setWhichForm(whichForm === 'columnChooser' ? undefined : 'columnChooser')}
      >
        COLUMNS
      </GolButton>
      <GolButton
        className={classNames(classes.button, whichForm === "filter" && 'active')}
        endIcon={<FilterIcon />}
        variant="text"
        onClick={() => setWhichForm(whichForm === "filter" ? undefined : 'filter')}
      >
        FILTERS
      </GolButton>
     </div>
     <GolColumnChooser {...{allColumns, whichForm, setColumnOrder}} />
     <GolFilter {...{whichForm, allColumns}}/>
     </div>
     {/* <div className={classes.columnChooser}>
        <GolTextField
          className={classes.searchInput}
          leftPrefix={<SearchIcon />}
          onChange={(value) => setSearchValue(value.target.value)}
          placeholder="Search"
        />
        {columns.map(
          (column) =>
            column.id !== "selection" && (
              <GolCheckbox
                containerClassName={classes.checkboxColumnChooser}
                label={column.Header}
                {...column.getToggleHiddenProps()}
              />
            )
        )}
      </div> */}
   
    </>
  );
};

export default GolDataGridFilterDrawer;

