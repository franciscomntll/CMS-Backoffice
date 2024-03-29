import { Box, Button, Flex, Heading, Text, IconButton } from "@chakra-ui/react";
import { columnsDataTable } from "../components/Datatable/Columns";
import { Datatable } from "../components/Datatable/Datatable";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useMemo, useState } from "react";
import { BodyStaticAPP } from "../utils/schemas";
import { FiltrarIcon, SearchIcon, PermisosIcon, ArrowDownIcon, OptionIcon } from "../components/Icons/index"
import GlobalFilter from "./Datatable/GlobalFilter";

export const PanelViewTable = ({ slug, state, dispatch }) => {
  const [data, isLoading, isError, setQuery] = useFetch();
  const [dataRemove, isLoadingRemove, isErrorRemove, setQueryRemove] = useFetch(true);
  const [selected, setSelected] = useState(columnsDataTable({ slug }));
  const columns = useMemo(() => selected?.schema, [selected]);
  const [global, setGlobal] = useState()
  const [seteador, setSeteador] = useState(() => () => { })

  useEffect(() => {
    setQuery({ ...selected.getData, type: "json" });
  }, [selected, state, isLoadingRemove]);

  useEffect(() => {
    dispatch({ type: "VIEW", payload: {} });
    setSelected(columnsDataTable({ slug }));
  }, [slug]);

  const handleRemoveItem = (idSelected) => {
    setQueryRemove({
      ...selected.deleteEntry,
      variables: { id: idSelected },
      type: "json",
    });
  };

  useEffect(() => {
    console.log(1001, seteador)
  }, [seteador])

  return (
    <>
  
     <div className="w-full px-5">
          <div className=" flex justify-between w-100%">

            <Box>
              <Heading fontSize={"2xl"} textTransform={"capitalize"} className="mt-2">
                {(() => {
                  if (selected?.title === "Marcas") {
                    return (
                      <Text>Empresas/{selected?.title}</Text>
                    )
                  } else if (selected?.route === "categoryBusiness") {
                    return (
                      <Text>Empresas/{selected?.title}</Text>
                    )
                  } else if (selected?.route === "subcategoriesBusiness") {
                    return (
                      <Text>Empresas/{selected?.title}</Text>
                    )
                  } else if (selected?.title === "Caracteristicas") {
                    return (
                      <Text>Empresas/{selected?.title}</Text>
                    )
                  } else if (selected?.title === "Campañas") {
                    return (
                      <Text>Empresas/{selected?.title}</Text>
                    )
                  } else if (selected?.route === "questions") {
                    return (
                      <Text>Empresas/{selected?.title}</Text>
                    )
                  } else if (selected?.title === "Posts") {
                    return (
                      <Text>Blog/{selected?.title}</Text>
                    )
                  } else if (selected?.route === "categoriesPosts") {
                    return (
                      <Text>Blog/{selected?.title}</Text>
                    )
                  } else if (selected?.route === "subcategoriesPost") {
                    return (
                      <Text>Blog/{selected?.title}</Text>
                    )
                  } else if (selected?.route === "sections") {
                    return (
                      <Text>Paginas/{selected?.title}</Text>
                    )
                  }
                })()}
              </Heading>
            </Box> 

            {/* <div className="flex gap-2 w-auto mt-2 " >
              <button className="h-8 w-auto gap-2 border-2 border-gray-200 rounded-md flex justify-center items-center px-2">
                <FiltrarIcon />
                <Text className="text-sm">Juan Carlos</Text>
                <ArrowDownIcon />
              </button>
              <button className="h-8 w-auto border-2 border-gray-200 rounded-md flex justify-center items-center px-2">
                <OptionIcon />
              </button>
            </div> */}

          </div>

          <div className="flex justify-between w-100% relative">

            <button
              w={"fit-content"}
              px={"0.5rem"}
              color={"white"}
              fontWeight={"400"}
              _hover={"green.500"}
              onClick={() => dispatch({ type: "CREATE", payload: {} })}
              className="p-2 mt-2 bg-verde rounded-lg text-white hover:bg-hover-verde"
            >
              Añadir registro
            </button>

            <div className=" absolute h-8  rounded-md px-2 flex items-center  border-gray-400 border-2  bottom-0 right-0 ">
              <SearchIcon />
              <GlobalFilter
                globalFilter={global}
                setGlobalFilter={seteador}
              />
            </div>
          </div>
        </div>

   
      <Flex w={"100%"} overflow={"hidden"}>
        <Box
          bg={"white"}
          rounded={"xl"}
          overflow={"auto"}
          mb={"4rem"}
          w={"100%"}

        >
          <Datatable
            setSeteador={setSeteador}
            columns={columns}
            data={data?.results?.filter((item) => item && item) ?? []}
            isLoading={isLoading}
            handleRemoveItem={handleRemoveItem}
            initialState={{
              hiddenColumns: selected?.hiddenColumns ?? {},
              sortBy: [
                {
                  id: "createdAt",
                  desc: true,
                },
              ],
            }}
            setAction={dispatch}
          />
        </Box>
      </Flex>
    </>
  );
};