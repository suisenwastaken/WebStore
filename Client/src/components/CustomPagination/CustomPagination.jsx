import styles from './CustomPagination.module.css'
import { usePagination, DOTS } from '../../hooks/usePagination'
import React from 'react'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { BiRightArrowAlt } from 'react-icons/bi'

const CustomPagination = ({
    onPageChange,
    totalCount,
    siblingCount,
    currentPage,
    pageSize = 1,
    style,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    })

    if (currentPage === 0 || paginationRange.length < 2) {
        return null
    }
    const onNext = () => {
        onPageChange(currentPage + 1)
    }
    const onPrevious = () => {
        onPageChange(currentPage - 1)
    }
    let lastPage = paginationRange[paginationRange.length - 1]

    return (
        <ul className={styles.PaginationContainer} style={style}>
            <li
                key="previous"
                className={[
                    styles.PaginationItem,
                    currentPage === 1 ? styles.disabled : '',
                ].join(' ')}
                onClick={onPrevious}
            >
                <div className={[styles.arrow, styles.left].join(' ')}>
                    {' '}
                    <BiLeftArrowAlt />{' '}
                </div>
            </li>
            {paginationRange?.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return (
                        <li
                            key={`dots_${index}`}
                            className={[
                                styles.PaginationItem,
                                styles.Dots,
                            ].join(' ')}
                        >
                            &#8230;
                        </li>
                    )
                }

                return (
                    <li
                        key={pageNumber}
                        className={[
                            styles.PaginationItem,
                            pageNumber === currentPage ? styles.selected : '',
                        ].join(' ')}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                )
            })}
            <li
                key="next"
                className={[
                    styles.PaginationItem,
                    currentPage === lastPage ? styles.disabled : '',
                ].join(' ')}
                onClick={onNext}
            >
                <div className={[styles.arrow, styles.right].join(' ')}>
                    {' '}
                    <BiRightArrowAlt />{' '}
                </div>
            </li>
        </ul>
    )
}

export default CustomPagination
