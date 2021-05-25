import { Column, Row, CellProps, TableOptions, IdType } from 'react-table'
import { ReactNode } from 'react'

export interface IGolDataGrid {
  listStyle?: boolean
  columns: Column<object>[]
  data: any[]
  initialValues?: object // undefined when dont use add button
  isInlineEdit?: boolean
  hasSelection?: boolean
  noToolbar?: boolean
  hidenColumnsList?: IdType<object>[]
  defaultSortedColumsList?: SortingRule[]
  defaultColumnOrderList?: string[]
  idExp?: string
  phrases?: IGolDataGridPhrases
  paginationProps?: Omit<
    IGolDataGridPaginationProps,
    'gotoPage' | 'setPageSize'
  > & {
    defaultPageSize?: number
  }
  'data-testid'?: string
  isLoading?: boolean
  searchInputValue?: string
  customActions?(editedRows?: Row<any>): ReactNode
  onDataChange?(data: any[]): void
  onRowChange?(row: Row<any>, state?: ModalStatus): void
  onDelete(rowsId: string[] | number[]): void
  onRefreshClick?(): void
  onExportClick?(): void
  onPrintClick?(): void
  onEditClick?(editedRows?: Row<any>): void
  onAddClick?(rawRow?: any): void
  onSearchInputChange?(value?: string): void
  onSortChange?(isSorted: boolean, isSortedDesc?: 'desc' | 'asc'): void
  onFilterChange?(value: React<'id' | 'value', any>[]): void
}
declare module 'react-table' {
  interface TableOptions<D extends object>
    extends UsePaginationOptions<D>,
      UseSortByOptions<D> {
    idExp?: string
    phrases?: IGolDataGridPhrases
    isInlineEdit?: boolean
    editedRow?: any
    setEditedRow?(editedRow?: any): void
    onDelete(rows: any[]): void
    onEdit?(editedRows?: Row<any>): void
    onRowChange?(row: Row<any>, state?: ModalStatus): void
  }
}

export interface IGolDataGridTableOptionsObject {
  columns: Column<object>[]
  data: object[]
  idExp?: string
}

export interface IGolDataGridToolbarProps {
  numSelected: number
  addHandler(): void
  deleteHandler(): void
  onRefreshClick?(): void
  onExportClick?(): void
  onPrintClick?(): void
  onSearchInputChange?(value?: string): void
  isAddState?: boolean
  hasSelection?: boolean
  globalFilter?: string
  setGlobalFilter?(value?: string): void
  preGlobalFilteredRows?: any[]
  searchInputValue?: string
  allColumns?: any
  setShowFilterDrawer?: React.Dispatch<React.SetStateAction<boolean>>
  showFilterDrawer?: boolean
}

export interface IGolDataGridInstanceProps extends CellProps<object> {
  idExp: string
  phrases?: IGolDataGridPhrases
  editedRow?: any
  isInlineEdit?: boolean
  setEditedRow?(editedRow?: any): void
  onEdit(row: any): void
  onRowChange(row: Row<any>, state?: ModalStatus): void
  onDelete(rows: any[]): void
}

export interface IGolDataGridEditableCell extends IGolDataGridInstanceProps {
  customInput?(value: any, onChange: (value: any) => void): ReactNode
  customDisplayContent?(value: any): any
  row: Row<any>
  column: Column<any>
  cell: Cell
}

export interface IGolDataGridActionsCell extends IGolDataGridInstanceProps {
  customActions?(editedRows?: Row<any>, isEdit: boolean): ReactNode
  classes: Record<'root', string>
  row?: Row<any>
}

export interface IGolDataGridPhrases {
  editBtnTitle?: string
  deleteBtnTitle?: string
  saveBtnTitle?: string
  cancelBtnTitle?: string
  actionColumnTitle?: string
}

type labelDisplayedRowsTypes = {
  from: number
  to: number
  total: number
  page: number
}
export interface IGolDataGridPaginationProps {
  currentPage?: number
  pageSize?: number
  total?: number
  pageCount?: number
  pageSizes?: number[]
  onChangePage?: (currentPage: number, pageSize: number) => void
  onChangePageSize?: (pageSize: number) => void
  hideArrow?: boolean
  labelDisplayedRows?: ({
    from,
    to,
    total,
    page,
  }: labelDisplayedRowsTypes) => React.ReactNode | string
  labelPerPage?: string
  hidePageRange?: boolean
  hideDetail?: boolean
  gotoPage?: (updater: number | ((pageIndex: number) => number)) => void
  setPageSize?: (pageSize: number) => void
  boundaryCount?: number
  itemsBeforeActive?: number
  itemsAfterActive?: number
}
