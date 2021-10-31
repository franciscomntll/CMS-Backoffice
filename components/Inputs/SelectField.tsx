import { useField } from "formik";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import ClickAwayListener from "react-click-away-listener";

interface propsSelectField {
  label: string;
  name: string
  options: option[];
}

interface option {
  title: string;
}

export const SelectField: FC<propsSelectField> = ({
  label,
  options,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const [state, setState] = useState(false);

  const handleClick = (act: string) => {
    helpers.setValue(act);
    setState(false);
  };
  return (
    <ClickAwayListener onClickAway={() => state && setState(false)}>
      <>
        <div className="relative w-full">
          <div
            className="w-full border-2 py-2 pl-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-700 text-sm transition-colors h-10 rounded-md cursor-pointer"
            onClick={() => setState(!state)}
          >
            {field?.value && (
              <p className="text-sm text-gray-900">{field.value}</p>
            )}

            <input
              id={field.name}
              className="peer hidden"
              placeholder="john@doe.com"
              {...field}
              {...props}
            />
            <label
              htmlFor={field.name}
              className={`absolute left-2 -top-2 text-gray-400 text-xs transition-all px-1 bg-white cursor-pointer
              peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400  peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs  peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 `}
            >
              {label}
            </label>
          </div>
          {state && (
            <Dropdown
              set={(act: string) => handleClick(act)}
              options={options}
            />
          )}
          {meta.touched && meta.error ? (
            <div className="error text-red-500 text-xs absolute pl-1 pt-0.5 bottom-0 left-0 transform translate-y-full">
              {meta.error}
            </div>
          ) : null}
        </div>
      </>
    </ClickAwayListener>
  );
};


interface propsDropdown {
  options: option[];
  set: Dispatch<SetStateAction<any>>;
}
const Dropdown: FC<propsDropdown> = ({ options, set }) => {
  return (
    <ul className="w-full absolute bottom-0 translate-y-full transform left-0 grid bg-white rounded-md shadow border z-30 text-sm cursor-pointer">
      {options?.map((item, idx) => (
        <li
          key={idx}
          onClick={() => set(item.title)}
          className="py-1 px-2 hover:bg-gray-200 transition"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
