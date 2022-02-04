import {
  Box,
  Button,
  Divider,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useField } from "formik";
import { useState } from "react";

export const PasswordInput = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box>
       <Divider />
    <FormLabel paddingTop={"1rem"} fontWeight={"900"} textAlign={"left"} fontSize={"sm"}>{label}</FormLabel>
      <InputGroup>
        <Input fontSize={"sm"} {...field} {...props} type={show ? 'text' : 'password'} />
        <InputRightElement width="4.5rem" pr={"0.5rem"}>
          <Button bg={"gray.300"} h="1.75rem" size="sm" fontSize={"xs"} onClick={handleClick}>
            {show ? "Ocultar" : "Mostrar"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

;
