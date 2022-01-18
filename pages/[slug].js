import { Box, Button, Flex } from "@chakra-ui/react"
import { useMemo } from "react";
import Datatable from "../components/Datatable";

const Module = ({slug}) => {
    const columns = useMemo(
        () => [
          {
            Header: "Title",
            accessor: "title",
          },
          {
            Header: "Fecha de publicacion",
            accessor: "createdAt",
          },
          {
            Header: "Categoria",
            accessor: "category",
          },
          {
            Header: "Acciones",
            accessor: "",
          },
        ],
        []
      );
    return (
        <Flex as={"section"} flexDir={"column"} gap={"1rem"}>
                <Button w={"fit-content"} px={"1rem"}>Añadir registro</Button>
            <Box bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"}>
            <Datatable columns={columns} data={[{}]} />
            </Box>
        </Flex>
    )
}

export default Module


export async function getServerSideProps({params}) {
    
    return {
      props: params, // will be passed to the page component as props
    }
  }

