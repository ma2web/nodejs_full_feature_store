import React, { memo, useMemo } from 'react'
import GolIconButton from 'components/GolIconButton'
// import SurIconButton from 'components/SurIconButton'
import {ReactComponent as ArrowRight} from 'assets/images/icons/Arrows/small/right.svg'
import {ReactComponent as ArrowLeft} from 'assets/images/icons/Arrows/small/left.svg'
import {ReactComponent as ArrowRightEnd} from 'assets/images/icons/Arrows/small/rightEnd.svg'
import {ReactComponent as ArrowLeftEnd} from 'assets/images/icons/Arrows/small/leftEnd.svg'
import { IGolDataGridPaginationProps } from '../GolDataGrid.types'
import classNames from 'classnames'

type IReqProps =
  | 'currentPage'
  | 'hideArrow'
  | 'onChangePage'
  | 'pageSize'
  | 'total'
  | 'gotoPage'
  | 'pageCount'
  | 'boundaryCount'
  | 'itemsBeforeActive'
  | 'itemsAfterActive'

const GolDataGridPaginationPageRange = ({
  currentPage,
  hideArrow,
  onChangePage,
  pageSize,
  total,
  pageCount,
  gotoPage,
  boundaryCount,
  itemsBeforeActive,
  itemsAfterActive,
}: Pick<IGolDataGridPaginationProps, IReqProps>) => {
  const items: any[] = []
const startPage = useMemo(() => {
  let start
  if(currentPage - 2 > 0) {
    if(currentPage + 3 >= pageCount){
      start = pageCount - boundaryCount + 1}
      else{
        start = currentPage - 2}
      } 
      else start = 1

  return start
},[currentPage,pageCount])
  for (let page = startPage; page < startPage + boundaryCount; page += 1) {
      items.push(
        <GolIconButton
          onClick={() => {
            onChangePage!(page, pageSize!)
            gotoPage && gotoPage(page - 1)
          }}
          className={classNames("buttonPagination", currentPage === page && "activeButtonPagination")}
          color="primary"
          variant={currentPage === page ? 'contained' : 'text'}
          shape="circle"
          key={page.toString()}
        >
          {page}
        </GolIconButton>,
      )
  }
  
  return (
    <div className="pagination">
      {!hideArrow && (
        <>
        <GolIconButton
          onClick={() => {
            gotoPage && gotoPage(0)
          }}
          color="primary"
          variant="text"
          shape="circle"
          className="arrow-button arrow-left-end-button"
          disabled={currentPage === 1}
        >
          <ArrowLeftEnd />
        </GolIconButton>
        <GolIconButton
        onClick={() => {
          onChangePage &&
            onChangePage(Number(currentPage) - 1, Number(pageSize))
          gotoPage && gotoPage(Number(currentPage) - 2)
        }}
        color="primary"
        variant="text"
        shape="circle"
        className="arrow-button"
        disabled={currentPage === 1}
      >
        <ArrowLeft />
      </GolIconButton>
      </>
      )}
      {currentPage > 3 && <div style={{ width: 36, textAlign: 'center'}}>...</div>}
      {items}
      {currentPage + 3  < pageCount && <div  style={{ width: 36, textAlign: 'center'}}>...</div>}
      {!hideArrow && (
        <>
        <GolIconButton
          onClick={() => {
            onChangePage &&
              onChangePage(Number(currentPage) + 1, Number(pageSize))
            gotoPage && gotoPage(Number(currentPage))
          }}
          color="primary"
          variant="text"
          shape="circle"
          className="arrow-button arrow-right-button"
          disabled={currentPage === pageCount}
        >
          <ArrowRight />
        </GolIconButton>
        <GolIconButton
          onClick={() => {
            gotoPage && gotoPage( pageCount - 1)
          }}
          color="primary"
          variant="text"
          shape="circle"
          className="arrow-button arrow-right-end-button"
          disabled={currentPage === pageCount}
        >
          <ArrowRightEnd />
        </GolIconButton>
        </>
      )}
    </div>
  )
}

export default memo(GolDataGridPaginationPageRange)
