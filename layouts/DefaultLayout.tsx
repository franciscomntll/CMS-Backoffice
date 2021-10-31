import { FC, useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

const DefaultLayout: FC = ({ children }) => {
    const [show, setShow] = useState<boolean>(true)
  return (
    <>
    <div className="flex overflow-x-hidden">
      <Sidebar state={show} set={(act) => setShow(act)} />
      <div className="grid w-full px-5">
        <Navigation set={act => setShow(act)} state={show}/>

        <main className="bg-gray-100 w-full min-h-screen">{children}</main>
        
      </div>
      
    </div>
    <style jsx>
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
  </>
  );
};

export default DefaultLayout;
