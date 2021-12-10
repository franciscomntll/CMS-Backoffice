import { createContext, FC, useState } from "react";

interface propsPopup {
  isVisible: boolean;
  type: string;
  data: [];
}

const options = {
    create : "",
    edit : "",
    view : "",
    [""] : ""
}

console.log()
export class PopupState implements propsPopup {
  public isVisible: boolean;
  public type: keyof typeof options;
  public data: [];

  constructor(isVisible: boolean, type: keyof typeof options, data: []) {
    this.isVisible = isVisible || false;
    this.type = type || "";
    this.data = data || [];
  }
}

type Context = {
  show: propsPopup;
  setShow: (estado: propsPopup) => void;
};

const initialContext: Context = {
  show: new PopupState(false, "", []),
  setShow: (estado: propsPopup) => {},
};

const PopupContext = createContext<Context>(initialContext);

const PopupContextProvider: FC = ({ children }): JSX.Element => {
  const [show, setShow] = useState<propsPopup>(new PopupState(false, "", []));

  return (
    <PopupContext.Provider value={{ show, setShow }}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupContextProvider };
