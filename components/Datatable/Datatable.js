import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import {
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
  Select,
  Box,
  Flex,
  Text,
  IconButton,
  Tooltip,
  Divider,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useTable, useSortBy, usePagination, useRowSelect } from "react-table";
import IndeterminateCheckbox from "./IndeterminateCheckbox";

const Datatable = ({ isLoading, columns, data, ...props }) => {
  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
    rows,
  } = useTable(
    {
      columns,
      data,
      props,
    },
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  return (
    <>
      {selectedFlatRows.length > 0 && (
        <Button w={"100%"} transition={"all"}>
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={"0.5rem"}
            w={"100%"}
            fontSize={"sm"}
            justifyContent={"center"}
            color={"gray.500"}
          >
            <DeleteIcon /> Eliminar registros seleccionados (
            {selectedFlatRows.length})
          </Text>
        </Button>
      )}
      {!isLoading ? (
        <>
        <Table {...getTableProps()} bg={"white"} w={"100%"}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <Tr fontSize={"sm"} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        
      <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingBlock={"1rem"}
    >
      <Flex alignItems={"center"} gap={"0.5rem"}>
        <Select
          size={"sm"}
          rounded={"lg"}
          w={"fit-content"}
          fontSize={"sm"}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </Select>
        <Text color={"gray.500"} fontSize={"xs"} fontStyle={"italic"}>
          Entradas por pagina
        </Text>
      </Flex>
      <Flex alignItems={"center"} gap={"0.5rem"}>
        <Text fontSize={"sm"}>
          Pagina {pageIndex + 1} de {pageOptions.length}
        </Text>
        <Tooltip label={"Primera pagina"}>
          <IconButton
            size={"sm"}
            onClick={() => gotoPage(0)}
            isDisabled={!canPreviousPage}
            icon={<ArrowLeftIcon h={3} w={3} />}
          />
        </Tooltip>
        <Tooltip label={"Página anterior"}>
          <IconButton
            size={"sm"}
            onClick={previousPage}
            isDisabled={!canPreviousPage}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>

        <Tooltip label={"Siguiente pagina"}>
          <IconButton
            size={"sm"}
            onClick={nextPage}
            isDisabled={!canNextPage}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label={"Ultima pagina"}>
          <IconButton
            size={"sm"}
            onClick={() => gotoPage(pageCount - 1)}
            isDisabled={!canNextPage}
            icon={<ArrowRightIcon h={3} w={3} />}
          />
        </Tooltip>
      </Flex>
    </Flex>
    </>
      ) : (
        <Flex
          alignItems={"center"}
          w={"100%"}
          gap={"0.5rem"}
          justifyContent={"center"}
          p={"2rem"}
        >
          <Spinner size={"md"} />
          <Text>Cargando</Text>
        </Flex>
      )}

    </>
  );
};

export default Datatable;
