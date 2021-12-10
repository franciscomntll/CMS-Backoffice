import { FC } from "react";
import { CSSTransition } from "react-transition-group";

interface propsPopup {
  state: { isVisible: boolean };
}
const Popup: FC<propsPopup> = ({ state, children }) => {
  return (
    <>
      <CSSTransition
        in={state?.isVisible}
        unmountOnExit
        timeout={200}
        classNames="my-node"
      >
        <div className="fixed m-auto inset-0 bg-black bg-opacity-70 transition w-full h-full z-50 flex items-center justify-center ">
          {children}
        </div>
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
            transition: all 200ms;
          }
          .my-node-exit {
            opacity: 1;
          }
          .my-node-exit-active {
            opacity: 0;
            transition: all 200ms;
          }
        `}
      </style>
    </>
  );
};

export default Popup;
