import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { columnsDataTable } from "components/Datatable/Columns";
import { Datatable } from "components/Datatable/Datatable";
import { useFetch } from "hooks/useFetch";
import { useEffect, useMemo, useState } from "react";

export const PanelViewTable = ({ slug, state, dispatch }) => {
  const [data, isLoading, isError, setQuery] = useFetch();
  const [selected, setSelected] = useState(columnsDataTable({ slug }));
  const columns = useMemo(() => selected?.schema, [selected]);

  useEffect(() => {
    console.log("cambio", state.type);
    setQuery(selected.getData);
  }, [selected, state]);

  useEffect(() => {
    dispatch({ type: "VIEW", payload: {} });
    setSelected(columnsDataTable({ slug }));
  }, [slug]);
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        <Box>
          <Heading fontSize={"3xl"} as={"h1"} textTransform={"capitalize"}>
            {selected?.title}
          </Heading>
          <Text fontSize={"sm"}>
            {JSON.stringify(data?.total ?? 0)} registros
          </Text>
        </Box>
        <Button
          w={"fit-content"}
          px={"1rem"}
          onClick={() => dispatch({ type: "CREATE", payload: {} })}
        >
          Añadir registro
        </Button>
      </Flex>

      <Flex w={"100%"} overflow={"hidden"}>
        <Box
          bg={"white"}
          p={"1rem"}
          shadow={"sm"}
          rounded={"xl"}
          overflow={"auto"}
          mb={"5rem"}
          w={"100%"}
        >
          <Datatable
            columns={columns}
            data={data?.results ?? []}
            isLoading={isLoading}
            initialState={{ hiddenColumns: selected?.hiddenColumns ?? {} }}
            setAction={dispatch}
          />
        </Box>
      </Flex>
    </>
  );
};
