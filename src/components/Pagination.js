import React from 'react'
import _ from "lodash"
import propTypes, { number } from "prop-types"
function Pagination(props) {
    const {itemsCount , pageSize , currentPage, onPageChange} = props

    const pagesCount = Math.ceil(itemsCount/pageSize)
    if(pagesCount===1) return null
    const pages = _.range(1,pagesCount+1)
  return (
    <div>
      <nav aria-label="Page navigation example ">
        <ul className="pagination d-flex justify-content-center">
          {pages.map(page=>(

          <li key={page} className={page===currentPage ? "page-items active":"page-items"}>
            <a className="page-link" onClick={()=>onPageChange(page)}>
              {page}
            </a>
          </li>

          ))}

        </ul>
      </nav>
    </div>
  );
}

Pagination.propTypes={
    itemsCount:propTypes.number.isRequired,
    pageSize:propTypes.number.isRequired,
    currentPage:propTypes.number.isRequired,
    onPageChange:propTypes.func.isRequired
}

export default Pagination