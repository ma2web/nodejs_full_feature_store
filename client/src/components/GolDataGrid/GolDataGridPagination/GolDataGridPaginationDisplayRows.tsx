import React from 'react'

const SurDataGridPaginationDisplayRows = ({
  from,
  to,
  total,
}: {
  from: number
  to: number
  total: number
}) => (
  <>
    <div className="display-items">
      Disaply Items {from} - {to}
    </div>
    <span className="seprator">|</span>
    <div className="total">Total of {total} </div>
    <span className="seprator">|</span>
  </>
)

export default SurDataGridPaginationDisplayRows
