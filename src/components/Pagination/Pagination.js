import React from 'react';
import './Pagination.css'

const Pagination = ({
                        limit,
                        allVehicles,
                        paginate,
                    }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allVehicles / limit); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination-container'>
            {allVehicles > limit ?
                    pageNumbers.map(number => (
                        <li key={number} className='pagination-item'>
                            <a onClick={() => paginate(number)} className="page-link">
                                {number}
                            </a>
                        </li>
                    )): ""
            }
        </ul>
    );
};

export default Pagination;