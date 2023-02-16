import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Switch,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useCallback, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { FormDinamical } from "../components/formularios/Form";
import { FindOption } from "../components/Datatable/Columns";
import { LoadingComponent } from "../components/LoadingComponent";
import { DeleteIcon } from "@chakra-ui/icons";
import { formatTime } from "../utils/formatTime";
import { fetchApi } from "../utils/Fetching";
import { AuthContextProvider } from "../context/AuthContext";

export const PanelEditAndCreate = ({ slug, setAction, state }) => {

  const [valuesEdit, loadingValues, errorValues, setQueryValues] = useFetch();
  const refButton = useRef();
  const toast = useToast();
  const options = FindOption(slug);
  const {user} = AuthContextProvider();

  console.log( "options",options)

  useEffect(() => {
    if (state.type === "edit") {
      setQueryValues({
        ...options?.getByID,
        variables: { id: state.data._id },
        type: "json",
      });
    }
  }, [state]);

  /* componente que indica la actualizacion y por quien se creo la empresa o post */
  const Information = [
    {
      title: "Ultima Actualización",
      value: formatTime(valuesEdit?.updatedAt, "es"),
    },
    { title: "Creado por", value: user.email },
  ];

  /* Fetch para crear */
  const fetchCreate = useCallback(
    async (values) => {
      try {
        const data = await fetchApi(
          options?.createEntry?.query,
          { ...values },
          "formData"
        );
        if (data) {
          toast({
            status: "success",
            title: "Operacion exitosa",
            isClosable: true,
          });
          setAction({ type: "VIEW", payload: {} });
        }
      } catch (error) {
        toast({
          status: "error",
          title: "Error",
          description: JSON.stringify(error),
          isClosable: true,
        });
        console.log(error);
      }
    },
    [slug]
  );

  /* Fetch para actualizar */
  const fetchUpdate = useCallback(
    async ({
      _id,
      characteristics2,
      questionsAndAnswers2,
      categories,
      ...values
    }) => {
      try {
        delete values.createdAt;
        delete values.updatedAt;
        const data = await fetchApi(
          options?.updateEntry?.query,
          { id: _id, args: values },
          "formData"
        );
        console.log(data);
        if (data) {
          toast({
            status: "success",
            title: "Operacion exitosa",
            isClosable: true,
          });
          setAction({ type: "VIEW", payload: {} });
        } else {
          throw new Error("Error en la peticion");
        }
      } catch (error) {
        toast({
          status: "error",
          title: "Error",
          description: JSON.stringify(error),
          isClosable: true,
        });
        console.log(error);
      }
    },
    [slug]
  );

  const handleSubmit = (values) => {
    state.type === "create" && fetchCreate(values);
    state.type === "edit" && fetchUpdate(values);
  };

  return (
    <Flex flexDir={"column"} overflow={"auto"} maxH={"100%"} mb={"4rem"}>
      {!loadingValues && !errorValues ? (
        <>
          {/* Header del componente */}
          <Flex justifyContent={"space-between"} paddingY={"2rem"} paddingX={"2rem"}>

            {/* Titulo del componente */}
            <Box>
              <Heading fontSize={"3xl"} as={"h1"} textTransform={"capitalize"}>
                {valuesEdit?.businessName ||
                  valuesEdit?.title ||
                  "Crear Registro"}
              </Heading>
              <Text fontSize={"xs"}>Identificador: {valuesEdit?._id}</Text>
            </Box>

            {/* Botones funcionales DESCARTAR O GUARDAR */}
            <Flex gap={"1rem"} alignItems={"center"}>
              <utton
                w={"fit-content"}
                className=" bg-botonBack h-10 w-24 rounded-lg text-white flex justify-center items-center" 
                onClick={() => setAction({ type: "VIEW", payload: {} })}
              >
                Descartar
              </utton>

              <button
                w={"fit-content"}
                bg={"blue.600"}
                color={"white"}
                fontWeight={"500"}
                _hover={{
                  bg: "blue.700",
                }}
                className="bg-verde h-10 w-20 rounded-lg text-white"
                onClick={async () => {
                  try {
                    await refButton.current.handleSubmit();
                    // setAction({ type: "VIEW", payload: {} })
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Guardar
              </button>
            </Flex>
          </Flex>

          {/* Cuerpo del componente Grilla */}
          <Grid
            templateColumns={["repeat(1, 1fr)", , , , "repeat(5, 1fr)"]}
            gap={"1rem"}
            overflow={"auto"}
            h={"100%"}
            paddingX={"1rem"}
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
                ref={refButton}
                columns={["repeat(1, 1fr)", , , "repeat(3, 1fr)"]}
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

              {state.type === "edit" && (
                <ButtonDeleteEntry values={valuesEdit} options={options} />
              )}
            </GridItem>
          </Grid>
        </>
      ) : (
        <LoadingComponent />
      )}
    </Flex>
  );
};

const ButtonDeleteEntry = ({ values, options }) => {
  const [data, isLoading, isError, setQuery] = useFetch(true);

  const handleRemove = () => {
    setQuery({
      ...options.deleteEntry,
      variables: { id: values?._id },
      type: "json",
    });
  };

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
