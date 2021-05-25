import React, { FC, useState } from 'react'
import GolDataGrid from './GolDataGrid'
import produce from 'immer'
import { Row } from 'react-table'
// import { SurToast } from 'components/SurToast'
import { IGolDataGridPhrases } from './GolDataGrid.types'
import { findIndex, without } from 'ramda'
// import SurDialog from 'components/SurDialog'
import GolDataGridEditableCell from './GolDataGridEditableCell'
import { Typography } from '@material-ui/core'
import GolProgressBar from 'components/GolProgressBar'
// import GolSwitch from 'components/SurSwitch'
import GolSwitch from '@material-ui/core/Switch'
import { ReactComponent as GridMoreIcon } from 'assets/images/icons/DataGrid/GridMore.svg'
import GolIconButton from 'components/GolButton'
// import GolSlider from 'components/SurSlider'
import GolSlider from '@material-ui/core/Slider'
import { Meta } from '@storybook/react/types-6-0'
import { generateRandomNumber } from 'utils/numbers'

const generateData = (count: number) => {
  const testData = []
  for (let i = 1; i <= count; i += 1) {
    testData.push({
      id: i.toString(),
      col1: `item${i}`,
      col2: generateRandomNumber(),
      col3: i % 2 === 0,
    })
  }
  return testData
}
const customActions = (row?: Row<any>, isEdit?: boolean) => (
  <GolIconButton
    disabled={isEdit}
    variant="text"
    onClick={() => {}}
    style={{ width: 42, height: 42, padding: 0, margin: '0 3px' }}
  >
    {/* {phrases?.saveBtnTitle} */}
    <GridMoreIcon />
  </GolIconButton>
)

interface IGolDataGridStory {
  loading: boolean
  hasSelection: boolean
  noToolbar: boolean
  itemsAfterActive: number
  itemsBeforeActive: number
  boundaryCount: number
  defaultPageSize: number
  hideArrow: boolean
  hideDetail: boolean
  hidePageRange: boolean
  labelPerPage: string

  onChange(e: any): void
  onAddClick(e: any): void
  onEditClick(e: any): void
  onRefreshClick(e: any): void
  onExportClick(e: any): void
  onPrintClick(e: any): void
  onSortChange(e: any, m: any): void
}
const Component: FC<IGolDataGridStory> = ({
  loading: isLoading,
  hasSelection,
  noToolbar,
  itemsAfterActive,
  itemsBeforeActive,
  boundaryCount,
  hideArrow,
  hideDetail,
  hidePageRange,
  labelPerPage,
  defaultPageSize,
  onChange,
  onAddClick,
  onEditClick,
  onRefreshClick,
  onExportClick,
  onPrintClick,
  onSortChange,
}) => {
  const testData = React.useMemo(() => generateData(600), [])

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [data, setData] = useState<any[]>(testData)

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
        editable: true,
        sortable: true,
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
        editable: true,
        sortable: true,
        Cell: (props: any) => (
          <GolDataGridEditableCell
            {...props}
            customDisplayContent={(value) => (
              <Typography
                component="div"
                variant="h5"
                style={{
                  // backgroundColor: "#ddd",
                  // color: "#fff",
                  height: '100%',
                  width: '100%',
                  display: 'flex',
                  // justifyContent: "center",
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                {/* <div style={{width:,backgroundColor:""}} /> */}
                <GolProgressBar
                  value={Number(value)}
                  max={100}
                  title="Custom"
                  remaning={`${Number(value)} / 100`}
                  // status={Number(value) === 100 ? 'success' : 'progress'}

                  hideIcon
                  hideStatusBar
                  // onIconClick={() => {}}
                />
              </Typography>
            )}
            customInput={(value: any, onChange) => (
              <GolSlider
                {...{
                  value,
                }}
                min={0}
                max={100}
                color="secondary"
                onChange={(event: any, newValue: number | number[]) =>
                  onChange(newValue)
                }
                marks={true}
                step={10}
                valueLabelDisplay="on"
              />
            )}
          />
        ),
      },
      {
        Header: 'Column 3',
        accessor: 'col3',
        editable: true,
        Cell: (props: any) => (
          <GolDataGridEditableCell
            {...props}
            customDisplayContent={(value) => (
              <Typography
                component="div"
                variant="h5"
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <GolSwitch
                  color="primary"
                  // label="Custom Switch"
                  disabled={true}
                  checked={Boolean(value)}
                />
              </Typography>
            )}
            customInput={(value, onChange) => (
              <Typography
                component="div"
                variant="h5"
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <GolSwitch
                  color="secondary"
                  // label="Custom Switch"
                  checked={Boolean(value)}
                  onChange={onChange}
                />
              </Typography>
            )}
          />
        ),
      },
    ],
    [],
  )

  const GolDataGridPhrases: IGolDataGridPhrases = {
    editBtnTitle: 'Edit',
    deleteBtnTitle: 'Delete',
    cancelBtnTitle: 'Cancel',
    saveBtnTitle: 'Save',
    actionColumnTitle: 'Actions',
  }

  const onRowChange = (editRow: any, status: any) => {
    // SurToast(JSON.stringify(editRow), {
    //   position: 'top-right',
    //   autoClose: 4000,
    //   delay: 0,
    //   title: 'Row Update Data',
    //   type: 'success',
    // })

    setData(
      produce((draft) => {
        if (status === 'edit') {
          const editRowIndex = findIndex((item: any) => item.id === editRow.id)(
            data,
          )
          draft[editRowIndex] = editRow
        } else {
          draft.unshift({ ...editRow, id: generateRandomNumber() })
        }
      }),
    )
  }

  const onDataChange = (newData: any[]) => {
    onChange(newData)
    setData(newData)
  }

  const onDelete = (ids: number[] | string[]) => {
    const newData: any[] = without(ids, data)
    // filter((item) => !ids.includes(item.id))(data)
    setData(newData)
  }
  return (
    <div style={{ padding: 50, width: '100%' }}>
      <GolDataGrid
        {...{
          data,
          columns,
          onDataChange,
          onDelete,
          onRowChange,
          customActions,
          noToolbar,
          isLoading,
          hasSelection,
        }}
        isInlineEdit
        initialValues={{ col1: 'Test', col2: 0, col3: undefined }}
        // hidenColumnsList={['col3']}
        // defaultSortedColumsList={[{ id: 'col2', desc: false }]}
        // defaultColumnOrderList={['col2', 'col3', 'col1']}
        phrases={GolDataGridPhrases}
        onAddClick={(rawRow) => {
          onAddClick(rawRow)
          setIsOpen(true)
        }}
        onEditClick={(rawRow) => {
          onEditClick(rawRow)
          setIsOpen(true)
        }}
        onRefreshClick={() => {
          onRefreshClick('refresh')
          setData(testData)
        }}
        onExportClick={() => {
          onExportClick('onExportClick')
        }}
        onPrintClick={() => {
          onPrintClick('onPrintClick')
        }}
        onSortChange={(isSorted, isSortedDesc) => {
          onSortChange(isSorted, isSortedDesc)
        }}
        paginationProps={{
          defaultPageSize,
          itemsAfterActive,
          itemsBeforeActive,
          hideArrow,
          hideDetail,
          hidePageRange,
          labelPerPage: labelPerPage?.length > 0 ? labelPerPage : undefined,
          boundaryCount,
          pageSizes: [5, 10, 15, 20],
        }}
      />
      {/* <SurDialog
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
        content={'test'}
      /> */}
    </div>
  )
}

const argTypes = {
  loading: { control: 'boolean', defaultValue: false },
  hasSelection: { control: 'boolean', defaultValue: false },
  noToolbar: { control: 'boolean', defaultValue: false },
  itemsAfterActive: {
    control: { type: 'range', options: [0, 100, 1] },
    defaultValue: 1,
  },
  defaultPageSize: {
    control: { type: 'range', options: [0, 100, 1] },
    defaultValue: 5,
  },
  itemsBeforeActive: {
    control: { type: 'range', options: [0, 100, 1] },
    defaultValue: 1,
  },
  boundaryCount: {
    control: { type: 'range', options: [0, 100, 1] },
    defaultValue: 1,
  },
  hideArrow: { control: 'boolean', defaultValue: false },
  hideDetail: { control: 'boolean', defaultValue: false },
  hidePageRange: { control: 'boolean', defaultValue: false },
  labelPerPage: { control: 'text', defaultValue: '' },

  onChange: { action: 'onDataChange' },
  onAddClick: { action: 'onAddClick' },
  onEditClick: { action: 'onEditClick' },
  onRefreshClick: { action: 'onRefreshClick' },
  onExportClick: { action: 'onExportClick' },
  onPrintClick: { action: 'onPrintClick' },
  onSortChange: { action: 'onSortChange' },
}

export const GolDataGridStory = Component.bind({})
export default {
  component: Component,
  title: 'Data Grid',
  argTypes,
} as Meta
