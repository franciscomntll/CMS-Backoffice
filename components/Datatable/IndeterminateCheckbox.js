import { Checkbox, Input } from "@chakra-ui/react"
import { forwardRef, useEffect, useRef, useState } from "react"

const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef()
      const resolvedRef = ref || defaultRef
      const [checked, setChecked] = useState(true)
  
      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      useEffect(() => {
          console.log(rest);
        setChecked(rest.checked)
      }, [rest.checked]);
      
      return (
        <>
          <Checkbox type="checkbox" isChecked={rest.checked} isIndeterminate={indeterminate} ref={resolvedRef} {...rest} />
        </>
      )
    }
  )
  
  export default IndeterminateCheckbox