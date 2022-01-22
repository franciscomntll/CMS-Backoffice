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
  useToast,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { schemasForForms } from "../../schemas";
import { Formik, Form } from "formik";
import InputField from "./Inputs/InputField";
import InputNumberField from "./Inputs/InputNumberField";
import TextareaField from "./Inputs/TextareaField";
const CKEditorComponent = dynamic(() => import("./inputs/CKEditor"));
import dynamic from "next/dynamic";
import UploadImage from "./Inputs/UploadImage";

//business

const FormDinamical = ({ schema }) => {
  const toast = useToast();
  const initialValues = schemasForForms[schema]?.schema?.reduce(
    (acc, { fetch }) => {
      acc[fetch] = "";
      return acc;
    },
    {}
  );

  const handleSubmit = async (values) => {
    console.log(values)
    let formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });
    // Display the values
  for (var value of formData.values()) {
  console.log("key",value);
}
    
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues ?? {}}>
      <Form>
        <Grid templateColumns="repeat(2, 1fr)" gap={"2rem"}>
          {schemasForForms[schema] &&
            schemasForForms[schema].schema?.map((item, idx) => {
              switch (item.type) {
                case "string":
                  return <InputField key={idx} name={item.fetch} label={item.title} />;
                  break;
                case "number":
                  return (
                    <InputNumberField key={idx} name={item.fetch} label={item.title} />
                  );
                  break;
                case "textarea":  
                  return <TextareaField key={idx} name={item.fetch} label={item.title} />;
                  break;
                case "ckeditor":
                  return (
                    <GridItem key={idx} colSpan={"2"}>
                      <CKEditorComponent name={item.fetch} label={item.title} />
                    </GridItem>
                  );
                  break;
                  case "image":  
                  return <UploadImage key={idx} name={item.fetch} label={item.title} />;
                  break;
                default:
                  break;
              }
            })}
        </Grid>
        <Button type={"submit"} w={"100%"} mt={"2rem"}>
          Enviar datos
        </Button>
      </Form>
    </Formik>
  );
};
export default FormDinamical;
