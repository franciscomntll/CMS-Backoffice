import { Flex } from "@chakra-ui/react";
import { useEffect, useReducer } from "react";
import dynamic from 'next/dynamic'
const PanelEditAndCreate = dynamic(() => import('../components/PanelEditAndCreate').then(mod => mod.PanelEditAndCreate), { ssr: false })
import { PagesWithAuth } from "../HOC/PageWithAuth";
import { PanelViewTable } from "../components/PanelViewTable";
import { FormDinamicalNEW } from "../components/Resumen"
import { AuthContextProvider } from '../context/AuthContext'


const Module = ({ slug }) => {

  const { state, dispatch } = AuthContextProvider()

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
