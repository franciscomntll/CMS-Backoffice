import { FC, useEffect, useState } from "react";
import { propsPagination } from ".";
import { ArrowIcon } from "../icons";


const PaginationDesktop : FC <propsPagination> = (props) => {
  const {
    to,
    total,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageIndex,
    gotoPage,
    selectShow = true
  } = props;
  const [isActive, setActive] = useState(pageIndex);
  const noActive = "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 transition";
  const Active = "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 transition";

  useEffect(() => {
   setActive(pageIndex)
  }, [pageIndex])
  
  const pages = () => {
    let arr = [];
    for (let index = 0; index < to; index++) {
      arr.push(index);
    }
    return arr;
  };

  return (
    <div className="hidden lg:flex w-full items-center justify-between py-4 border-t border-gray-300">
      <span className="flex items-center gap-3">
        <p className="text-sm">
          Pagina {pageIndex} de {to} {total && `de ${total} resultados` } 
        </p>
        {selectShow && <Select {...props} /> }
        
      </span>
      <div className={`border-gray-300 rounded-lg ${to === 0 ? "hidden" : ""}`}>
        <button
          className={`cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
          onClick={previousPage}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>
        {pages().map((item, idx) => (
          <a
            onClick={() => gotoPage(item+1)}
            key={idx}
            className={`${
              item + 1 === isActive ? Active : noActive
            } cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
          >
            {item+1}
          </a>
        ))}
        <button
          className={`cursor-pointer relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
          onClick={nextPage}
          disabled={!canNextPage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default PaginationDesktop;

const Select = ({ pageSize, setPageSize }) => {
  return (
    <>
    <select
      className="text-sm px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
      value={pageSize}
      onChange={(e) => {
        setPageSize(Number(e.target.value));
      }}
    >
      {[10, 20, 30, 40, 50].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          Mostrar {pageSize}
        </option>
      ))}
    </select>
    <style  jsx>
      {`
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
      `}
    </style>
    </>
  );
};
