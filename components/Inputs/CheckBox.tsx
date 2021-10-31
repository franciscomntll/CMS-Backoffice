import { ChangeEvent, FC } from "react";
import { useField } from 'formik';

interface propsCheckBox {
  label : string
  name : string
}
const CheckBox : FC <propsCheckBox> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <label htmlFor={field.name} className="inline-flex items-center text-sm">
      <input id={field.name} 
        className="text-blue-500 w-6 h-6 mr-2 focus:ring-blue-400 focus:ring-opacity-25 rounded-full border border-gray-300 transition "
        type="checkbox"
        {...field} {...props}
        //onChange={(e: ChangeEvent<HTMLInputElement>) => helpers.setValue(e.target.value)}
      />
      {label}
    </label>
  );
};

export default CheckBox;
