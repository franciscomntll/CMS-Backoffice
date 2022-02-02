import { Box, Text, FormLabel, Input } from "@chakra-ui/react"
import { useField } from "formik";
import { memo } from "react";


export const InputField = memo(({label, ...props}) => {
    const [field, meta, helpers] = useField(props);
    

    return(
        <Box>
            <FormLabel fontSize={"sm"} >{label}</FormLabel>
            <Input variant={"filled"} fontSize={"sm"} {...field} {...props}  />
            {meta.touched && meta.error && <Text color={"red"} fontSize={"xs"}>{meta.error}</Text>}
        </Box>
    )
})

