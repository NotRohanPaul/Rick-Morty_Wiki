import React from 'react'
import ReactPaginate from 'react-paginate'
import './Pagination.scss'
const Pagination = ({ info, setpageNum, pageNum }) => {

    return (
        <ReactPaginate
            className='pagination justify-content-center gap-4 my-4 '
            forcePage={pageNum === 1 ? 0 : pageNum - 1}
            previousLabel="Prev"
            nextLabel="Next"
            previousClassName='btn btn-primary '
            nextClassName='btn btn-primary'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            onPageChange={(e) => setpageNum(e.selected + 1)}
            pageCount={info?.pages}
        />
    )
}

export default Pagination