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
import { Formik, Form } from "formik";
import InputField from "./inputs/InputField";

//business

const FormDinamical = ({ schema }) => {
  const initialValues = schemasForForms[schema]?.schema?.reduce(
    (acc, { fetch }) => {
      acc[fetch] = "";
      return acc;
    },
    {}
  );

  return (
    <Formik
      onSubmit={(value) => console.log(value)}
      initialValues={initialValues ?? {}}
    >
      <Form>
        <SimpleGrid columns={2} gap={"2rem"}>
          {schemasForForms[schema] &&
            schemasForForms[schema].schema?.map((item, idx) => {
              if (item.type === "string") {
                return <InputField name={item.fetch} label={item.title} />;
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
        <Button type={"submit"} w={"100%"} mt={"2rem"}>
          Enviar datos
        </Button>
      </Form>
    </Formik>
  );
};
export default FormDinamical;
