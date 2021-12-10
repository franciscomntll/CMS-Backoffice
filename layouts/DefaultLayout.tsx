import { FC, useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import {PopupContextProvider} from '../context/PopupContext'

const DefaultLayout: FC = ({ children }) => {
    const [show, setShow] = useState<boolean>(true)
  return (
    <>
    <PopupContextProvider>
    <div className="flex overflow-hidden h-screen">
      <Sidebar state={show} set={(act) => setShow(act)} />
      <div className="grid w-full">
        <Navigation set={act => setShow(act)} state={show}/>

        <main className="bg-groay-100 w-full min-h-screen px-5">{children}</main>
        
      </div>
      
    </div>
    <style jsx global>
    {`
      main {
        min-height: calc(100vh - 4rem);
      }

      ::-webkit-scrollbar {
        width: 8px;
        display: none;
      }
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 6px;
      }
      ::-webkit-scrollbar-thumb {
        background: pink;
        border-radius: 6px;
        height: 50%;
      }

    `}
  </style>
  </PopupContextProvider>
  </>
  );
};

export default DefaultLayout;
