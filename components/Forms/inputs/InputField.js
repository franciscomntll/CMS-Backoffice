import { Box, FormLabel, Input } from "@chakra-ui/react"
import { useField } from "formik";


const InputField = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props);

    return(
        <Box>
            <FormLabel fontSize={"sm"} >{label}</FormLabel>
            <Input fontSize={"sm"} {...field} {...props}  />
        </Box>
    )
}

export default InputField;