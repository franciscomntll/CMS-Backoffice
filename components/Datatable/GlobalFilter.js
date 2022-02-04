import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) => {

  const [value, setValue] = useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  useEffect(() => {
    setValue(globalFilter ?? "")
  }, [globalFilter]);
  
  return (
      <Input variant={"filled"} value={value} onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }} placeholder={`Buscar...`} />
    
    )
};

export default GlobalFilter;
