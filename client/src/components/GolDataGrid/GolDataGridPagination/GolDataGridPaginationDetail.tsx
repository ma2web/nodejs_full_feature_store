// import SurAutocomplete from 'components/SurAutocomplete'
import { find } from 'ramda'
import React, { useMemo } from 'react'
import { IGolDataGridPaginationProps } from '../GolDataGrid.types'
import { FormikConfig } from 'formik'
import GolForm from 'components/GolForm'
import GolTextFormField from 'components/GolTextField'

const GolDataGridPaginationDetail = ({
  pageSize,
  currentPage,
  total,
  labelDisplayedRows,
  labelPerPage,
  pageSizes,
  onChangePageSize,
  setPageSize,
  gotoPage,
}: Omit<
  IGolDataGridPaginationProps,
  'onChangePage' | 'hideArrow' | 'hidePageRange' | 'hideDetail'
>) => {
  const from = pageSize! * (currentPage! - 1) + 1
  const to =
    pageSize! * currentPage! > total! ? total! : pageSize! * currentPage!

  const data = useMemo(
    () => pageSizes?.map((item) => ({ label: `${item}`, value: item })),
    [pageSizes],
  )

  const AutoCompleteValue =
    data && find((item: any) => item.value === pageSize)(data)

  const initialValues = {
    goto: undefined,
  }
  const onSubmit: FormikConfig<typeof initialValues>['onSubmit'] = (
    values,
    // actions,
  ) => {
    gotoPage!(+(values.goto ?? 1) - 1)
  }

  return (
    <div className="actions">
      {total! > pageSize! && (
        <>
          Go To:
          <GolForm {...{ initialValues, onSubmit }} validateOnChange>
            {() => <GolTextFormField name="goto" />}
          </GolForm>
        </>
      )}
      {labelDisplayedRows!({ from, to, total: total!, page: currentPage! })}
      <div className="per-page">
        <label>{labelPerPage}</label>
        {/* <SurAutocomplete
          data={data as any[]}
          id="controlled-demo"
          value={AutoCompleteValue}
          inputProps={{ disabled: true, value: AutoCompleteValue.value }}
          options={{
            labelExp: 'label',
            valueExp: 'value',
            hasAutoComplete: false,
          }}
          onChange={(newValue: any) => {
            onChangePageSize!(newValue.value)
            setPageSize!(newValue.value)
          }}
        /> */}
      </div>
    </div>
  )
}

export default GolDataGridPaginationDetail
