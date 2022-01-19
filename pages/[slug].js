import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import Datatable from "../components/Datatable";
import { FetchGraphQL } from "../Fetching";

const Module = ({ slug }) => {
  const initialValues = {total: null, results: []}
  const [data, setData] = useState(initialValues);
  
  

  const fetchBusiness = async () => {
   try {
    const result = await FetchGraphQL.getBusinessAll()
    setData(result)
   } catch (error) {
     console.log(error);
     return null
   }
     
  }

  const ObjectData = {
    business : fetchBusiness
  }

  useEffect(() => {
    console.log(slug);
    setData(initialValues)
    ObjectData[slug] && ObjectData[slug]()
  }, [slug]);

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "businessName",
      },
      {
        Header: "ID",
        accessor: "_id",
      },
      
    ],
    []
  );
  return (
    <Flex as={"section"} flexDir={"column"} gap={"1rem"}>
      <Button w={"fit-content"} px={"1rem"}>
        Añadir registro
      </Button>
      <Box bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"}>
        <Datatable columns={columns} data={data.results} />
      </Box>
    </Flex>
  );
};

export default Module;

export async function getServerSideProps({ params }) {
  return {
    props: params, // will be passed to the page component as props
  };
}
