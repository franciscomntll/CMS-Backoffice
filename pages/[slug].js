import {Flex} from "@chakra-ui/react";
import { useReducer } from "react";
import { PanelEditAndCreate } from "components/PanelEditAndCreate";
import {PagesWithAuth} from "HOC/PageWithAuth";
import { PanelViewTable } from "components/PanelViewTable";

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
  const [state, dispatch] = useReducer(reducer, new Action("view", {}));

  return (
    <Flex as={"section"} flexDir={"column"} gap={"1rem"} h={"100%"}>
      {state.type === "view" && (
        <>
        <PanelViewTable slug={slug} state={state} dispatch={dispatch} /> 
        </>
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
