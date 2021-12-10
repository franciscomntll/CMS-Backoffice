import { useEffect, useState, useMemo } from "react";
import {
  CellProps,
  TableInstance,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { fakeData } from "../../fakedata";
import { Button } from "../Inputs";
import ActionsComponent from "../Datatable/ActionsComponent";

export const DataTableColections = () => {
  const [datos, setDatos] = useState(fakeData);

  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre", // accessor is the "key" in the data
      },
      {
        Header: "Categoria",
        accessor: "categoria",
      },
      
      {
        Header: "Acciones",
        accessor: "",
        Cell: (props : CellProps<any>) => <ActionsComponent {...props} />,
      },
    ],
    []
  );
  



  const HandleRemove = (rowID : string) => {
    const newData = datos.filter((item : any) => item.id !== rowID);
    setDatos(newData);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // Paginación
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter, selectedRowIds },
    //
  } = useTable <TableInstance> (
    {
      columns,
      data: datos,
      initialState: { pageIndex: 0 },
      HandleRemove,
    },
    useSortBy,
    usePagination,
  );

  const handleRemoveAll = (arrRows : any) => {
    const arrIDs = arrRows.map((item : any) => item.original.id);
    const newArr = datos.filter((item : any) => !arrIDs.includes(item.id));
    setDatos(newArr);
  };

  return (
    <>
      <div className="w-full py-2 grid grid-cols-4 transition-all">
        {/* <div>
          {selectedFlatRows.length > 0 && (
            <Button
              variant={"secondary"}
              onClick={() => handleRemoveAll(selectedFlatRows)}
            >
              Borrar selección
            </Button>
          )}
        </div> */}
        
      </div>
      <table {...getTableProps()} className="w-full text-sm">
        <tbody {...getTableBodyProps()} >
        <div className="w-full wrapper overflow-auto">
          {page.map((row, idx) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={idx}
                className="border-b py-3 grid grid-cols-7 gap-18 place-items-center hover:bg-gray-100 transition"
              >
                {row.cells.map((cell, idx) => {
                  return (
                    <td {...cell.getCellProps()} key={idx}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </div>
        </tbody>
      </table>

      {/* <Pagination
        pageIndex={pageIndex}
        to={pageCount}
        setPageSize={setPageSize}
        pageSize={pageSize}
        total={rows.length}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        gotoPage={gotoPage}
      /> */}
      <style jsx>
        {`
        .wrapper {
          height: 50vh;
        }
        `}
      </style>
    </>
  );
};
