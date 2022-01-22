import { Box, FormLabel, Textarea } from "@chakra-ui/react"
import { useField } from "formik";


const TextareaField = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props);

    return(
        <Box>
            <FormLabel fontSize={"sm"} >{label}</FormLabel>
            <Textarea fontSize={"sm"} {...field} {...props}  />
        </Box>
    )
}

export default TextareaField;