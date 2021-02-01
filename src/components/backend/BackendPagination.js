import React from 'react'
import { Row, Pagination } from 'react-bootstrap'

const BackendPagination = (props) => {
  const { pageItems, currentPage, setCurrentPage, totalPages } = props

  const toPage = (val) => {
    if (currentPage + val <= 0) return
    if (val === 1 && currentPage === totalPages) return
    setCurrentPage(currentPage + val)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Row className="paginationSec">
        <div>
          <Pagination>
            <Pagination.Prev href={``} onClick={() => toPage(-1)} />
            {pageItems}
            <Pagination.Next href={``} onClick={() => toPage(1)} />
          </Pagination>
        </div>
      </Row>
    </>
  )
}

export default BackendPagination
