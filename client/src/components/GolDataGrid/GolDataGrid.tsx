import React, {
  FC,
  memo,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  useTable,
  usePagination,
  useRowSelect,
  useSortBy,
  useRowState,
  useFilters,
  TableToggleAllRowsSelectedProps,
  useResizeColumns,
  useFlexLayout,
  Row,
  useGlobalFilter,
  useColumnOrder,
  Column,
  TableState,
} from "react-table";
import useStyles from "./GolDataGrid.style";
import {
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableFooter,
  TableSortLabel,
  TableContainer,
  Checkbox,
} from "@material-ui/core";
import GolDataGridToolbar from "./GolDataGridToolbar";
import GolDataGridPagination from "./GolDataGridPagination";
import GolDataGridEditableCell from "./GolDataGridEditableCell";
import { innerJoin, map } from "ramda";
import GolDataGridActionsCell from "./GolDataGridActionsCell";
import type {
  IGolDataGrid,
  IGolDataGridInstanceProps,
} from "./GolDataGrid.types";
// import { ReactComponent as SortIconAsc } from "assets/images/icons/DataGrid/Sort.svg";
import GolLoading from "@material-ui/core/CircularProgress";
import { useHotkeys } from "react-hotkeys-hook";
import { ReactComponent as FilterIcon } from "assets/images/icons/UI/Filter.svg";
import GolDataGridFilterDrawer from "./GolDataGridFilterDrawer";

const GolDataGrid: FC<IGolDataGrid> = ({
  idExp = "id",
  columns,
  data,
  phrases,
  isInlineEdit,
  paginationProps,
  initialValues,
  defaultSortedColumsList,
  defaultColumnOrderList,
  searchInputValue,
  isLoading,
  hasSelection,
  noToolbar,
  hidenColumnsList,
  onRefreshClick,
  onExportClick,
  onPrintClick,
  // onDataChange, //replace Data
  onRowChange, // change row data
  onEditClick, // edit buton event
  onAddClick, // add button event
  onSortChange,
  onSearchInputChange,
  customActions, // custom action right side of edit delete buttons
  onDelete, // list of ids for delete
  onFilterChange,
  listStyle,
  "data-testid": dataCy,
}) => {
  const classes = useStyles({ listStyle });
  const [editedRow, setEditedRow] = useState<any | undefined>(); //active edited row original datas
  const [selectedRowIndex, setSelectedRowIndex] = useState<any | null>(null);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);

  const [records, setRecords] = useState(data);
  const newData = useMemo(() => {
    if (editedRow?.isAdd) {
      return records.concat([editedRow]);
    }

    return records;
  }, [records, editedRow]);

  const defaultColumnOrder = defaultColumnOrderList
    ? [hasSelection ? "selection" : "", ...defaultColumnOrderList]
    : [];

  const defaultColumn: Partial<Column<object>> = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
      Cell: GolDataGridEditableCell,
    }),
    []
  );

  const initialState: Partial<TableState<object>> = React.useMemo(
    () => ({
      sortBy: defaultSortedColumsList ? defaultSortedColumsList : [],
      columnOrder:
        defaultColumnOrderList && defaultColumnOrderList?.length > 0
          ? defaultColumnOrder
          : undefined,
      hiddenColumns: hidenColumnsList
        ? [!hasSelection ? "selection" : "", ...hidenColumnsList]
        : [!hasSelection ? "selection" : ""],
      pageSize:
        paginationProps?.pageSize || paginationProps?.defaultPageSize || 5,
    }),
    [
      defaultSortedColumsList,
      defaultColumnOrderList,
      defaultColumnOrder,
      hidenColumnsList,
      hasSelection,
      paginationProps?.pageSize,
      paginationProps?.defaultPageSize,
    ]
  );

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    gotoPage,
    pageCount,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    setColumnOrder,
    state: { pageIndex, selectedRowIds, globalFilter, pageSize, filters },
    allColumns,
  } = useTable(
    {
      columns,
      data: newData,
      defaultColumn,
      idExp,
      phrases,
      isInlineEdit,
      initialState,
      editedRow,
      setEditedRow,
      customActions,
      onDelete,
      onEdit: onEditClick,
      onRowChange,
      manualFilters: true,
    },
    useGlobalFilter,
    useFilters, // useFilters!
    useSortBy,
    usePagination,
    useRowSelect,
    useFlexLayout,
    useResizeColumns,
    useColumnOrder,
    (hooks) => {
      hooks.allColumns.push((cols) => [
        // make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox.  Pagination is a problem since this will select all
          // rows even though not all rows are on the current page.
          minWidth: 30, // minWidth is only used as a limit for resizing
          width: 30, // width is used for both the flex-basis and flex-grow
          maxWidth: 30, // maxWidth is only used as a limit for resizing

          Header: ({
            getToggleAllRowsSelectedProps,
          }: {
            getToggleAllRowsSelectedProps: (
              props?: Partial<TableToggleAllRowsSelectedProps>
            ) => TableToggleAllRowsSelectedProps;
          }) => (
            <Checkbox
              color="primary"
              {...(getToggleAllRowsSelectedProps() as any)}
            />
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <Checkbox
              color="primary"
              {...(row.getToggleRowSelectedProps() as any)}
            />
          ),
        },
        ...cols,
        {
          id: "actions",
          minWidth: 66, // minWidth is only used as a limit for resizing
          width: 66, // width is used for both the flex-basis and flex-grow
          maxWidth: 66, // maxWidth is only used as a limit for resizing
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox.  Pagination is a problem since this will select all
          // rows even though not all rows are on the current page.  The solution should
          // be server side pagination.  For one, the clients should not download all
          // rows in most cases.  The client should only download data for the current page.
          // In that case, getToggleAllRowsSelectedProps works fine.
          // Header:  phrases.actionColumnTitle,
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: (cellProps: IGolDataGridInstanceProps) => (
            <GolDataGridActionsCell
              {...cellProps}
              {...{
                customActions,
                classes: { root: classes.GolDataGridActionsCell },
              }}
            />
          ),
        },
      ]);
    }
  );

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  }, [filters]);

  useEffect(() => {
    if (paginationProps?.onChangePageSize) {
      paginationProps?.onChangePageSize(pageSize);
    }
  }, [pageSize]);

useEffect(() => {
  if(paginationProps?.onChangePageSize)
  paginationProps?.onChangePageSize(pageSize)
},[pageSize])

  useEffect(() => {
    if (paginationProps && paginationProps.defaultPageSize) {
      setPageSize(paginationProps.defaultPageSize);
    }
  }, [paginationProps, setPageSize]);

  const handleAdd = () => {
    const emptyRawData = {
      ...initialValues,
      [idExp]: `new-${new Date().getTime()}`,
    };
    if (isInlineEdit) {
      setEditedRow({ ...emptyRawData, isAdd: true });
    } else {
      onAddClick && onAddClick(emptyRawData);
    }
  };

  const handleDelete = () => {
    const deleteListIds = map(
      (item: Row<any>) => item.original[idExp],
      innerJoin(
        (record, index) => Number(record.index) === Number(index),
        rows,
        Object.keys(selectedRowIds)
      )
    );
    onDelete(deleteListIds);
  };

  return (
    <TableContainer className={classes.root} data-testid={dataCy}>
      {!noToolbar && (
        <GolDataGridToolbar
          numSelected={Object.keys(selectedRowIds).length}
          deleteHandler={handleDelete}
          isAddState={editedRow?.isAdd}
          addHandler={handleAdd}
          {...{
            hasSelection,
            onRefreshClick,
            onExportClick,
            onPrintClick,
            onSearchInputChange,
            globalFilter,
            preGlobalFilteredRows,
            setGlobalFilter,
            searchInputValue,
            allColumns,
            setShowFilterDrawer,
            showFilterDrawer,
          }}
        />
      )}
      <Table {...(getTableProps() as any)}>
        <GolDataGridFilterDrawer
          {...{ showFilterDrawer, allColumns, setColumnOrder }}
        />
        <GolDataGridTableHead
          {...{ headerGroups, onSortChange, rootClasses: classes.headRoot }}
        />
        {isLoading ? (
          <GolLoading />
        ) : (
          // <GolLoading isLoading={isLoading} />
          <>
            <TableBody>
              {page.map((row) => {
                prepareRow(row);
                const rowProps = row.getRowProps();
                return (
                  <TableRow
                    // classes={{root: classes.row}}
                    className={classes.row}
                    {...(rowProps as any)}
                    key={rowProps.key}
                    data-testid={`DataGridRow-${row.cells[0].value}`}
                    onClick={() => setSelectedRowIndex(row.index)}
                    style={{
                      ...rowProps.style,
                      // background:
                      //   row.index === selectedRowIndex ? "#00afec" : "white",
                      // color: row.index === selectedRowIndex ? "white" : "black",
                    }}
                  >
                    {row.cells.map((cell) => {
                      const cellProps = cell.getCellProps();
                      return (
                        <TableCell
                          classes={{ root: classes.cell }}
                          {...(cellProps as any)}
                          key={cellProps.key}
                        >
                          {cell.render("Cell")}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>

            {paginationProps && (
              <TableFooter>
                <TableRow>
                  <TableCell>
                    <GolDataGridPagination
                      total={paginationProps?.total ?? data.length}
                      {...({
                        ...paginationProps,
                        gotoPage,
                        setPageSize,
                        pageCount,
                        pageSize,
                        currentPage:
                          paginationProps?.currentPage ?? pageIndex + 1,
                        onChangePage:
                          paginationProps?.onChangePage ??
                          ((current: number) => {
                            gotoPage(current - 1);
                          }),
                      } as any)}
                    />
                  </TableCell>
                </TableRow>
              </TableFooter>
            )}
          </>
        )}
      </Table>
    </TableContainer>
  );
};

const GolDataGridTableHead = ({
  headerGroups,
  onSortChange,
  rootClasses,
}: any) => (
  <TableHead classes={{ root: rootClasses }}>
    {headerGroups.map((headerGroup: any, index: number) => (
      <TableRow key={index} {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column: any, i: number) => (
          <TableCell
            key={i}
            className={
              column.isSorted && column.sortable ? "ColumnIsSorted" : ""
            }
            {...(column.id === "selection" ?? !column.sortable
              ? column.getHeaderProps()
              : column.getHeaderProps(column.getSortByToggleProps()))}
          >
            {!!column.filterValue && <FilterIcon />}
            {column.render("Header")}
            {column.isSorted && column.sortable ? (
              <TableSortLabel
                active={column.isSorted}
                // react-table has a unsorted state which is not treated here
                direction={column.isSortedDesc ? "desc" : "asc"}
                // IconComponent={SortIconAsc as any}
                onChange={() =>
                  column.sortable &&
                  onSortChange?.(
                    column.isSorted,
                    column.isSortedDesc ? "desc" : "asc"
                  )
                }
              />
            ) : null}
          </TableCell>
        ))}
      </TableRow>
    ))}
  </TableHead>
);

export default memo(GolDataGrid);
