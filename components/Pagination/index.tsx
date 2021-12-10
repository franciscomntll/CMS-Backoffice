import { FC } from "react"
import PaginationDesktop from "./Pagination"
import PaginationMobile from "./PaginationMobile"

const Pagination : FC = (props) => {
    return (
        <>
           <PaginationDesktop {...props}/>
           <PaginationMobile {...props}/> 
        </>
    )
}

export default Pagination


export interface propsPagination {
    to : any
    total : any
    previousPage : any
    nextPage: any
    canPreviousPage: any
    canNextPage: any
    pageIndex: any
    gotoPage: any
    selectShow: any
}