import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { HomeIcon, ExitIcon, ConfigIcon } from "../icons/";
import ClickAwayListener from "react-click-away-listener";

const ProfileComponent: FC = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <ClickAwayListener onClickAway={() => show && setShow(false)}>
    <div  onClick={() => setShow(!show)} className="flex items-center gap-2 transition relative cursor-pointer">
      <div className="w-12 h-12 relative rounded-full overflow-hidden border-2 border-indigo-500">
        <Image
          src={"/perfil.jpg"}
          layout={"fill"}
          objectFit={"cover"}
          objectPosition={"center"}
          alt={"Imagen de perfil"}
        />
      </div>
      <div className="text-indigo-800 leading-5">
        <h3 className=" font-medium">Francisco Montilla</h3>
        <p className="font-semibold text-sm">Dev</p>
      </div>
      <MenuComponent state={show} />
    </div>
    </ClickAwayListener>
  );
};

export default ProfileComponent;

interface propsMenuComponent {
  state: boolean;
}
const MenuComponent: FC<propsMenuComponent> = ({ state }) => {
  const listMenu = [
    { title: "Inicio", route: "/", icon: <HomeIcon className="w-5 h-5"/>, textcolor: "text-gray-500" },
    { title: "Configuración", route: "/", icon: <ConfigIcon className="w-5 h-5"/>, textcolor: "text-gray-500" },
    { title: "Cerrar Sesión", route: "/", icon: <ExitIcon className="w-5 h-5"/>, textcolor: "text-red-500" },
  ];
  return (
    <>
      <CSSTransition
        in={state}
        unmountOnExit
        timeout={200}
        classNames="my-node"
      >
        <ul
          className={`w-full absolute bg-white -bottom-2 left-0 grid rounded-xl transform translate-y-full overflow-hidden text-gray-600`}
        >
          {listMenu.map((item, idx) => (
            <Link key={idx} href={item.route} passHref>
              <li
                className={`text-sm font-medium w-full items-center flex h-full gap-1 py-3 px-3 hover:bg-gray-100 transition cursor-pointer ${item.textcolor} ${
                  idx == listMenu.length - 1 ? "" : "border-b border-gray-200 "
                }`}
              >
                {item.icon}
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </CSSTransition>

      <style jsx>
        {`
          .my-node {
            opacity: 0;
          }
          .my-node-enter {
            opacity: 0;
          }
          .my-node-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .my-node-exit {
            opacity: 1;
          }
          .my-node-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        `}
      </style>
    </>
  );
};
