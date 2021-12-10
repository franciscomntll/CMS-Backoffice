import { Dispatch, FC, SetStateAction } from "react";
import { BellIcon } from "../icons";
import { MenuIcon } from "../icons/MenuIcon";
import { ButtonIcon } from "../Inputs";
import ProfileComponent from "../ProfileComponent";

interface propsNavigation {
  set : Dispatch<SetStateAction<boolean>>
  state : boolean
}

const Navigation: FC <propsNavigation> = ({set, state}) => {
  return (
    <div className="w-full h-16 bg-white shadow-md py-2">
      <div className="xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto inset-x-0 flex items-center justify-between">
        <ButtonIcon onClick={() => set(!state)}>
          <MenuIcon className="w-6 h-6 text-gray-400" />
        </ButtonIcon>
        <span className="inline-flex items-center gap-4">
          <ButtonIcon onClick={() => {}}>
            <BellIcon className="text-gray-400 w-6 h-6" />
          </ButtonIcon>
          <ProfileComponent />
        </span>
      </div>
    </div>
  );
};

export default Navigation;
