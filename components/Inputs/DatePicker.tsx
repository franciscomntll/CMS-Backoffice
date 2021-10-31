import dayjs from "dayjs";
import { useField } from "formik";
import { useState, FC, Dispatch, SetStateAction, ReactNode } from "react";
import ClickAwayListener from "react-click-away-listener";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

interface propsDatePicker {
  label : string
  name : string
  children : ReactNode
}
export const DatePicker: FC <propsDatePicker> = ({label, ...props}) => {
  const [show, setShow] = useState(false);
  const [field, meta, helpers] = useField(props);
  return (
    <ClickAwayListener onClickAway={() => show && setShow(false)}>
      <div className="relative w-full">
        <div
          className="w-full border-2 py-2 pl-2 border-gray-300 text-gray-900 focus:outline-none focus:border-gray-700 text-sm transition-colors h-10 rounded-md cursor-pointer"
          onClick={() => setShow(!show)}
        >
            <p className="text-sm">{field?.value && dayjs(field.value).format("DD-MM-YYYY")}</p>
          <input
            id={field.name}
            className="peer hidden"
            placeholder="john@doe.com"
            {...props}
            {...field}
          />
          <label
            htmlFor={field.name}
            className={`absolute left-2 -top-2 text-gray-400 text-xs transition-all px-1 bg-white cursor-pointer
            peer-placeholder-shown:top-1/4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400  peer-focus:-top-2 peer-focus:text-gray-600 peer-focus:text-xs  peer-focus:text-xs peer-focus:bg-white peer-focus:px-1 `}
          >
            {label}
          </label>
          {meta.touched && meta.error ? (
         <div className="error text-red-500 text-xs absolute pl-1 bottom-0 left-0 transform translate-y-full">{meta.error}</div>
       ) : null}
        </div>

        {show && <DateComponent setState={act => setShow(act)} set={(day) => helpers.setValue(day)} />}
      </div>
    </ClickAwayListener>
  );
};


interface propsDateComponent {
  setState : Dispatch<SetStateAction<any>>
  set : Dispatch<SetStateAction<any>>
}

const DateComponent: FC  <propsDateComponent> = ({ set, setState }) => {
    const handleClickDay = (day : Date) => {
        set(day)
        setState(false)
    } 
  return (
    <>
      <div className="fixed mx-auto inset-x-0 top-1/4 w-max  bg-white rounded-lg p-2 z-30  ">
        <DayPicker onDayClick={handleClickDay} />
      </div>
      <style jsx>
        {`
          .date-picker {
            opacity: 0;
          }
          .date-picker-enter {
            opacity: 0;
          }
          .date-picker-enter-active {
            opacity: 1;
            transition: opacity 200ms;
          }
          .date-picker-exit {
            opacity: 1;
          }
          .date-picker-exit-active {
            opacity: 0;
            transition: opacity 200ms;
          }
        `}
      </style>
    </>
  );
};
