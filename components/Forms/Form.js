import {
  Input,
  FormControl,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  FormLabel,
  SimpleGrid,
  Box,
  Button,
} from "@chakra-ui/react";
import { schemasForForms } from "../../schemas";
//business
const Form = ({ schema }) => {
  return (
    <FormControl onSubmit={(props) => console.log(props)}>
      <SimpleGrid columns={2} gap={"2rem"}>
        {schemasForForms[schema] && Object?.entries(schemasForForms[schema])?.map((item, idx) => {
          if (item[1]?.type === "string") {
            return (
              <Box>
                <FormLabel>{item[0]}</FormLabel>
                <Input name={item[1]?.fetch} type={"text"} />
              </Box>
            );
          }
          
          if (item[1]?.type === "number") {
            return (
              <Box>
                <FormLabel>{item[0]}</FormLabel>
                <NumberInput>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            );
          }
        })}
      </SimpleGrid>
        <Button type={"submit"} w={"100%"} mt={"2rem"}>Enviar datos</Button>
    </FormControl>
  );
};

export default Form;
