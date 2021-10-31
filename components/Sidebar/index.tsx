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

const colecciones = ["Usuarios", "Productos", "Categorias", "Posts", "Posts"];
const Sidebar: FC<propsSidebar> = ({ state, set }) => {
  
  return (
    <aside
      className={`md:w-72 h-screen bg-indigo-900 shadow-lg transition-all overflow-y-auto ${
        state ? "" : "-ml-72"
      } py-6`}
    >
      <Branding />
      <div className="w-full py-8 flex flex-col gap-6">
        <SectionList title={"Colecciones"} options={colecciones} />
        <SectionList title={"Tipos unicos"} options={colecciones} />
      </div>
      
    </aside>
  );
};

export default Sidebar;

interface propsSectionList {
    title: string
    options : string[]
}
export const SectionList: FC <propsSectionList> = ({title, options}) => {
    const [selected, setSelect] = useState<number>(0);
  return (
    <div className="w-full flex gap-2 flex-col">
      <h2 className="text-white font-bold px-6 text-sm">{title}</h2>
      <ol className="flex flex-col list-disc list-inside h-48 overflow-y-auto">
        {colecciones.map((item, idx) => (
          <ItemList
            key={idx}
            data={item}
            selected={selected === idx}
            onClick={() => setSelect(idx)}
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
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(selected);
  }, [selected]);
  return (
    <li
      className={`${
        active ? "text-white bg-indigo-800" : "text-gray-400"
      } text-sm  font-semibold cursor-pointer  hover:text-white transition hover:bg-indigo-800 px-6 py-2 `}
      {...rest}
    >
      {data}
    </li>
  );
};
