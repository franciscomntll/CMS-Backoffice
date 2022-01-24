import { Checkbox, Input } from "@chakra-ui/react"
import { forwardRef, useEffect, useRef, useState } from "react"

export const IndeterminateCheckbox = forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = useRef()
      const resolvedRef = ref || defaultRef
  
      useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  

      
      return (
        <>
          <Checkbox type="checkbox" isChecked={rest.checked} isIndeterminate={indeterminate} ref={resolvedRef} {...rest} />
        </>
      )
    }
  )
  