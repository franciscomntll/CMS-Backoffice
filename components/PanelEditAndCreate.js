import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { FormDinamical } from "components/formularios/Form";
import { FindOption } from "components/Datatable/Columns";
import { LoadingComponent } from "components/LoadingComponent";
import { DeleteIcon } from "@chakra-ui/icons";
import { formatTime } from "utils/formatTime";

export const PanelEditAndCreate = ({ slug, setAction, state }) => {
  const [valuesEdit, loadingValues, errorValues, setQueryValues] = useFetch();
  const [,,,setQueryCreate] = useFetch(true);
  const [,,,setQueryUpdate] = useFetch(true);

  const options = FindOption(slug);

  useEffect(() => {
    if (state.type === "edit") {
      setQueryValues({ ...options?.getByID, variables: { id: state.data._id }, type: "json" });
    }
  }, [state]);

  const Information = [
    { title: "Ultima Actualización", value: formatTime(valuesEdit?.updatedAt, "es") },
    { title: "Creado por", value: "Jhon Doe" },
  ];

  const fetchCreate = useCallback((values) => {
    setQueryCreate({...options.createEntry, variables: {...values}, type: "formData"})
  }, [slug]);

  const fetchUpdate = useCallback(({_id, ...values}) => {
    delete values.createdAt
    delete values.updatedAt

    setQueryUpdate({...options.updateEntry, variables: {id : _id, args: {...values}}, type:"formData"})
  }, [slug]);

  const handleSubmit = (values) => {
    state.type === "create" && fetchCreate(values)
    state.type === "edit" && fetchUpdate(values)
  }
  
  return (
    <Flex flexDir={"column"} overflow={"auto"} h={"100%"} mb={"4rem"}>
      {!loadingValues && !errorValues ? (
        <>
          <Flex justifyContent={"space-between"} paddingBottom={"2rem"}>
            <Box>
              <Heading fontSize={"3xl"} as={"h1"} textTransform={"capitalize"}>
                {valuesEdit?.businessName || valuesEdit?.title || "Crear Registro"}
              </Heading>
              <Text fontSize={"xs"}>Identificador: {valuesEdit?._id}</Text>
            </Box>
            <Flex gap={"1rem"} alignItems={"center"}>
              <Button
                w={"fit-content"}
                onClick={() => setAction({ type: "VIEW", payload: {} })}
              >
                Descartar
              </Button>
              <Button
                w={"fit-content"}
                onClick={() => setAction({ type: "VIEW", payload: {} })}
              >
                Guardar
              </Button>
            </Flex>
          </Flex>

          <Grid
            templateColumns={["repeat(1, 1fr)", , , , "repeat(5, 1fr)"]}
            gap={"2rem"}
            overflow={"auto"}
            h={"100%"}
          >
            <GridItem
              colSpan={["1", , , , "4"]}
              bg={"white"}
              p={"1rem"}
              shadow={"sm"}
              rounded={"xl"}
            >
              <FormDinamical
                schema={options?.schema}
                initialValues={valuesEdit}
                onSubmit={handleSubmit}
                columns={3}
              />
            </GridItem>
            <GridItem
              colSpan={"1"}
              display={"flex"}
              flexDir={"column"}
              gap={"1rem"}
            >
              <Box bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"}>
                <Heading pb={"1rem"} fontSize={"sm"} color={"gray.500"}>
                  Información
                </Heading>
                <Divider />
                {Information?.map((item, idx) => (
                  <Flex
                    key={idx}
                    pt={"1rem"}
                    w={"100%"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    fontSize={"xs"}
                  >
                    <Text color={"gray.400"}>{item.title}</Text>
                    <Badge
                      w={"100%"}
                      textAlign={"center"}
                      color={"gray.700"}
                      p={"0.25rem"}
                    >
                      {item.value}
                    </Badge>
                  </Flex>
                ))}
              </Box>

             {state.type === "edit" &&  <ButtonDeleteEntry values={valuesEdit} options={options} />}
            </GridItem>
          </Grid>
        </>
      ) : (
        <LoadingComponent />
      )}
    </Flex>
  );
};

const ButtonDeleteEntry = ({values, options}) => {
  const [data, isLoading, isError, setQuery] = useFetch(true)

  const handleRemove = () => {
    setQuery({...options.deleteEntry, variables: {id : values?._id}, type: "json"})
  }

  return (
    <Button
      bg={"white"}
      rounded={"xl"}
      size={"sm"}
      w={"100%"}
      color={"red.500"}
      leftIcon={<DeleteIcon />}
      isLoading={isLoading}
      onClick={handleRemove}
    >
      Eliminar entrada
    </Button>
  );
};
