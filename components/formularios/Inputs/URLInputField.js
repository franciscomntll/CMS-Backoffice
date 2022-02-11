import {
  Box,
  Divider,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Text
} from "@chakra-ui/react";
import { useField } from "formik";

export const URLInputField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <Box>
      <Divider />
      <FormLabel
        paddingTop={"1rem"}
        fontWeight={"900"}
        textAlign={"left"}
        fontSize={"sm"}
      >
        <Flex gap={"0.3rem"} alignItems={"center"}>
          {label}
          {meta.touched && meta.error && (
            <Text color={"red"} fontSize={"xs"} fontWeight={"500"}>
              {meta.error}
            </Text>
          )}
        </Flex>
      </FormLabel>
      <InputGroup fontSize={"sm"}>
        <InputLeftAddon children="https://" />
        <Input variant={"filled"} fontSize={"sm"} {...field} {...props} />
      </InputGroup>
    </Box>
  );
};
