import { NextPage } from "next";
import { useState } from "react";
import { BlockSecondary } from "../components/Colections";
import { PlusIcon } from "../components/icons";
import { Button } from "../components/Inputs";

const Colections: NextPage = () => {
    const [selected, setSelect] = useState(0)
  const colections = ["Usuarios", "Articulos", "Productos", "Productos"];
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-2 h-full p-6 w-full ">
        <h3 className="text-indigo-500">Tipos de colección</h3>
        <ol className="flex flex-col list-disc list-inside overflow-y-auto text-sm">
          {colections.map((item, idx) => (
            <li className="py-2 text-indigo-900 hover:bg-gray-100 transition rounded pl-4">
              {item}
            </li>
          ))}
        </ol>
        <Button variant={"primary"} onClick={() => {}} className={"w-full"}>
            <PlusIcon className="text-white w-4 h-4"/>
            Crear nueva colección
        </Button>
      </div>

      <div className="col-span-6 h-full p-6 w-full ">
          <BlockSecondary />
      </div>
    </div>
  );
};

export default Colections;
