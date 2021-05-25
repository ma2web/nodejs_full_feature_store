import React, { FC } from 'react'
import produce from 'immer'
import type { IGolDataGridEditableCell } from './GolDataGrid.types'
import GolTextField from 'components/GolTextField'

const GolDataGridEditableCell: FC<IGolDataGridEditableCell> = ({
  idExp,
  column,
  editedRow,
  setEditedRow,
  cell,
  row,
  customInput,
  customDisplayContent,
}) => {
  // NOTE: Notice TS of course complaining about `editable` being missing
  // if (!column.editable || !editedRow?.id) return cell.value;

  if (
    editedRow &&
    column?.editable &&
    editedRow[idExp] === (row.original as any)[idExp]
  ) {
    const onChange = (value: any) => {
      setEditedRow!(
        produce((draft: any) => {
          draft[cell.column.id] = value
        }),
      )
    }
    return (
      <div className="GolDataGridEditableCell">
        {customInput ? (
          customInput(editedRow && editedRow?.[cell.column.id], onChange)
        ) : (
          <GolTextField
            className="GolDataGridTextField"
            // title={normalDisabled ? "Disabled" : "Normal"}
            placeholder={cell.column.Header as string}
            onClear={() => onChange('')}
            // disabled={normalDisabled}
            value={editedRow && editedRow?.[cell.column.id]}
            onChange={(e: any) => {
              onChange(e.target.value)
            }}
          />
        )}
      </div>
    )
  } else {
    if (customDisplayContent) {
      return customDisplayContent(cell?.value)
    } else {
      return String(cell?.value)
    }
  }
}

export default GolDataGridEditableCell
