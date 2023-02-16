import { Flex } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import dynamic from 'next/dynamic'
const PanelEditAndCreate = dynamic(() => import('../components/PanelEditAndCreate').then(mod => mod.PanelEditAndCreate), { ssr: false })
import { PagesWithAuth } from "../HOC/PageWithAuth";
import { PanelViewTable } from "../components/PanelViewTable";
import {FormDinamicalNEW} from "../components/Resumen"



export class Action {
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
    case "VIEWW":
      return new Action("vieww", action.payload);
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
  //console.log("slug-father", slug)

  const [state, dispatch] = useReducer(reducer, new Action("view", {}));

  useEffect(() => {
    dispatch({ type: "VIEW", payload: {} });
  }, [slug]);

  return (
    <Flex as={"section"} flexDir={"column"} gap={"1rem"} h={"100%"}>
      {state.type === "view" && (
        <PanelViewTable slug={slug} state={state} dispatch={dispatch} />
      )}
      {state.type === "vieww" && (
        <FormDinamicalNEW setAction={dispatch} slug={slug} state={state} />
      )}
      {["edit", "create"].includes(state.type) && (
        <PanelEditAndCreate setAction={dispatch} slug={slug} state={state} />
      )}
    </Flex>
  );
};

export default PagesWithAuth(Module);

export async function getServerSideProps({ params }) {
  return {
    props: params,
  };
}
