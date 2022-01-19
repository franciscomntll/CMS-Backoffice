import { Box, Button, Flex } from "@chakra-ui/react";
import { useEffect, useMemo, useReducer, useState } from "react";
import Datatable from "../components/Datatable";
import { FetchGraphQL } from "../Fetching";
import Form from '../components/Forms/Form'

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
  const initialValues = { total: null, results: [] };
  const [data, setData] = useState(initialValues);
  const [action, setAction] = useReducer(reducer, new Action("view", {}));

  const fetchBusiness = async () => {
    try {
      const result = await FetchGraphQL.getBusinessAll();
      setData(result);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const ObjectData = {
    business: fetchBusiness,
    categoriesBusiness: () => console.log("categorias"),
  };

  useEffect(() => {
    setData(initialValues);
    setAction({ type: "VIEW", payload: {} });
    ObjectData[slug] && ObjectData[slug]();
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
    <Flex as={"section"} flexDir={"column"} gap={"1rem"}>
      {action.type === "view" && <Button
        w={"fit-content"}
        px={"1rem"}
        onClick={() => setAction({ type: "CREATE", payload: {} })}
      >
        Añadir registro
      </Button>}
      <Box bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"}>
        {action.type === "view" && <Datatable columns={columns} data={data.results} />}
        {action.type === "create" && (
          <>
          <Button onClick={() => setAction({type: "VIEW", payload:{}})}>Atras</Button>
          <Form schema={slug}/>
          </>
        )}
      </Box>
    </Flex>
  );
};

export default Module;

export async function getServerSideProps({ params }) {
  return {
    props: params, // { slug : "business"}
  };
}
