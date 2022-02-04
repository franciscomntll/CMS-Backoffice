import {
    Box,
  Divider,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useField } from "formik";

export const URLInputField = ({label, ...props}) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Box>
       <Divider />
    <FormLabel paddingTop={"1rem"} fontWeight={"900"} textAlign={"left"} fontSize={"sm"}>{label}</FormLabel>
      <InputGroup fontSize={"sm"} >
        <InputLeftAddon children="https://" />
        <Input variant={"filled"} fontSize={"sm"} {...field} {...props} />
      </InputGroup>
    </Box>
  );
};

