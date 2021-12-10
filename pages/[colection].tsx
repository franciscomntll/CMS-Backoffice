import type { NextPage } from "next";
import { useContext, useState } from "react";
import DataTable from "../components/Datatable";
import FormCreate from "../components/Forms/FormCreate";
import { Button } from "../components/Inputs";
import Popup from "../components/Popup";
import Modal from "../components/Popup/Modal";
import { PopupContext, PopupState } from "../context/PopupContext";

const Collection: NextPage = () => {
  const { show, setShow } = useContext(PopupContext);

  const Forms : any = {
    create : {title: "Crear registro", component : <FormCreate />}
  }

  return (
    <>
      <Popup state={show}>
        {show.isVisible && (
          <Modal title={Forms[show.type].title}>
           { Forms[show.type].component}
            </Modal>
        )}
      </Popup>
      <div className="w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto inset-x-0 py-10 h-full">
        <div className="w-full items-center justify-between flex">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-indigo-900">Posts</h1>
            <small className="text-indigo-900">13.552 registros </small>
          </div>
          <Button
            variant={"primary"}
            onClick={() => {
              setShow(new PopupState(true, "create", []));
            }}
          >
            Añadir registro
          </Button>
        </div>
        <DataTable />
      </div>
    </>
  );
};

export default Collection;

export async function getStaticProps() {
  return {
    props: {},
  };
}

export async function getStaticPaths() {
  const colecciones = ["Usuarios", "Productos", "Categorias", "Posts"];
  return {
    paths: colecciones.map((item) => {
      return {
        params: { colection: item?.toLowerCase() },
      };
    }),

    // [
    //   { params: { colection: "posts" } }, // See the "paths" section below
    // ],
    fallback: false,
  };
}
