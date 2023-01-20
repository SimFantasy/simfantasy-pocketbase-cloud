import React, { useCallback, memo } from 'react'
import { PaginationWrap } from './style'

const Pagination = ({ page, setPage, totalPages }) => {
  const handlePrevPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1)
    }
  }, [page, setPage])

  const handleNextPage = useCallback(() => {
    if (page < totalPages) {
      setPage(page + 1)
    }
  }, [page, setPage, totalPages])

  return (
    <PaginationWrap>
      <div className='pagination-info'>
        Page {page} of {totalPages}
      </div>
      <div className='pagination-btns'>
        <button className='pagination-btn prev' onClick={handlePrevPage} disabled={page === 1}>
          Previous
        </button>
        <button
          className='pagination-btn next'
          onClick={handleNextPage}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </PaginationWrap>
  )
}

export default memo(Pagination)
