import { Divider, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAsyncDebounce } from "react-table";
import { SearchIcon } from "../Icons/index"

const GlobalFilter = ({
  globalFilter,
  setGlobalFilter,
}) => {

  const [value, setValue] = useState(globalFilter)
  
  console.log("globalFilter",globalFilter)

  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)


  /* useEffect(() => {
    setValue(globalFilter ?? "")
  }, [globalFilter]); */

  return (
    <div className={` w-1/2 mr-4`}>
      <Input variant={"filled"} value={value} onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
        placeholder={`Buscar...`} />
    </div>


  )
};

export default GlobalFilter;
