import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { columnsDataTable } from "components/Datatable/Columns";
import { Datatable } from "components/Datatable/Datatable";
import { useFetch } from "hooks/useFetch";
import { useEffect, useMemo, useState } from "react";

export const PanelViewTable = ({ slug, state, dispatch }) => {
  const [data, isLoading, isError, setQuery] = useFetch();
  const [dataRemove, isLoadingRemove, isErrorRemove, setQueryRemove] = useFetch(true)
  const [selected, setSelected] = useState(columnsDataTable({ slug }));
  const columns = useMemo(() => selected?.schema, [selected]);

  useEffect(() => {
    setQuery({ ...selected.getData, type: "json" });
  }, [selected, state, isLoadingRemove]);

  useEffect(() => {
    dispatch({ type: "VIEW", payload: {} });
    setSelected(columnsDataTable({ slug }));
  }, [slug]);

  // useEffect(() => {
  //   !isLoading && !isError && setData(dato)
  // }, [dato, isLoading, isError]);
  

  const handleRemoveItem = (idSelected) => {
    console.log(idSelected);
    setQueryRemove({...selected.deleteEntry, variables: {id : idSelected}, type: "json"})
    //setQuery({ ...selected.getData, type: "json" });
  }
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
        <Box>
          <Heading fontSize={"3xl"} as={"h1"} textTransform={"capitalize"}>
            {selected?.title}
          </Heading>
          <Text fontSize={"sm"}>
            {!isLoading && !isError && JSON.stringify(data?.total)} registros
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
            data={data?.results?.filter(item => item&&item) ?? [] }
            isLoading={isLoading}
            handleRemoveItem={handleRemoveItem}
            initialState={{ 
              hiddenColumns: selected?.hiddenColumns ?? {},
              sortBy: [
                {
                    id: 'createdAt',
                    desc: true
                }
            ]
             }}
            setAction={dispatch}
          />
        </Box>
      </Flex>
    </>
  );
};
