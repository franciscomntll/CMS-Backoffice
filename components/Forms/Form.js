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
    <FormControl onSubmit={(props) => schemasForForms[schema].endpoint}>
      <SimpleGrid columns={2} gap={"2rem"}>
        {schemasForForms[schema] && schemasForForms[schema].schema?.map((item, idx) => {
          if (item.type === "string") {
            return (
              <Box>
                <FormLabel>{item.title}</FormLabel>
                <Input name={item.fetch} type={"text"} />
              </Box>
            );
          }
          
          if (item.type === "number") {
            return (
              <Box>
                <FormLabel>{item.title}</FormLabel>
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
