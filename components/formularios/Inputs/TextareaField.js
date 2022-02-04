import { Box, Divider, FormLabel, Textarea } from "@chakra-ui/react"
import { useField } from "formik";


export const TextareaField = ({label, ...props}) => {

    const [field, meta, helpers] = useField(props);

    return(
        <Box>
             <Divider />
    <FormLabel paddingTop={"1rem"} fontWeight={"900"} textAlign={"left"} fontSize={"sm"}>{label}</FormLabel>
            <Textarea fontSize={"sm"} {...field} {...props}  />
        </Box>
    )
}
