import { Box, FormLabel, Input } from "@chakra-ui/react"
import { useField } from "formik";


const InputField = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props);

    return(
        <Box>
            <FormLabel  >{label}</FormLabel>
            <Input  {...field} {...props}  />
        </Box>
    )
}

export default InputField;