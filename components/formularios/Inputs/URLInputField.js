import {
    Box,
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
      <FormLabel fontSize={"sm"}>{label}</FormLabel>
      <InputGroup size="sm">
        <InputLeftAddon children="https://" />
        <Input variant={"filled"} fontSize={"sm"} {...field} {...props} />
      </InputGroup>
    </Box>
  );
};

