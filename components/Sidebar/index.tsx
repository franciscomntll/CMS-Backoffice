import {
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Branding from "../Branding";

interface propsSidebar {
  state: boolean;
  set: Dispatch<SetStateAction<boolean>>;
}

const colecciones = ["Usuarios", "Productos", "Categorias", "Posts"];
const tipoUnico = ["Banner", "Mensaje Principal"];
const Sidebar: FC<propsSidebar> = ({ state, set }) => {
  const [selected, setSelect] = useState<string>("");

 
  return (
    <aside
      className={`md:w-72 h-screen bg-indigo-900 shadow-lg transition-all overflow-y-auto ${
        state ? "" : "-ml-72"
      } py-6`}
    >
      <Branding />
      <div className="w-full py-8 flex flex-col gap-6">
        <SectionList title={"Colecciones"} options={colecciones} setSelect={select => setSelect(select)} selected={selected} />
        <SectionList title={"Tipos unicos"} options={tipoUnico} setSelect={select => setSelect(select)} selected={selected} />
        
      </div>
      
    </aside>
  );
};

export default Sidebar;

interface propsSectionList {
    title: string
    options : string[]
    setSelect : Dispatch<SetStateAction<string>>
    selected : string
}
export const SectionList: FC <propsSectionList> = ({title, options, setSelect, selected}) => {
  return (
    <div className="w-full flex gap-2 flex-col">
      <h2 className="text-white font-bold px-6 text-sm">{title}</h2>
      <ol className="flex flex-col list-disc list-inside overflow-y-auto">
        {options.map((item, idx) => (
          <ItemList
            key={idx}
            data={item}
            selected={selected === item}
            onClick={() => setSelect(item)}
          />
        ))}
      </ol>
    </div>
  );
};

interface propsItemList {
  data: string;
  onClick: any;
  selected: boolean;
}

const ItemList: FC<propsItemList> = ({ data, selected, ...rest }) => {
  
  return (
    <li
      className={`${
        selected ? "text-white bg-indigo-800" : "text-gray-400"
      } text-sm  font-semibold cursor-pointer  hover:text-white transition hover:bg-indigo-800 px-6 py-2 `}
      {...rest}
    >
      {data}
    </li>
  );
};
