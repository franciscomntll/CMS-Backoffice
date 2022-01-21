import { Table, Tbody, Th, Thead, Tr, Td } from "@chakra-ui/react";
import React from "react";
import { useTable, useSortBy } from "react-table";

const Datatable = ({ columns, data, ...props }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        props
      },
      useSortBy,
      
    );
    console.log(data);
  return (
    <Table {...getTableProps()} bg={"white"} w={"100%"}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Header")}
              <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr fontSize={"sm"} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default Datatable;
