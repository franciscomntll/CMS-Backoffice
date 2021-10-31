import { useField } from "formik";
import { FC } from "react";


interface propsToggleButton {
  label: string
  name : string
  
}
export const ToggleButton : FC <propsToggleButton> = ({label, ...props}) => {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="flex items-center justify-start w-full relative ">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer text-sm">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            //value={field.value}
            //onChange={() => helpers.setValue(!field.value)}
            {...field} {...props}
          />
          <div className={`block ${field.value ? "bg-green-400" : "bg-red-400"} w-12 h-7 rounded-full`}/>
          <div className={`dot absolute left-1 top-1 bg-white w-5 h-5  rounded-full transition transform ${field.value ? " translate-x-full" : ""}`}/>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{label}</div>
      </label>
      {meta.touched && meta.error ? (
          <div className="error text-red-500 text-xs absolute pl-1 pt-0.5 bottom-0 left-0 transform translate-y-full">
            {meta.error}
          </div>
        ) : null}
    </div>
  );
};

