import React, { FC } from "react";
import { IGolDataGridPaginationProps } from "../GolDataGrid.types";
import GolDataGridPaginationPageRange from "./GolDataGridPaginationPageRange";
import SurDataGridPaginationDisplayRows from "./GolDataGridPaginationDisplayRows";
import useStyle from "./GolDataGridPagination.styles";
import GolForm from "components/GolForm";
import { GolTextFormField } from "components/GolFormFields";
import { FormikConfig } from "formik";
import GolAutoComplete from "components/GolAutoComplete";
import GolTextField from "components/GolTextField";

const SurDataGridPagination: FC<IGolDataGridPaginationProps> = ({
  currentPage,
  pageSize,
  total,
  pageSizes = ["5", "10", "15", "20"],
  onChangePage,
  onChangePageSize,
  pageCount,
  hideArrow,
  labelDisplayedRows = SurDataGridPaginationDisplayRows,
  labelPerPage = "Per Page",
  hidePageRange,
  hideDetail,
  gotoPage,
  setPageSize,
  boundaryCount,
  itemsAfterActive,
  itemsBeforeActive,
}) => {
  const classes = useStyle({ hidePageRange });
  const initialValues = {
    goto: undefined,
  };
  const onSubmit: FormikConfig<typeof initialValues>["onSubmit"] = (
    values
    // actions,
  ) => {
    gotoPage!(+(values.goto ?? 1) - 1);
  };
  
  return (
    <div className={classes.root}>
      {!hidePageRange && (
        <GolDataGridPaginationPageRange
          {...{
            currentPage,
            boundaryCount,
            itemsAfterActive,
            itemsBeforeActive,
            hideArrow,
            onChangePage,
            pageSize,
            total,
            pageCount,
            gotoPage,
          }}
        />
      )}
      <div className={classes.perPage}>
        <label>Rows per page</label>{" "}
        <GolAutoComplete
          classes={{ inputRoot: classes.inputSelect }}
          renderInput={(params) => <GolTextField  {...params} variant="standard" />}
          options={pageSizes}
          value={pageSize.toString()}
          onChange={(e, value) => setPageSize(+value)}
          disableClearable
        />
      </div>
      <div className={classes.perPage}>
        <label> Enter pge number</label>
        <GolForm {...{ initialValues, onSubmit }} validateOnChange>
          {() => (
            <GolTextFormField name="goto"  classes={{ root: classes.goto,  }} />
          )}
        </GolForm>
      </div>
    </div>
  );
};

export default SurDataGridPagination;
