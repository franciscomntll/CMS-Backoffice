import { Box, Button, Flex, Text, Heading } from "@chakra-ui/react";
import { useEffect, useMemo, useReducer, useState } from "react";
import Datatable from "../components/Datatable";
import { FetchGraphQL } from "../Fetching";
import dynamic from 'next/dynamic'
import PanelEditAndCreate from "../components/PanelEditAndCreate";
const CKEditorComponent = dynamic(() => import('../components/Forms/inputs/CKEditor'), {ssr: false})

class Action {
  type;
  data;
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case "VIEW":
      return new Action("view", action.payload);
    case "EDIT":
      return new Action("edit", action.payload);
    case "CREATE":
      return new Action("create", action.payload);
    case "DELETE":
      return new Action("delete", action.payload);
    default:
      break;
  }
};

const Module = ({ slug }) => {
  const initialValues = { total: 0, results: [] };
  const [data, setData] = useState(initialValues);
  const [action, setAction] = useReducer(reducer, new Action("view", {}));

  const fetchData = async () => {
    try {
      const result = ObjectData[slug] && await ObjectData[slug]();
      result && setData(result);
    } catch (error) {
      
      console.log(error);
      return null;
    }
  };

  const ObjectData = {
    business: FetchGraphQL.getBusinessAll,
    categoriesBusiness: () => console.log("categorias"),
  };

  useEffect(() => {
    setData(initialValues);
    setAction({ type: "VIEW", payload: {} });
    fetchData()
  }, [slug]);

  const columns = useMemo(
    () => [
      {
        Header: "Nombre de la empresa",
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
    <Flex as={"section"} flexDir={"column"} gap={"1rem"} >
      {action.type === "view" && (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
          <Box>
          <Heading fontSize={"3xl"} as={"h1"} textTransform={"capitalize"}>{slug}</Heading>
          <Text fontSize={"sm"}>{JSON.stringify(data.total)} registros</Text>
          </Box>
          <Button
        w={"fit-content"}
        px={"1rem"}
        onClick={() => setAction({ type: "CREATE", payload: {} })}
      >
        Añadir registro
      </Button>

        </Flex>
      )}
        {action.type === "view" && (
      <Box bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"} h={"30rem"} overflow={"auto"}>
          <Datatable columns={columns} data={data.results} />
        </Box>
        )}
        {action.type === "create" && (
          <PanelEditAndCreate setAction={setAction} slug={slug} />
        )}
    </Flex>
  );
};

export default Module;

export async function getServerSideProps({ params }) {
  return {
    props: params, // { slug : "business"}
  };
}
