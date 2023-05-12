import React from 'react'
import ReactPaginate from 'react-paginate';
import { IPropsPaginate } from './types';

const Paginate:React.FC<IPropsPaginate> = ({numberpages,atualpage,onPageActive,onPageChange}) => {
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            previousLinkClassName="text-xl hover:text-blue-600"
            nextLinkClassName="text-xl hover:text-blue-600"
            breakClassName='text-xl'
            disabledClassName="text-gray-100"
            disabledLinkClassName="text-gray-100 cursor-default"
            pageLinkClassName="text-white font-black"
            containerClassName={'pagination text-white flex justify-center'}
            pageClassName='px-1 ms-1 me-2 text-gray-700 text-xl'
            activeLinkClassName='text-blue-600 font-black text-xl'
            activeClassName={'active'}
            onPageChange={onPageChange}
            onPageActive={onPageActive}
            pageCount={numberpages}
            initialPage={atualpage}
            
        />

    )
}

export default Paginate;