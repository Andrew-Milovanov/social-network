import React, { useState } from 'react'
import styles from './Paginator.module.css'
import cn from 'classnames'

let Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10 }) => {

    let pageCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)

    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize 


    return (
        <div className={styles.paginator}>
        {portionNumber > 1 &&
        <button onClick={()=> setPortionNumber(portionNumber - 1)}>Prov</button>}
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)} onClick={(e) => { onPageChange(p) }}>{p}</span>
            })}
            {portionCount > portionNumber && <button onClick={()=> setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    )
}

export default Paginator