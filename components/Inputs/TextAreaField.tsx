import { useField } from "formik";
import { FC } from "react";


interface propsTextAreaField {
  label : string
  name : string
}
export const TextAreaField : FC <propsTextAreaField> = ({ label, ...props }) => {
  const [field, meta, { setValue }] = useField(props);
  return (
    <div className="flex flex-col items-start w-full p-4 gap-2 focus:outline-none focus:ring-transparent">
      <label className="text-base font-bold text-sm">{label}</label>
      <textarea
        className="w-full text-sm rounded-xl h-32 border-gray-300"
        value={field?.value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={"Escribe aquí"}
      ></textarea>
      ;
    </div>
  );
};
